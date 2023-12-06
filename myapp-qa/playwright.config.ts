import type { PlaywrightTestConfig, PlaywrightTestOptions } from '@playwright/test'
import { devices } from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config()

type CustomUseOptions = {
  failOnJSError?: boolean;
} & PlaywrightTestOptions;

const config: PlaywrightTestConfig = {
  // globalSetup: './src/setupPlaywright',
  timeout: 30 * 1000,
  testDir: './src/browser/tests',
  testMatch: '**/*.test.{ts,js}',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    process.env.CI ? ['blob'] : ['list'],
    ['html', { outputFolder: './playwright-report' }],
  ],

  use: {
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    trace: 'retain-on-failure',
    baseURL: process.env.STAGING === '1' ? 'https://example.com/' : 'https://example.com/',
    // storageState: './src/browser/utils/pw-storage.json',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        failOnJSError: false,
      } as unknown as CustomUseOptions
    }
  ],
  // webServer: [
  //   {
  //     command: 'pnpm preview',
  //     url: 'http://localhost:5173',
  //   }
  // ],
}

export default config
