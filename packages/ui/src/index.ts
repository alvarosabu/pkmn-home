import { App } from 'vue'
import 'uno.css'

// normalize.css
import '@unocss/reset/tailwind.css'

const modules = import.meta.globEager('./components/**/!(*.spec|*.test|*.story).vue')
const components = Object.entries(modules)

export default {
  install(app: App) {
    components.forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}
