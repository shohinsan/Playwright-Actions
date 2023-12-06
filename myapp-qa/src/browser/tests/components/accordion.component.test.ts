// Cost of separating QA project environment from Frontend
// This page is designed specifically and is suitable
// for enterprise applications with built-in custom components
// import * as console from "console";
// import type {Page, Locator} from "@playwright/test";
// import {test, expect,} from '@playwright/test';
//
// test.describe.configure({
//     mode: 'serial'
// });
//
// test.beforeEach(async ({page}) => {
//     await page.goto('/');
// });
//
// test.afterEach(async ({page}) => {
//     await page.screenshot({path: `./playwright-report/screenshots/accordion.png`});
// });
//
// async function toggleAccordion(page: Page, index: number) {
//
//     const headerSelector: string = `[data-test="accordion-header-${index}"]`;
//     const buttonSelector: string = `[data-test="accordion-button-${index}"]`;
//     const detailsSelector: string = `[data-test="accordion-details-${index}"]`;
//
//     await page.locator(headerSelector).click();
//     const button: Locator = page.locator(buttonSelector);
//     await button.click();
//
//     const details: Locator = page.locator(detailsSelector);
//     await expect(details).toBeVisible();
//     await button.click();
//
// }
//
// test('Accordion Component', async ({page}): Promise<void> => {
//     for (let i: number = 0; i < 3; i++) {
//         await toggleAccordion(page, i);
//     }
// });

// const badge: Locator = page.locator('[data-test="badge-0"]');
// await expect(badge).toBeVisible();
// await expect(badge).toHaveText('# My Badge');