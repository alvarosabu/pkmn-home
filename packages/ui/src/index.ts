import { App } from 'vue'
import 'uno.css'

// normalize.css
import '@unocss/reset/tailwind.css'

import './styles/base.css'
import PkmnWebFontsOptions from './styles/fonts'
import PkmnIconsOptions from './styles/icons'
import { PkmnTheme } from './styles/theme'

const modules = import.meta.globEager('./components/**/!(*.spec|*.test|*.story).vue')
const components = Object.entries(modules)

export default {
  unoconfig: {
    theme: PkmnTheme,
    fonts: PkmnWebFontsOptions,
    icons: PkmnIconsOptions,
    /*     shortcuts:PkmnShortcuts,
    typhography:PkmnTypographyOptions,
    rules:PkmnRules, */
  },
  install(app: App) {
    components.forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}
