/* import { Theme } from '@unocss/preset-uno' */

export const primary = {
  DEFAULT: '#4062BE',
  '50': '#C9D3ED',
  '100': '#BAC6E8',
  '200': '#9BADDD',
  '300': '#7D94D3',
  '400': '#5E7BC9',
  '500': '#4062BE',
  '600': '#324C94',
  '700': '#24376A',
  '800': '#162140',
  '900': '#070B16',
}

export const secondary = {
  // caribbean-green
  DEFAULT: '#34D399',
  50: '#F1FCF8',
  100: '#DCF7ED',
  200: '#B2EED8',
  300: '#88E5C3',
  400: '#5EDCAE',
  500: '#34D399',
  600: '#26AE7C',
  700: '#1D845F',
  800: '#145A41',
  900: '#0B3023',
}

export const typeColors = {
  bug: '#9dc130',
  dragon: '#0773c7',
  electric: '#edd53f',
  fairy: '#ef97e6',
  fighting: '#d94256',
  fire: '#f8a54f',
  flying: '#9bb4e8',
  ghost: '#6970c5',
  grass: '#5dbe62',
  ground: '#d78555',
  ice: '#7ed4c9',
  normal: '#9a9da1',
  poison: '#b563ce',
  psychic: '#f87c7a',
  rock: '#cec18c',
  steel: '#5596a4',
  water: '#559edf',
  dark: '#5f606d',
}

export const pokeballColors = {
  pokeball: {
    base: '#d45234',
    accent: '#f18f36',
  },
  greatball: {
    base: '#3883c5',
    accent: '#b2292a',
  },
  ultraball: {
    base: '#48565c',
    accent: '#fad33a',
  },
  masterball: {
    base: '#7f2c8f',
    accent: '#c9298d',
  },
}

export const miscColors = {
  male: '#1d3dc9',
  female: '#b21412',
  hp: '#ff5959',
  atk: '#f5ac78',
  def: '#fae078',
  spAtk: '#9db7f5',
  spDef: '#a7db8d',
  speed: '#fa92b2',
}

export const PkmnTheme = {
  colors: {
    primary,
    secondary,
    typeColors,
    pokeballColors,
    miscColors,
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  boxShadow: {
    active: 'inset 4px 4px 2px 0 rgba(0, 0, 0, 0.08)',
    button: '4px 4px 1px 0px var(--un-shadow-color)',
  },
}
