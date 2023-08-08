import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Accordion } from '@packages/hq-ecommerce-ui'
import { useAppTheme } from '@packages/hq-ecommerce-ui'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const MyAccordion = () => {
  const { fonts, colors } = useAppTheme()

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
      <Text style={styles.title}>Accordion</Text>

      <Accordion
        title={'What are Accordion props?'}
        content="Accordion takes 5 optional props which are  title, titleTint, icon, content and children. Pick only one either using content prop or children"
      />

      <Accordion
        title={'Content vs Children'}
        content="If content prop is provided the children will be ignored, with content prop you can only provide string while you can put whatever you want with children"
      >
        <Text
          style={{ color: colors.black, fontFamily: fonts.medium.fontFamily }}
        >
          Homeqube is an blockchain ecommerce application
        </Text>
      </Accordion>

      <Accordion
        icon={<FontAwesome name="cube" color={colors.black} size={20} />}
        title={'Icon'}
        titleTint="red"
      >
        <Text
          style={{ color: colors.black, fontFamily: fonts.medium.fontFamily }}
        >
          In terms of icon. It takes ReactNode including icons from react native
          vector and also support Image API
        </Text>
      </Accordion>
    </View>
  )
}

export default MyAccordion
