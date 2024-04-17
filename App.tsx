import React from 'react'
import { StatusBar } from 'expo-status-bar'
import RootStackNavigator from './src/RootStackNavigator'

const App: React.FC = () => {
  return (
    <>
      <StatusBar style='auto' />
      <RootStackNavigator />
    </>
  )
}

export default App
