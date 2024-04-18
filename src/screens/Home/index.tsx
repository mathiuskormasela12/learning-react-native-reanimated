import React, { useCallback } from 'react'
import { View, Button, Pressable } from 'react-native'
import Animated, { useAnimatedRef, useAnimatedStyle, useScrollViewOffset, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
import ive from '@/data.json'
import { type IIve, type IHome } from './types'

const Home: React.FC<IHome> = ({ navigation }) => {
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

  const handleGoToDetail = useCallback((item: IIve) => {
    navigation.navigate('Details', { item })
  }, [])

  const scrollRef = useAnimatedRef<Animated.ScrollView>()

  const scrollHandler = useScrollViewOffset(scrollRef)

  const buttonStyle = useAnimatedStyle(() => {
    console.info(scrollHandler.value)
    return {
      opacity: (scrollHandler.value > 261) ? withSpring(1) : withSpring(0)
    }
  })

  const handleScrollToTop = useCallback(() => {
    scrollRef?.current?.scrollTo({ x: 0, y: 0, animated: true })
  }, [])

  return (
    <>
      <View>
        <Button title='Animation' onPress={handleStartAnimation} />
        {/* Animated module have a few of React Native components like View,
        Text and others, but if you need another componnt you have
        to create custom animarte component */}
        {/** using normal style */}
        <Animated.View style={{ width, height, backgroundColor }} />
        {/** using useAnimatedStyle */}
        <Animated.View style={animatedStyles} />

        <Animated.ScrollView ref={scrollRef}>
          {ive.map(item => (
            <Pressable key={String(item.id)} onPress={handleGoToDetail.bind(this, item)}>
              <Animated.Image
                source={{ uri: item.photo }}
                style={{ width: 200, height: 250, marginVertical: 12 }}
                sharedTransitionTag={`photo-${item.id}`}
              />
            </Pressable>
          ))}
        </Animated.ScrollView>
      </View>
      <Animated.View style={[{
        position: 'absolute',
        bottom: 20,
        right: 20
      }, buttonStyle]}>
        <Pressable onPress={handleScrollToTop} style={{
          padding: 6,
          backgroundColor: 'red',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Ionicons name='add-circle' size={30} color='black' />
        </Pressable>
       </Animated.View>
    </>
  )
}

export default Home
