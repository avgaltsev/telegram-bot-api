import * as path from "path";
import { URL } from "url";

import {launch, Page, ElementHandle} from "puppeteer";

const BASE_URL = "https://core.telegram.org/bots/api";

interface Field {
	name: string;
	type: string;
	isRequired: boolean;
	description: Description[];
}

interface ClassField {
	name: string;
	type: string;
	parametersType: string;
	description: Description[];
}

interface Paragraph {
	type: "paragraph";
	content: string;
}

interface Blockquote {
	type: "blockquote";
	items: Description[];
}

interface List {
	type: "list";
	items: string[];
}

type Description = Paragraph | Blockquote | List;

interface UnionDeclaration {
	type: "union";
	members: string[];
}

interface InterfaceDeclaration {
	type: "interface";
	fields: Field[];
}

type Declaration = UnionDeclaration | InterfaceDeclaration;

interface FieldOverride {
	type?: string;
	isRequired?: boolean;
	description?: Description[];
}

interface Overrides {
	[field: string]: FieldOverride;
}

interface Type {
	name: string;
	declaration?: Declaration;
	overrides?: Overrides;
}

interface Method {
	name: string;
	type: string;
	declaration?: Declaration;
	overrides?: Overrides;
}

interface Input {
	types: Type[];
	methods: Method[];
}

interface Output {
	fields: Field[];
	description: Description[];
}

interface TypeOutput extends Output {
	inputType: Type;
}

interface MethodOutput extends Output {
	inputMethod: Method;
}

function parseType(type: string): string {
	if (!type.indexOf("Array of ")) {
		return parseType(type.replace("Array of ", "")) + "[]";
	}

	if (type.indexOf(" or ") >= 0) {
		return type.split(" or ").map((typePart) => parseType(typePart)).join(" | ");
	}

	return type
		.replace(/<[^>]+>/g, "")
		.replace("String", "string")
		.replace("Boolean", "boolean")
		.replace("True", "true")
		.replace("Integer", "number")
		.replace("Float number", "number")
		.replace("Float", "number");
}

function parseText(text: string): string {
	return text
		.replace(/<\/?em>/g, "_")
		.replace(/<\/?strong>/g, "**")
		.replace(/<\/?code>/g, "`")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/<a[^>]+href="([^>]+)"[^>]*>(.*?)<\/a>/g, (match, p1, p2) => `[${p2}](${(new URL(p1, BASE_URL)).href})`);
}

async function getContent(page: Page, element: ElementHandle): Promise<string> {
	return page.evaluate((element) => element.innerHTML, element);
}

async function getAsParagraph(page: Page, element: ElementHandle): Promise<Paragraph[]> {
	const content = await getContent(page, element);

	return content.split(/(?:<br>)+/).filter((contentItem) => contentItem).map((contentItem) => {
		return {
			type: "paragraph",
			content: parseText(contentItem),
		};
	});
}

async function getAsBlockquote(page: Page, element: ElementHandle): Promise<Blockquote> {
	const contentElements = await element.$x("./*");

	return {
		type: "blockquote",
		items: await getDescription(page, contentElements),
	};
}

async function getAsList(page: Page, element: ElementHandle): Promise<List> {
	const contentElements = await element.$x("./li");

	return {
		type: "list",
		items: await Promise.all(contentElements.map(async (contentElement) => {
			const content = await getContent(page, contentElement);

			return parseText(content);
		})),
	};
}

async function getFields(page: Page, fieldsElement: ElementHandle): Promise<Field[]> {
	if (!fieldsElement) {
		return null;
	}

	const fieldElements = await fieldsElement.$x("./tbody/tr");

	return Promise.all(fieldElements.map(async (fieldElement) => {
		const partElements = await fieldElement.$x("./td");

		const hasRequiredColumn = partElements.length === 4;

		if (!hasRequiredColumn) {
			partElements.splice(2, 0, null);
		}

		const [name, type, isRequired, description] = await Promise.all([
			getContent(page, partElements[0]),
			getContent(page, partElements[1]),
			partElements[2] && getContent(page, partElements[2]),
			getAsParagraph(page, partElements[3]),
		]);

		return {
			name,
			type: parseType(type),
			isRequired: isRequired && (isRequired === "Yes"),
			description,
		};
	}));
}

async function getDescription(page: Page, descriptionElements: ElementHandle[]): Promise<Description[]> {
	const items = await Promise.all(descriptionElements.map(async (descriptionElement) => {
		const tagName = await page.evaluate((element) => element.tagName, descriptionElement);

		switch (tagName) {
			case "P":
				return getAsParagraph(page, descriptionElement);

			case "BLOCKQUOTE":
				return getAsBlockquote(page, descriptionElement);

			case "UL":
				return getAsList(page, descriptionElement);

			default:
				console.error(`Unexpected tag name: ${await page.evaluate((element) => element.outerHTML, descriptionElement)}, skipping`);

				return [];
		}
	}));

	return [].concat(...items);
}

