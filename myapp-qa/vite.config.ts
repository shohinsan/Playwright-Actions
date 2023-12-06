import {defineConfig} from 'vitest/config';
import {loadEnv} from "vite";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    Object.assign(process.env, env);
    const testConfig = {
        test: {
            reporters: ['html', 'junit', 'json'],
            outputFile: {
                html: './vitest-report/index.html',
                junit: './vitest-report/index.xml',
                json: './vitest-report/index.json',
            },
            globals: true,
            setupFiles: ['src/setupVitest.ts'],
        },
    };

    return {
        ...testConfig,
    };
});
