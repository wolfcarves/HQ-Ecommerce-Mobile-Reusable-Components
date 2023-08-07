import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useNavigation, ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useAppTheme } from '../../hooks/useAppTheme'
import Entypo from 'react-native-vector-icons/Entypo'

type Content = {
  label: string | null
  componentName: string
}[]

interface BreadcrumbsProps {
  content: Content
}

const Breadcrumbs = ({ content }: BreadcrumbsProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const { colors } = useAppTheme()

  const LinkSeperator = () => (
    <Entypo
      name="chevron-right"
      color={colors.hq[1]}
      size={20}
      style={{ marginHorizontal: 3 }}
    />
  )

  const Link = ({
    label,
    componentName,
  }: {
    label: string | null
    componentName: string
  }) => (
    <Pressable onPress={() => navigation.navigate(componentName)}>
      <Text style={{ color: colors.black }}>{label}</Text>
    </Pressable>
  )

  const renderedLinks: React.ReactNode[] = []

  const pushLinkItem = (
    item: { label: string | null; componentName: string },
    index: number,
  ) => {
    renderedLinks.push(
      <Link label={item.label} componentName={item.componentName} />,
    )
    {
      index !== content.length - 1 && renderedLinks.push(<LinkSeperator />)
    }
  }

  content.forEach(pushLinkItem)

  return <View style={styles.linkContainer}>{renderedLinks}</View>
}

const styles = StyleSheet.create({
  linkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default Breadcrumbs
