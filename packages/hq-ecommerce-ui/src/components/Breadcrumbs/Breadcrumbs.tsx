import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import {
  useNavigation,
  ParamListBase,
} from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useAppTheme } from '../../hooks/useAppTheme'
import Entypo from 'react-native-vector-icons/Entypo'

type ContentProps = {
  label: string | null
  componentName: string
}

interface BreadcrumbsProps {
  content: ContentProps[]
  customLinkComponent?: (props: ContentProps) => React.ReactNode
}

const Breadcrumbs = ({
  content,
  customLinkComponent,
}: BreadcrumbsProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const { colors, fonts } = useAppTheme()

  const LinkSeperator = () => (
    <Entypo
      name="chevron-right"
      color={colors.hq[1]}
      size={20}
      style={{ marginHorizontal: 3 }}
    />
  )

  const LinkComponent =
    customLinkComponent ||
    (({ label, componentName }: ContentProps) => (
      <Pressable onPress={() => navigation.navigate(componentName)}>
        <Text
          style={{
            color: colors.black,
            fontFamily: fonts.medium.fontFamily,
          }}
        >
          {label}
        </Text>
      </Pressable>
    ))

  const renderedLinks: React.ReactNode[] = []

  const pushLinkItem = (
    item: { label: string | null; componentName: string },
    index: number,
  ) => {
    renderedLinks.push(
      <LinkComponent
        key={renderedLinks.length}
        label={item.label}
        componentName={item.componentName}
      />,
    )

    if (index !== content.length - 1) {
      renderedLinks.push(<LinkSeperator key={renderedLinks.length} />)
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
