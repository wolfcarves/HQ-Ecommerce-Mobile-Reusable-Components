import { configureFonts } from 'react-native-paper'
import { fontConfig } from '../../../assets/fonts/config'

const Theme = {
  colors: {
    gray: {
      100: '#b6cfff',
      200: '#5f5e63',
      300: '#292c35',
      400: '#101f53',
    },
    _primary: {
      1: '#040f24',
      2: '#3f3f4b',
      3: '#71717d',
      4: '#f4f4f8',
    },
    hq: {
      black: '#0a0909',
      1: '#86868a',
      2: '#afafb1',
      4: '#efefef',
      3: '#d7d7d8',
    },
    spc: {
      1: '#080850',
    },
    system: {
      red: {
        1: '#D4565D',
        2: '#FFF6F6',
      },
      green: {
        1: '#25966D',
        2: '#F2FFFA',
      },
    },
    white: '#ffffff',
    black: '#000000',
    indigo: '#4c43c6',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(244, 243, 251)',
      level2: 'rgb(238, 238, 248)',
      level3: 'rgb(231, 234, 245)',
      level4: 'rgb(229, 232, 245)',
      level5: 'rgb(225, 229, 243)',
    },
  },
  fonts: configureFonts({ config: fontConfig }),
}

export type AppTheme = typeof Theme

export default Theme
