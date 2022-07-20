import { WebFontsOptions } from '@unocss/preset-web-fonts'

export const PkmnWebFontsOptions: WebFontsOptions = {
  provider: 'google', // default provider
  fonts: {
    // these will extend the default theme
    sans: ['Kakugo'],
  },
}

export default PkmnWebFontsOptions
