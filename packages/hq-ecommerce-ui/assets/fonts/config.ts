// export const fontConfig = {
//   web: {
//     extraBold: {
//       fontFamily: 'sans-serif',
//       fontWeight: '800',
//     },
//     semiBold: {
//       fontFamily: 'sans-serif',
//       fontWeight: '700',
//     },
//     bold: {
//       fontFamily: 'sans-serif',
//       fontWeight: '600',
//     },
//     medium: {
//       fontFamily: 'sans-serif-medium',
//       fontWeight: '500',
//     },
//     regular: {
//       fontFamily: 'sans-serif',
//       fontWeight: 'normal',
//     },
//     light: {
//       fontFamily: 'sans-serif-light',
//       fontWeight: '300',
//     },
//     thin: {
//       fontFamily: 'sans-serif-thin',
//       fontWeight: '200',
//     },
//   },
//   ios: {
//     extraBold: {
//       fontFamily: 'sans-serif',
//       fontWeight: '800',
//     },
//     semiBold: {
//       fontFamily: 'sans-serif',
//       fontWeight: '700',
//     },
//     bold: {
//       fontFamily: 'sans-serif',
//       fontWeight: '600',
//     },
//     medium: {
//       fontFamily: 'sans-serif-medium',
//       fontWeight: '500',
//     },
//     regular: {
//       fontFamily: 'sans-serif',
//       fontWeight: 'normal',
//     },
//     light: {
//       fontFamily: 'sans-serif-light',
//       fontWeight: '300',
//     },
//     thin: {
//       fontFamily: 'sans-serif-thin',
//       fontWeight: '200',
//     },
//   },
//   android: {
//     extraBold: {
//       fontFamily: 'sans-serif',
//       fontWeight: '800',
//     },
//     semiBold: {
//       fontFamily: 'sans-serif',
//       fontWeight: '700',
//     },
//     bold: {
//       fontFamily: 'sans-serif-bold',
//       fontWeight: '600',
//     },
//     medium: {
//       fontFamily: 'sans-serif',
//       fontWeight: '500',
//     },
//     regular: {
//       fontFamily: 'sans-serif',
//       fontWeight: 'normal',
//     },
//     light: { 
//       fontFamily: 'sans-serif-light',
//       fontWeight: '300',
//     },
//     thin: {
//       fontFamily: 'sans-serif-thin',
//       fontWeight: '200',
//     },
//   }
// } as const

import { Platform } from 'react-native'


export const fontConfig = {
  bold: {
    fontFamily: Platform.select({
      web: 'Rajdhani-Bold',
      ios: 'Rajdhani-Bold',
      android: 'Rajdhani-Bold',
      default: 'Rajdhani-Bold',
    }),
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 0,
    fontSize: 14,
  },
  semiBold: {
    fontFamily: Platform.select({
      web: 'Rajdhani-SemiBold',
      ios: 'Rajdhani-SemiBold',
      android: 'Rajdhani-SemiBold',
      default: 'Rajdhani-SemiBold',
    }),
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 0,
    fontSize: 14,
  },
  medium: {
    fontFamily: Platform.select({
      web: 'Rajdhani-Medium',
      ios: 'Rajdhani-Medium',
      android: 'Rajdhani-Medium',
      default: 'Rajdhani-Medium',
    }),
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 0,
    fontSize: 14,
  },
  regular: {
    fontFamily: Platform.select({
      web: 'Rajdhani-Regular',
      ios: 'Rajdhani-Regular',
      android: 'Rajdhani-Regular',
      default: 'Rajdhani-Regular',
    }),
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 0,
    fontSize: 14,
  },
  light: {
    fontFamily: Platform.select({
      web: 'Rajdhani-Light',
      ios: 'Rajdhani-Light',
      android: 'Rajdhani-Light',
      default: 'Rajdhani-Light',
    }),
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 0,
    fontSize: 14,
  }
} as const