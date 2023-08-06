import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import {
  Accordion,
  Button,
  ThemeProvider,
  Theme,
} from '@packages/hq-ecommerce-ui'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={styles.title}>Accordion</Text>

            <Accordion
              title={'What are Accordion props?'}
              content="Accordion only takes 3 optional props which are icon, title, content and children. Pick only one either using content prop or children"
            />

            <Accordion
              title={'Content vs Children'}
              content="If content prop is provided the children will be ignored, with content prop you can only provide string while you can put whatever you want with children"
            >
              <Text style={{ color: 'black' }}>
                Homeqube is an blockchain ecommerce application
              </Text>
            </Accordion>

            <Accordion
              icon={<FontAwesome name="cube" color={'black'} size={20} />}
              title={'Icon'}
              titleTint="red"
            >
              <Text style={{ color: 'black' }}>
                In terms of icon. This takes any type of JSX.Element including
                icons from react native vector and Image supported
              </Text>
            </Accordion>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>Buttons</Text>
            <Button
              title="Primary"
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
            <Button
              title="Secondary"
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
              title="tertiary"
              variant={'tertiary'}
              loading
              style={{
                marginStart: 'auto',
              }}
            />
            <Button
              title=""
              variant={'sidebarLink'}
              loading
              style={{ width: 150, alignSelf: 'start' }}
            />

            <Button title="muted" variant={'muted'} />
            <Button title="outlined" variant={'outlined'} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    gap: 5,
    backgroundColor: '#ededed',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    paddingVertical: 30,
    color: 'black',
  },
  container: {
    gap: 10,
  },
})

export default App
