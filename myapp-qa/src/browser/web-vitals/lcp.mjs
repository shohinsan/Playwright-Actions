import { chromium } from '@playwright/test'

	;(async () => {
	try {
		const browser = await chromium.launch()
		const page = await browser.newPage()
		await page.goto('http://localhost:5173')
		const LCP = await page.evaluate(() => {
			return new Promise((resolve) => {
				new PerformanceObserver((list) => {
					const entries = list.getEntries();
					const latestEntry = entries.at(-1);
					resolve(latestEntry ? latestEntry.startTime : undefined);
				}).observe({ type: 'largest-contentful-paint', buffered: true });
			});
		});

		if (LCP !== undefined) {
			const lcp = LCP / 1000;
			console.log(parseFloat(lcp.toFixed(2)) + 's');
		} else {
			console.log('LCP is undefined');
		}

		await browser.close()
	} catch (error) {
		console.error(error)
		process.exit(1)
	}
})()