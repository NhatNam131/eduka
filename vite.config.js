import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vitePluginRequire from 'vite-plugin-require';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), vitePluginRequire.default()],
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '~': path.resolve(__dirname, './src'),
        },
    },
});
