import React from 'react'
import { StyleSheet, StyleProp, ViewStyle, Text } from 'react-native'
import {
  Button as RNPButton,
  ButtonProps as RNPButtonProps,
} from 'react-native-paper'
import { useAppTheme } from '../../hooks/useAppTheme'

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'sidebarLink'
  | 'muted'
  | 'outlined'

interface ButtonProps
  extends Omit<RNPButtonProps, 'children' | 'icon'> {
  variant: ButtonVariants
  text: string
  paddingBlock: number
  backgroundColor: string
  color: string
  reverse: boolean
  shadow: boolean
  disabled: boolean
  style: {}
  icon: React.ReactNode
}

const Button = ({
  variant = 'primary',
  text,
  paddingBlock,
  backgroundColor,
  color,
  reverse,
  icon,
  shadow,
  disabled,
  style,
  ...props
}: Partial<ButtonProps>) => {
  const { colors, fonts } = useAppTheme()

  const variantStyles: Partial<Record<ButtonVariants, any>> = {
    primary: {
      borderWidth: disabled ? 0 : 1,
      borderColor: colors.hq.black,
      borderRadius: 50,
      backgroundColor: colors.white,
      color: disabled ? colors.white : colors.hq.black,
    },
    secondary: {
      borderWidth: disabled ? 0 : 1,
      borderColor: colors.hq.black,
      borderRadius: 8,
      backgroundColor: colors.white,
      color: disabled ? colors.white : colors.hq.black,
    },
    tertiary: {
      borderRadius: 50,
      backgroundColor: colors.hq.black,
      color: colors.white,
    },
    sidebarLink: {
      borderRadius: 8,
      backgroundColor: colors.hq.black,
      color: colors.white,
    },
    muted: {
      borderRadius: 50,
      backgroundColor: colors.white,
      color: disabled ? colors.white : colors.hq.black,
    },
    outlined: {
      borderWidth: disabled ? 0 : 1,
      borderColor: colors.hq.black,
      color: disabled ? colors.white : colors.hq.black,
    },
  }

  const styles = StyleSheet.create([variantStyles[variant], style])

  const contentStyle: StyleProp<ViewStyle> = {
    flexDirection: reverse ? 'row-reverse' : 'row',
    paddingVertical: paddingBlock ? paddingBlock : 0,
    paddingLeft: text ? 0 : 12, //This will center the ActivityIndicator if text was not found
    backgroundColor:
      backgroundColor && !disabled
        ? backgroundColor
        : disabled
        ? colors.hq[2]
        : variantStyles[variant].backgroundColor,
  }

  return (
    <RNPButton
      style={styles}
      disabled={disabled}
      contentStyle={contentStyle}
      mode={shadow ? 'elevated' : 'text'}
      textColor={color ? color : variantStyles[variant].color}
      rippleColor={'#a6a6a629'}
      icon={() => icon}
      {...props}
    >
      <Text style={{ fontFamily: fonts.medium.fontFamily }}>
        {text}
      </Text>
    </RNPButton>
  )
}

export default Button
