export const CRLF = "\r\n";

export interface HeaderAttributes {
	[name: string]: string;
}

export interface Header {
	name: string;
	value: string;
	attributes?: HeaderAttributes;
}

export interface Entity {
	headers?: Header[];
	boundary?: string;
	preamble?: string;
	epilogue?: string;
	body: Entity[] | Buffer;
}

export function* generateCharacters() {
	while (true) {
		const random = Math.floor(Math.random() * 62);

		if (random < 10) {
			yield String.fromCharCode(48 + random);
		} else if (random < 36) {
			yield String.fromCharCode(65 - 10 + random);
		} else {
			yield String.fromCharCode(97 - 36 + random);
		}
	}
}

export function createBoundary(length: number = 70, prefix: string = ""): string {
	const generator = generateCharacters();

	let result = prefix ? prefix.replace(/\s/g, "-") + "-" : "";

	while (result.length < length) {
		result += generator.next().value;
	}

	return result;
}

export function composeHeaders(headers: Header[]): Buffer {
	const reducedHeaders = headers.reduce<{[name: string]: string}>((result, {name, value, attributes}) => {
		result[name.toLowerCase()] = [value, ...Object.entries(attributes || {}).map(([name, value]) => {
			return `${name}="${value}"`;
		})].join("; ");

		return result;
	}, {});

	return Buffer.concat(Object.entries(reducedHeaders).map(([name, value]) => {
		return Buffer.from(`${name}: ${value}` + CRLF, "utf8");
	}));
}

export function composeBody(entities: Entity[], boundary: string, preamble: string = "", epilogue: string = ""): Buffer {
	const delimiter = `--${boundary}`;
	const endDelimiter = `--${boundary}--`;

	return Buffer.concat([
		Buffer.from(preamble, "utf8"),

		...entities.map((entity) => {
			return Buffer.concat([
				Buffer.from(CRLF + delimiter, "utf8"),
				Buffer.from(CRLF, "utf8"),
				composeHeaders(entity.headers),
				Buffer.from(CRLF, "utf8"),
				(entity.body instanceof Array) ? composeBody(entity.body, entity.boundary, entity.preamble, entity.epilogue) : entity.body,
			]);
		}),

		Buffer.from(CRLF + endDelimiter, "utf8"),
		Buffer.from(CRLF + epilogue, "utf8"),
	]);
}
