import React, { PropsWithChildren } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useAppTheme } from '../../hooks/useAppTheme'
import { DimensionValue } from 'react-native'

type BaseCardVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outlined'

interface BaseCardProps {
  variant: BaseCardVariant
  width: DimensionValue
  height: DimensionValue
  alignSelf: 'flex-start' | 'flex-end' | 'center'
}

const BaseCard = ({
  children,
  variant = 'primary',
  width,
  height,
  alignSelf,
  ...props
}: PropsWithChildren<Partial<BaseCardProps>>) => {
  const { colors, fonts } = useAppTheme()

  const styles = StyleSheet.create({
    card: {
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginStart:
        alignSelf === 'flex-end' || alignSelf === 'center'
          ? 'auto'
          : 0,
      marginEnd:
        alignSelf === 'flex-start' || alignSelf === 'center'
          ? 'auto'
          : 0,
      padding: 20,
      width,
      height,
      maxWidth: '100%',
    },
  })

  const variantStyles = StyleSheet.create({
    primary: {
      backgroundColor: colors._primary[1],
      color: colors.black,
    },
    secondary: {
      backgroundColor: colors.white,
      color: colors.black,
    },
    tertiary: {
      backgroundColor: 'transparent',
    },
    outlined: {
      borderWidth: 1,
      borderColor: colors._primary[3],
    },
  })

  return (
    <View style={[variantStyles[variant], styles.card]} {...props}>
      {children}
    </View>
  )
}

export default BaseCard
