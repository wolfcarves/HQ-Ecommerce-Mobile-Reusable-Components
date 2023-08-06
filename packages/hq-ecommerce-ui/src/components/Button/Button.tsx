import React, { forwardRef, ForwardedRef } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle, Text } from 'react-native'
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

interface ButtonProps extends Omit<RNPButtonProps, 'children' | 'icon'> {
  variant: ButtonVariants
  title: string
  rippled: boolean
  paddingBlock: number
  backgroundColor: string
  color: string
  reverse: boolean
  shadow: boolean
  disabled: boolean
  style: {}
  icon: React.ReactNode
}

const Button = (
  {
    variant = 'primary',
    title,
    rippled,
    paddingBlock,
    backgroundColor,
    color,
    reverse,
    icon,
    shadow,
    disabled,
    style,
    ...props
  }: Partial<ButtonProps>,
  ref: ForwardedRef<View>,
) => {
  const { colors } = useAppTheme()

  const a = 0

  const variantStyles: Partial<Record<ButtonVariants, any>> = StyleSheet.create(
    {
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
    },
  )

  const generalStyle = [variantStyles[variant], style]

  const contentStyle: StyleProp<ViewStyle> = {
    flexDirection: reverse ? 'row-reverse' : 'row',
    paddingVertical: paddingBlock ? paddingBlock : 0,
    paddingLeft: title ? 0 : 12, //This will center the ActivityIndicator if title was not found
    backgroundColor:
      backgroundColor && !disabled
        ? backgroundColor
        : disabled
        ? colors.hq[2]
        : variantStyles[variant].backgroundColor,
  }

  return (
    <RNPButton
      ref={ref}
      style={generalStyle}
      contentStyle={contentStyle}
      mode={shadow ? 'elevated' : 'text'}
      textColor={color ? color : variantStyles[variant].color}
      rippleColor={'#a6a6a629'}
      icon={() => icon}
      {...props}
    >
      {title}
    </RNPButton>
  )
}

export default forwardRef(Button)
