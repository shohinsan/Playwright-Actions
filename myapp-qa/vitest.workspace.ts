import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
	{
		extends: './vite.config.ts',
		test: {
			include: ['src/vitest/**/*.unit.test.{ts,js}'],
			name: 'happy-dom',
			environment: 'happy-dom'
		}
	},
])
