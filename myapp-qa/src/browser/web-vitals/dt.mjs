import { chromium } from '@playwright/test';

(async () => {
	const browser = await chromium.launch({ headless: false });
	console.log('Browser launched');

	const page = await browser.newPage();
	console.log('New page created');

	const client = await page.context().newCDPSession(page);

	// Enable the Network domain
	await client.send('Network.enable');

	// Set up a callback to log network requests
	client.on('Network.requestWillBeSent', (event) => {
		console.log('Request will be sent:', event.request.url);
	});

	// Set up a callback to log network responses
	client.on('Network.responseReceived', (event) => {
		console.log('Response received for:', event.response.url);
	});

	const networkConditions = {
		offline: false,
		downloadThroughput: (4 * 1024 * 1024) / 8,
		uploadThroughput: (3 * 1024 * 1024) / 8,
		latency: 20,
	};

	console.log('Network conditions:', networkConditions);

	// Emulate network conditions
	await client.send('Network.emulateNetworkConditions', networkConditions);
	console.log('Network conditions emulated');

	await page.goto('https://danube-web.shop/');
	console.log('Navigated to https://danube-web.shop/');

	await page.waitForTimeout(5000);

	// Uncomment the line below if you want to keep the browser open for manual inspection
	// await browser.waitForTimeout(0);

	await browser.close();
	console.log('Browser closed');
})();
