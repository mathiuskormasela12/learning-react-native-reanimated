import React, { useCallback } from 'react'
import { View, Button } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { type IHome } from './types'

const Home: React.FC<IHome> = () => {
  // Defined Default value
  const width = useSharedValue(150)
  const height = useSharedValue(150)
  const backgroundColor = useSharedValue('teal')

  const handleStartAnimation = useCallback(() => {
    const randomWidth = Math.floor(Math.random() * 300) + 100
    const randomHeight = Math.floor(Math.random() * 300) + 100
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

    // Change valye after button is pressed
    width.value = withSpring(randomWidth)
    height.value = withSpring(randomHeight)
    backgroundColor.value = withTiming(randomColor, { duration: 2000 })
  }, [])

  const animatedStyles = useAnimatedStyle(() => ({
    height: height.value,
    width: width.value,
    backgroundColor: backgroundColor.value,
    marginTop: 10
  }))

  return (
    <View>
      <Button title='Animation' onPress={handleStartAnimation} />
      {/* Animated module have a few of React Native components like View,
       Text and others, but if you need another componnt you have
       to create custom animarte component */}
       {/** using normal style */}
      <Animated.View style={{ width, height, backgroundColor }} />
       {/** using useAnimatedStyle */}
       <Animated.View style={animatedStyles} />
    </View>
  )
}

export default Home
