/* eslint-disable @typescript-eslint/consistent-type-definitions */

import { type IIve } from '@/screens/Home/types'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Details: {
    item: IIve
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>
