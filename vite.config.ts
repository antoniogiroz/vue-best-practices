import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import SvgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), SvgLoader()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },

  test: {
    include: ['tests/unit/**/*.test.ts'],
    environment: 'jsdom',
    setupFiles: 'tests/unit/vitest.setup.ts',
    mockReset: true,
    deps: {
      inline: ['@vue'],
    },
  },
})
