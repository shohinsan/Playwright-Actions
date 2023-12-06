// import { expect, test } from '@playwright/test'
//
// test.describe.configure({
// 	mode: 'serial'
// })

// --------------------
// test('about page has expected h1', async ({ page }) => {
// 	await page.goto('/about')
// 	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible()
// })

//  --------------------

// authFixture('Load user seed', async ({ auth }) => {
// 	await expect(auth.getByTestId('username')).toBeVisible()
// 	console.log('this is auth', auth)
// 	await auth.screenshot({ path: './test/screenshots/user-seed.png' })
// })

// authFixture('Load user seed', async ({ auth }) => {
// 	const usernameElement = auth.getByTestId('Username')
// 	console.log('Is username visible?', await usernameElement.isVisible())
// 	console.log('this is auth', auth)
// 	await auth.screenshot({ path: './playwright-report/screenshots/user-seed.png' })
// })
