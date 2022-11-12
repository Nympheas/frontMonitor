import type { Options } from '@monitor-frontend/core/esm'

declare global {
  interface Window {
    __FRONTEND_CONFIG__?: {
      id: string
      options: Options
    }
  }
}

export {}
