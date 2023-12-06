// @ts-nocheck
import { chromium } from '@playwright/test';
import { PerformanceObserver } from 'perf_hooks';

(async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage();
	await page.goto('https://danube-web.shop/');

	const cls = await page.evaluate(() => {
		return new Promise((resolve) => {
			let CLS = 0;
			new PerformanceObserver((l) => {
				const entries = l.getEntries()

				entries.forEach(entry => {
					if (!entry.hadRecentInput) {
						CLS += entry.value
					}
				})

				resolve(CLS);
			}).observe({
				type: 'layout-shift',
				buffered: true,
			});
		});
	});

	const clsInSeconds = cls / 1000;

	console.log(`${clsInSeconds.toFixed(10)}s`);

	await browser.close();
})();
