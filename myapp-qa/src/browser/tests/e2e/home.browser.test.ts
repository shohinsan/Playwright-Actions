// import { expect, test } from '@playwright/test'
// import { chromium } from '@playwright/test'
// import { strict as assert } from 'assert'
// import { error } from '@app/index'
//
//
// test.describe.configure({
// 	mode: 'serial'
// })
//
// test('404 - Page Not Found', async ({ page }) => {
// 	const errorPage = new error(page);
// 	await errorPage.goto();
// 	const { status } = await errorPage.status();
// 	if (status === 404) {
// 		await expect(page).toHaveTitle('404 - Not Found');
// 	}
// });
//
// test('500 - Server Error', async ({ page }) => {
// 	const errorPage = new error(page);
// 	await errorPage.goto();
// 	const { status } = await errorPage.status();
// 	if (status === 500) {
// 		await expect(page).toHaveTitle('500 - Server Error');
// 	}
// });
//
// // export async function runHomeTests() {
// test('home page has expected p', async ({ page }) => {
// 	await page.goto('/')
// 	await expect(page.locator('text=Width is normal')).toBeVisible()
// })

// --------------------
// Delay

// test('Test time', async () => {
// 	const browser = await chromium.launch({ headless: false })
// 	const page = await browser.newPage()
// 	await page.goto('https://playwright.dev/')
//
// 	page.on('request', (req) => {
// 		console.log(req.url())
// 	})
//
// 	await page.route('**/*.{png,jpg,jpeg,svg}', (route) => route.abort())
// 	await page.route('/(analytics|fonts)/', (route) => route.abort())
//
// 	// Use `locator` to avoid delays and 'waitFor' calls
// 	const button = page.locator('text=Get Started')
// 	await button.click()
//
// 	// Use `isEnabled()` instead of `isDisabled()`
// 	assert(await button.isEnabled(), 'Button is disabled')
//
// 	await browser.close()
// })

// --------------------



// test('Error page renders correctly', async ({ page }) => {
// 	const errorPage = new error(page);
// 	const { status, message } = await errorPage.getError();
//
// 	if (status === 404) {
// 		await expect(page).toHaveTitle('404 - Not Found');
// 	} else if (status === 500) {
// 		await expect(page).toHaveTitle('500 - Server Error');
// 		console.log('500 status', status);
// 	} else if (status === 200) {
// 		await expect(page).toHaveTitle('ProjectName');
// 		console.log('200 status', status);
// 	}
// 	// Optionally, you can use the 'message' variable if needed.
// 	console.log('Error message:', message);
// });


// --------------------

// test('page has no errors or logs', async ({ page }) => {
// 	const logs: { message: string; type: string }[] = []
//
// 	// Listen for console events and push messages to the logs array
// 	page.on('console', (message) => {
// 		logs.push({ message: message.text(), type: message.type() })
// 	})
//
// 	try {
// 		// Navigate to the specified URL
// 		await page.goto('https://playwright.dev/')
//
// 		// Your other test actions if needed
//
// 		// Output the collected logs for debugging purposes
// 		console.log('Collected logs:', logs)
//
// 		// Assert that there are no logs
// 		expect(logs.length).toBe(0)
// 	} catch (error) {
// 		// Handle any errors that occur during the test
// 		console.error('Test failed:', error)
// 		throw error // Rethrow the error to fail the test
// 	}
// })

