import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { Button, useAppTheme } from '@packages/hq-ecommerce-ui'

import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const MyButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
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
      <Text style={styles.title}>Buttons</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        text="Primary"
        shadow={true}
        paddingBlock={5}
        icon={
          <Image
            source={{
              uri: 'https://ph-files.imgix.net/f05a61be-d906-4ad8-a68d-88f7c257574d.png?auto=format',
            }}
            height={24}
            width={24}
          />
        }
      />
      <Pressable></Pressable>
      <Button
        text="Secondary"
        variant={'secondary'}
        shadow={true}
        reverse={true}
        paddingBlock={5}
        icon={
          <Image
            source={{
              uri: 'https://ph-files.imgix.net/f05a61be-d906-4ad8-a68d-88f7c257574d.png?auto=format',
            }}
            height={24}
            width={24}
          />
        }
        style={{
          width: 200,
          alignSelf: 'center', //Intellisense don't work because the style prop was override by a prop in Button Component but it would still apply just fine.
        }}
      />
      <Button
        text="tertiary"
        variant={'tertiary'}
        loading
        style={{
          marginStart: 'auto',
        }}
      />
      <Button
        text=""
        variant={'sidebarLink'}
        loading
        style={{ width: 150, alignSelf: 'start' }}
      />

      <Button text="muted" variant={'muted'} />
      <Button text="outlined" variant={'outlined'} />
      <Button text="Disabled Button" variant={'primary'} disabled={true} />
    </View>
  )
}

export default MyButton
