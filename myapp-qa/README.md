## Using Playwright(browser) and Vitest(unit) for tests

#### Test GitHub Actions
#### Test Vitest Mocking

#

### Libraries to install

* pnpm i vitest
* pnpm i -D @testing-library/svelte
* pnpm i -D @types/jest
* pnpm i -D jsdom
* pnpm i -D @testing-library/jest-dom

### Modify configs, update preferred package manager

- playwright.config.ts

```ts
import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm run build && pnpm run preview',
		port: 4173
	},
	testDir: 'tests/browser',
	testMatch: /tests\/playwright\/.*\.[jt]s$/
}

export default config
```

- vite.config.ts

```ts
import { defineConfig } from 'vite'

export default defineConfig({
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: 'src/setupTests.ts'
	},
})
```

## Create a jsdom extender as is

- setupTests.ts

```ts
import '@testing-library/jest-dom/extend-expect'
```


