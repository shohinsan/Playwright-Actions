//@ts-nocheck
import { chromium } from '@playwright/test';

(async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage();
	await page.goto('https://danube-web.shop/');

	const paintTiming = await page.evaluate(() =>
		window.performance
			.getEntriesByType('paint')
			.map(({ name, startTime }) => ({
				Name: name,
				StartTime: `${Number((startTime / 1000).toFixed(2))}s`,
			}))
	);

	console.table(paintTiming);

	await browser.close();
})();
