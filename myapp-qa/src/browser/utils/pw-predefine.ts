import { test as predefine, expect } from '@playwright/test'
import type { Page } from '@playwright/test'
import { login } from '@auth/index'

export const authFixture = predefine.extend({
    auth: async ({ page }, use) => {
        await predefine.step('User is being authenticated', async () => {
            const loginPage = new login(page)
            await loginPage.goto()
            await loginPage.login(
                process.env.USERNAME as string,
                process.env.PASSWORD as string
            )
            await use(page)
        })
    }
})

export const debugFixture = predefine.extend<{
    page: (params: { page: Page; failOnJSError: boolean }, use: any) => Promise<void>
    failOnJSError: boolean
}>({
    failOnJSError: [true, { option: true }],
    page: async ({ page, failOnJSError }: { page: Page; failOnJSError: boolean }, use: any) => {
        const errors: Error[] = []
        const logs: { message: string; type: string }[] = []

        page.on('console', (message) => {
            logs.push({ message: message.text(), type: message.type() })
        })
        await predefine.step('Caught JavaScript Error', async () => {
            page.on('pageerror', (error: any): void => {
                errors.push(error)
            })
            await use(page)
        })

        console.log(logs)

        if (failOnJSError) {
            expect(errors).toHaveLength(0)
        }

        expect(logs.length).toBe(0)
    }
})

export { predefine, expect }
