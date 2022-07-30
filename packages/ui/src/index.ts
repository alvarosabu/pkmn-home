import { App } from 'vue'
import 'uno.css'

// normalize.css
import '@unocss/reset/tailwind.css'

import './styles/base.css'
import PkmnWebFontsOptions from './styles/fonts'
import PkmnIconsOptions from './styles/icons'
import PkmnTypographyOptions from './styles/typography'
import { PkmnTheme } from './styles/theme'

const modules = import.meta.glob('./components/**/!(*.spec|*.test|*.story).vue', { eager: true })
const components = Object.entries(modules)

export default {
  unoconfig: {
    theme: PkmnTheme,
    fonts: PkmnWebFontsOptions,
    icons: PkmnIconsOptions,
    typhography: PkmnTypographyOptions,
    /*     shortcuts:PkmnShortcuts,
    typhography:PkmnTypographyOptions,
    rules:PkmnRules, */
  },
  install(app: App, options: any) {
    if (typeof options === 'undefined') {
      for (const [key, value] of components) {
        app.component(key.replace(/^.*[\\/]/, '').replace('.vue', ''), (value as any).default)
      }
    } else {
      if (!(options instanceof Array)) {
        throw new TypeError('options must be an array')
      }
      for (const [key, value] of components) {
        const componentName = key.replace(/^.*[\\/]/, '').replace('.vue', '')
        // register only components specified in the options
        if (options.includes(componentName)) {
          app.component(componentName, (value as any).default)
        }
      }
    }
  },
}
