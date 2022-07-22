import PkmnUI from '@pkmn-home/ui'
import {
  defineConfig,
  presetWebFonts,
  presetUno,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: PkmnUI.unoconfig.theme,
  /* shortcuts: PkmnUI.unoconfig.shortcuts,
  rules: PkmnUI.unoconfig.rules, */
  presets: [presetUno(), presetWebFonts(PkmnUI.unoconfig.fonts)],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
