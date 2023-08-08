import { View, Text } from 'react-native'
import React from 'react'
import { Breadcrumbs } from '@packages/hq-ecommerce-ui'

const Profile = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>
        Profile
      </Text>
    </View>
  )
}

export default Profile
