import React from 'react'

import { ThemeProvider, Theme } from '@packages/hq-ecommerce-ui'

import { NavigationContainer } from '@react-navigation/native'
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

export type RootStackParamListProps = {
  Home: undefined
  Profile: undefined
}

const Stack = createNativeStackNavigator<RootStackParamListProps>()

import Home from 'src/screens/Home'
import Profile from 'src/screens/Profile'

const options: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
}

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={Theme}>
        <Stack.Navigator screenOptions={options}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
