//@ts-nocheck
import { chromium } from '@playwright/test';

;(async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage();
	await page.goto('https://danube-web.shop/');

	const resourceTimingJson = await page.evaluate(() =>
		JSON.stringify(window.performance.getEntriesByType('resource'))
	);

	const resourceTiming = JSON.parse(resourceTimingJson);
	const logoResourceTiming = resourceTiming.find((/** @type {{ name: string | string[]; }} */ element) =>
		element.name.includes('.svg')
	);

	if (logoResourceTiming) {
		const {
			duration,
			initiatorType,
			nextHopProtocol,
			renderBlockingStatus,
			responseEnd,
			fetchStart,
		} = logoResourceTiming;

		console.table({
			Duration: Number((duration / 1000).toFixed(2)) + 's',
			InitiatorType: initiatorType,
			NextHopProtocol: nextHopProtocol,
			RenderBlockingStatus: renderBlockingStatus,
			ResponseEnd: Number((responseEnd / 1000).toFixed(2)) + 's',
			FetchStart: Number((fetchStart / 1000).toFixed(2)) + 's',
		});
	} else {
		console.log('No matching resource entry found.');
	}

	await browser.close();
})();
