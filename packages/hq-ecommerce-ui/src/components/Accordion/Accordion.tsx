import React, { useRef, PropsWithChildren } from 'react'
import useToggle from '../../hooks/useToggle'
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Animated,
  LayoutAnimation,
} from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

type AccordionProps = PropsWithChildren<{
  title?: string
  titleTint?: string
  backgroundColor?: string
  icon?: React.ReactNode
  content?: string
  elevation?: number
}>

const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  titleTint = 'black',
  backgroundColor = '#FFFFFF',
  icon,
  content,
  elevation = 2,
}) => {
  const { state, toggleState } = useToggle()

  const animationController = useRef(new Animated.Value(0)).current

  const toggleAccordion = () => {
    const config = {
      toValue: state ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }

    Animated.timing(animationController, config).start()

    LayoutAnimation.configureNext({
      duration: 200,
      update: {
        duration: 200,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
      delete: {
        duration: 100,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    })
  }

  const rotateArrow = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  })

  return (
    <View style={[styles.accordionContainer, { elevation, backgroundColor }]}>
      <Pressable
        style={styles.accordionHeader}
        onPress={() => {
          toggleAccordion()
          toggleState()
        }}
      >
        <View style={styles.titleContainer}>
          {icon ? <View style={{ marginEnd: 5 }}>{icon}</View> : null}
          <Text style={[styles.title, { color: titleTint }]}>{title}</Text>
        </View>
        <Animated.View style={{ transform: [{ rotateZ: rotateArrow }] }}>
          <MaterialIcons name="arrow-drop-down" size={24} color={'black'} />
        </Animated.View>
      </Pressable>

      {content && state ? (
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{content}</Text>
        </View>
      ) : children && state ? (
        <View style={styles.contentContainer}>{children}</View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  accordionContainer: {
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    width: '100%',
    overflow: 'hidden',
  },
  accordionHeader: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 'auto',
    paddingTop: 5,
    paddingBottom: 15,
  },
  content: {
    color: 'black',
    fontSize: 14,
  },
})

export default Accordion
