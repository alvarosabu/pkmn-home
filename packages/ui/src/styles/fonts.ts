import { WebFontsOptions } from '@unocss/preset-web-fonts'

export const PkmnWebFontsOptions: WebFontsOptions = {
  provider: 'none', // default provider
  fonts: {
    // these will extend the default theme
    sans: ['Kakugo'],
  },
}

export default PkmnWebFontsOptions
