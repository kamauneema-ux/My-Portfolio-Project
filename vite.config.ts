/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { pageTitle, routes } from './src/siteMap'

/**
 * GitHub Pages only finds files, so without this every page except the home
 * page would be served through 404.html with an HTTP 404 status. Writing the
 * app shell to <route>/index.html, with that page's title, makes each address
 * a real file that returns 200 and can be indexed and audited.
 */
function pagePerRoute(): Plugin {
  return {
    name: 'page-per-route',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const shell = bundle['index.html']
      if (!shell || shell.type !== 'asset') return
      const html = String(shell.source)

      for (const path of Object.values(routes)) {
        if (path === routes.home) continue
        const title = `${pageTitle(path)} \u2014 Grace Muthoni Kamau`
        this.emitFile({
          type: 'asset',
          fileName: `${path.slice(1)}/index.html`,
          source: html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`),
        })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pagePerRoute()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
  },
})
