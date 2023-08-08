import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BaseCard, Button } from '@packages/hq-ecommerce-ui'
import { useAppTheme } from '@packages/hq-ecommerce-ui'

const MyBaseCard = () => {
  const { colors, fonts } = useAppTheme()

  const styles = StyleSheet.create({
    title: {
      fontFamily: fonts.bold.fontFamily,
      fontSize: 32,
      textAlign: 'center',
      paddingVertical: 30,
      color: colors.black,
    },
    cardTitle: {
      color: colors.white,
      fontFamily: fonts.semiBold.fontFamily,
      fontSize: 18,
      alignSelf: 'flex-start',
      marginBottom: 10,
    },
    cardText: {
      fontFamily: fonts.medium.fontFamily,
    },
    container: {
      gap: 10,
    },
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cards</Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
        <BaseCard variant="primary" alignSelf="center">
          <Text style={styles.cardTitle}>Primary</Text>
          <Text style={[styles.cardText, { color: colors.white }]}>
            Full Width - Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Distinctio nostrum aliquam totam! Maxime, minus. Alias
            aspernatur magnam doloremque consequuntur debitis natus officiis
            iste blanditiis dolore, eaque laudantium, harum numquam veniam
            dolorem in, nulla odit! Et veritatis blanditiis quod tempore atque
            facere, quis illo iusto? Quasi a saepe quisquam cumque? Assumenda,
            amet incidunt? Quisquam, unde provident magni quia, delectus
            doloremque earum pariatur tenetur omnis neque veritatis? Enim
            tempore deserunt quae cumque laudantium eveniet, optio totam
            repellendus quasi provident dicta molestias eius labore odit beatae
            veniam dignissimos animi eaque quisquam iusto omnis aut unde sunt.
            Vero quae molestiae error aliquid, facilis necessitatibus?
          </Text>
        </BaseCard>
        <BaseCard
          variant="secondary"
          width={250}
          height={400}
          alignSelf="flex-end"
        >
          <Text style={[styles.cardTitle, { color: colors.black }]}>
            Secondary
          </Text>

          <Text style={[styles.cardText, { color: colors.black }]}>
            Flex-End - Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eius, optio? Delectus eligendi ullam est animi explicabo ipsam quos
            facere ab voluptatum necessitatibus aperiam, at corrupti dignissimos
            cumque? Sunt pariatur blanditiis atque, debitis repellat rem
            aspernatur, omnis magnam ipsum similique quam ea quod nam modi? Nam
            incidunt, officia totam consectetur nulla recusandae optio dolores
            ab odit, quo tenetur cum, eum unde!
          </Text>
        </BaseCard>
        <BaseCard variant="tertiary" width={280} alignSelf="center">
          <Text style={[styles.cardTitle, { color: colors.black }]}>
            Tertiary
          </Text>
          <Text style={[styles.cardText, { color: colors.black }]}>
            Center - Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur nam sunt corporis, beatae in id quos facilis voluptates
            accusamus dolores illum numquam aperiam sit ipsum dolore enim.
            Obcaecati possimus sint aspernatur architecto quae numquam, commodi
            reprehenderit, soluta sequi quibusdam debitis quidem officiis
            placeat corrupti repudiandae!
          </Text>
        </BaseCard>
        <BaseCard variant="outlined">
          <Text
            style={[
              styles.cardTitle,
              { color: colors.black, alignSelf: 'center' },
            ]}
          >
            Outlined
          </Text>
          <Text style={[styles.cardText, { color: colors.black }]}>
            Full-Width - Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ea placeat reiciendis perferendis itaque nam sapiente. Ipsum
            doloribus et aspernatur suscipit! Fugit ex, porro quae cupiditate
            cumque quo facilis sunt voluptatibus soluta voluptas unde. Ratione
            eius aperiam eos veniam, repellat blanditiis, nesciunt repellendus
            laborum nulla illo explicabo possimus consequuntur doloribus enim?
            Officiis, quam. Quis, porro quidem! Perferendis aspernatur
            voluptatem alias recusandae.
          </Text>

          <Button
            variant="secondary"
            text="Button Inside Card"
            style={{
              alignSelf: 'flex-start',
              marginTop: 10,
            }}
            onPress={() => {}}
          />
        </BaseCard>
      </View>
    </View>
  )
}

export default MyBaseCard
