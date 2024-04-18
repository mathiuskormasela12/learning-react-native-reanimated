import { type RootStackScreenProps } from '@/types/RootStackNavigatorTypes'

export interface IHome {
  navigation: RootStackScreenProps<'Home'>['navigation']
}

export interface IIve {
  id: string
  photo: string
  name: string
}