async function parseContent(page: Page, name: string): Promise<Output> {
	const contentElements = await page.$x(`//h4[.='${name}']/following-sibling::*[self::h4 or self::h3 or self::hr][1]/preceding-sibling::*[preceding-sibling::h4[.='${name}']]`);

	let fieldsElement: ElementHandle;

	const descriptionElements = (await Promise.all(contentElements.map(async (contentElement) => {
		const isTable = await page.evaluate((element) => element.tagName === "TABLE", contentElement);

		if (isTable) {
			fieldsElement = contentElement;
		} else {
			return contentElement;
		}
	}))).filter((descriptionElement) => descriptionElement);

	const [fields, description] = await Promise.all([getFields(page, fieldsElement), getDescription(page, descriptionElements)]);

	return {fields, description};
}

function parseTypes(page: Page, types: Type[]): Promise<TypeOutput[]> {
	return Promise.all(types.map(async (type) => {
		const content = await parseContent(page, type.name);

		return {...content, inputType: type};
	}));
}

async function parseMethods(page: Page, methods: Method[]): Promise<MethodOutput[]> {
	return Promise.all(methods.map(async (method) => {
		const content = await parseContent(page, method.name);

		return {...content, inputMethod: method};
	}));
}

function getDescriptionItems(description: Description[]): string[] {
	return [].concat(...description.map((descriptionItem, descriptionIndex, descriptionArray) => {
		const lastDescriptionItem = (descriptionIndex === descriptionArray.length - 1);

		let result: string[];

		switch (descriptionItem.type) {
			case "paragraph":
				result = [descriptionItem.content];
				break;

			case "blockquote":
				result = getDescriptionItems(descriptionItem.items).map((item) => item ? `> ${item}` : ">");
				break;

			case "list":
				result = descriptionItem.items.map((item) => `- ${item}`);
				break;
		}

		return lastDescriptionItem ? result : [...result, null];
	}));
}

function printDescription(description: Description[], indent: number): string {
	if (!description) {
		return "";
	}

	return [
		"\/**",
		...getDescriptionItems(description).map((descriptionLine) => descriptionLine ? ` * ${descriptionLine}` : " *"),
		" *\/",
	].map((item) => `${"\t".repeat(indent)}${item}\n`).join("");
}

function printFields(fields: Field[], overrides?: Overrides): string {
	return fields.map((field) => {
		const override = overrides && overrides[field.name];
		const description = (override && override.description) || field.description;
		const type = (override && override.type) || field.type;
		const isRequired = (override && override.isRequired) || field.isRequired;

		const descriptionLine = description && description[0];

		const isOptional = (isRequired === false) || (
			descriptionLine &&
			(descriptionLine.type === "paragraph") &&
			descriptionLine.content.match("_Optional_")
		);

		return `${printDescription(description, 1)}\t${field.name}${isOptional ? "?" : ""}: ${type};\n`;
	}).join("\n");
}

function printInterface(name: string, fields: Field[], overrides?: Overrides): string {
	return `export interface ${name} {\n` +
		printFields(fields, overrides) +
		`}\n`;
}

function printType(type: TypeOutput): string {
	let result = printDescription(type.description, 0);

	if (type.inputType.declaration) {
		switch (type.inputType.declaration.type) {
			case "union":
				result += `export type ${type.inputType.name} = ${type.inputType.declaration.members.join(" | ")};\n`;
				break;

			case "interface":
				result += printInterface(type.inputType.name, type.inputType.declaration.fields);
				break;
		}
	} else {
		result += printInterface(type.inputType.name, type.fields, type.inputType.overrides);
	}

	return result;
}

function printMethodParameters(method: MethodOutput): string {
	const parametersName = `${method.inputMethod.name.slice(0, 1).toUpperCase()}${method.inputMethod.name.slice(1)}Parameters`;

	if (method.fields) {
		return printType({
			fields: method.fields,
			description: [{type: "paragraph", content: `\`${method.inputMethod.name}\` parameters`}],
			inputType: {
				name: parametersName,
				declaration: method.inputMethod.declaration,
				overrides: method.inputMethod.overrides,
			},
		});
	}

	return null;
}

function printClassFields(classFields: ClassField[]): string {
	return classFields.map((classField) => {
		return `${printDescription(classField.description, 1)}\tabstract ${classField.name}(${classField.parametersType ? `parameters: ${classField.parametersType}` : ""}): Promise<${classField.type}>;\n`;
	}).join("\n");
}

function printMethods(methods: MethodOutput[]): string {
	return `export default abstract class AbstractApi {\n` +
		printClassFields(methods.map((method) => {
			const parametersName = `${method.inputMethod.name.slice(0, 1).toUpperCase()}${method.inputMethod.name.slice(1)}Parameters`;

			return {
				name: method.inputMethod.name,
				type: method.inputMethod.type,
				parametersType: method.fields && parametersName,
				description: method.description,
			};
		})) +
		`}\n`;
}

async function main() {
	const [apiHtmlPath, apiJsonPath] = process.argv.slice(2);

	const browser = await launch({
		headless: true,
	});

	const page = await browser.newPage();

	await page.goto(`file:${path.resolve(apiHtmlPath)}`);

	const json: Input = require(path.resolve(apiJsonPath));

	try {
		const [types, methods] = await Promise.all([parseTypes(page, json.types), parseMethods(page, json.methods)]);

		types.forEach((type) => {
			const output = printType(type);

			if (output) {
				console.log(output);
			}
		});

		methods.forEach((method) => {
			const output = printMethodParameters(method);

			if (output) {
				console.log(output);
			}
		});

		console.log(printMethods(methods));
	} catch (exception) {
		console.error(exception);
	} finally {
		browser.close();
	}
}

main();
