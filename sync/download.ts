import {launch} from "puppeteer";

const URL = "https://core.telegram.org/bots/api";

const CONTENT_SELECTOR = "//div[@id='dev_page_content']";

async function main() {
	const browser = await launch({
		headless: true,
	});

	const page = await browser.newPage();

	await page.goto(URL);

	const contentElement = (await page.$x(CONTENT_SELECTOR))[0];
	const content = await page.evaluate((element) => element.innerHTML, contentElement);

	console.log(content);

	await browser.close();
}

main();
