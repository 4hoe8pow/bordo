import dns from 'dns'
import { readFileSync } from 'fs'

import { dataToEsm } from '@rollup/pluginutils'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
// See: https://vitejs.dev/config/server-options.html#server-host
// So that Vite will load on local instead of 127.0.0.1
dns.setDefaultResultOrder('verbatim')

import redwood from '@redwoodjs/vite'

const viteConfig: UserConfig = {
  plugins: [
    redwood(),
    {
      name: 'vite-plugin-base64',
      async transform(source, id) {
        if (!id.endsWith('.wasm')) return
        const file = readFileSync(id)
        const base64 = file.toString('base64')
        const code = `data:application/wasm;base64,${base64}";`
        return dataToEsm(code)
      },
    },
    wasm(),
  ],
}

export default defineConfig(viteConfig)
