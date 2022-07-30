import { TypographyOptions } from '@unocss/preset-typography'
import { PkmnTheme } from './theme'

const headlineStyles = {
  'font-family': 'Kakugo',
}
export const ASTypographyOptions: TypographyOptions = {
  cssExtend: {
    h1: headlineStyles,
    h2: headlineStyles,
    h3: headlineStyles,
    p: headlineStyles,
    code: {
      'font-family': 'Fira Code',
    },
    a: {
      color: PkmnTheme?.colors?.secondary[500],
      'font-weight': 'bold',
      'text-decoration': 'none',
      transition: 'color 400ms ease-in-out',
    },
    'a:hover': {
      color: PkmnTheme?.colors?.secondary[600],
      transition: 'color 400ms ease-in-out',
    },
  },
}

export default ASTypographyOptions
