import { chromium } from '@playwright/test'
import type { FullConfig } from '@playwright/test'

const globalSetup = async (config: FullConfig) => {
	try {
		const { baseURL, storageState } = config.projects[0].use
		const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env

		if (typeof MYSQL_HOST !== 'string' || typeof MYSQL_USER !== 'string' || typeof MYSQL_PASSWORD !== 'string' || !baseURL) {
			console.error('Missing required environment variables or baseURL.')
			return
		}
 
		// authFixture before logging in

		const browser = await chromium.launch()
		const page = await browser.newPage()

		const res = {
			access_token: 'fake_access_token',
			refresh_token: 'fake_refresh_token',
			expires_in: 3600
		}

		const { access_token, refresh_token, expires_in } = res

		// Use the values from res in your logic
		console.log(`Access Token: ${access_token}`);
		console.log(`Refresh Token: ${refresh_token}`);
		console.log(`Expires In: ${expires_in}`);

		await page.route(`${baseURL}/auth/session`, (route) => {
			route.continue({
				method: 'POST',
				postData: JSON.stringify({
					refreshToken: refresh_token,
					expiresIn: expires_in
				}),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${access_token}`
				}
			})
		})

		// Set cookies
		await page.context().addCookies([{
			name: 'access-token',
			value: access_token,
			path: '/',
			httpOnly: true,
			secure: true
		}])

		// Continue with your storageState and other operations
		await page.context().storageState({ path: storageState as string })
		await browser.close()
	} catch (error) {
		console.error('Error during global setup:', error)
		// Handle the error or throw it again if needed
	}
}

export default globalSetup
