import React from 'react'

import { PaperProvider, ProviderProps } from 'react-native-paper'

const ThemeProvider = ({ children, theme, settings }: ProviderProps) => {
  return (
    <PaperProvider theme={theme} settings={settings}>
      {children}
    </PaperProvider>
  )
}

export default ThemeProvider
