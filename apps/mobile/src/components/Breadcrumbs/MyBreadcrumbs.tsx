import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Breadcrumbs, useAppTheme } from '@packages/hq-ecommerce-ui'

const myContent = [
  {
    label: 'Home',
    componentName: 'Home',
  },
  {
    label: 'Profile',
    componentName: 'Profile',
  },
  {
    label: 'Details',
    componentName: 'Profile',
  },
  {
    label: 'Edit',
    componentName: 'Profile',
  },
]

const MyBreadcrumbs = () => {
  const { colors, fonts } = useAppTheme()

  const styles = StyleSheet.create({
    title: {
      fontSize: 32,
      textAlign: 'center',
      paddingVertical: 30,
      color: colors.black,
      fontFamily: fonts.bold.fontFamily,
    },
    container: {
      gap: 10,
    },
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breadcrumbs</Text>

      <View style={{ alignItems: 'center' }}>
        <Breadcrumbs content={myContent} />
      </View>
    </View>
  )
}

export default MyBreadcrumbs
