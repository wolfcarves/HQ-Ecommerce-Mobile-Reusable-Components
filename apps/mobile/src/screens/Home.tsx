import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

import MyAccordion from 'src/components/Accordion/MyAccordion'
import MyBreadcrumbs from 'src/components/Breadcrumbs/MyBreadcrumbs'
import MyButton from 'src/components/Button/MyButton'
import MyBaseCard from 'src/components/Cards/MyBaseCard'

const Home = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyAccordion />
        <MyBreadcrumbs />
        <MyButton />
        <MyBaseCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    gap: 5,
    backgroundColor: '#ededed',
  },
})

export default Home
