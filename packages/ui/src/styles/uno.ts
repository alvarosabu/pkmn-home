import {
  presetUno,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  UserConfig,
} from 'unocss'
import { PkmnTheme } from './theme'
import icons from './icons'
import fonts from './fonts'

export const UnoConfig: UserConfig = {
  theme: PkmnTheme,
  presets: [presetUno(), presetIcons(icons), presetWebFonts(fonts), presetTypography()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
}

export default UnoConfig
