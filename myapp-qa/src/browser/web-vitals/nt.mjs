//@ts-nocheck

import { chromium } from '@playwright/test'

;(async () => {
	const browser = await chromium.launch()
	const page = await browser.newPage()

	await page.goto('https://danube-web.shop/')

	const navigationTimingJson = await page.evaluate(() =>
		JSON.stringify(performance.getEntriesByType('navigation'))
	)

	const navigationTiming = JSON.parse(navigationTimingJson)

	const props = [
		'duration',
		'responseStatus',
		'nextHopProtocol'
	]

	console.table(
		navigationTiming.map((
			/** @type {{ [x: string]: any; }} */
			item) => ({
			Duration: Number((item.duration / 1000).toFixed(2)) + 's',
			Status: item[props[1]],
			Protocol: item[props[2]]
		}))
	)

	await browser.close()
})()

