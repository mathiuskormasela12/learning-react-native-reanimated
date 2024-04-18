import React from 'react'
import Animated, { FadeInLeft } from 'react-native-reanimated'
import { type IDetails } from './types'
import { ScrollView } from 'react-native'

const Details: React.FC<IDetails> = ({ route }) => {
  return (
    <ScrollView>
      <Animated.Image sharedTransitionTag={`photo-${route?.params?.item?.id}`} style={{ width: '100%', height: 250 }} source={{ uri: route?.params?.item?.photo }} />
      <Animated.Text entering={FadeInLeft.duration(500).delay(400)} style={{ fontSize: 18 }}>
        {route?.params?.item?.name}
      </Animated.Text>
    </ScrollView>
  )
}

export default Details
