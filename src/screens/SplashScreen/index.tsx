import { Image, StatusBar, StyleSheet, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// Components
import { Fadeable } from '../../components'
import { useEffect, useState } from 'react'

// Types
import { OnboardingStackParamsList } from '../../navigation/types'

type Props = NativeStackScreenProps<OnboardingStackParamsList, 'Splash'>

const SplashScreen = ({ navigation }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  // Emulate preparing app proccess on Splash Screen
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 2700)
  }, [isLoading])

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Fadeable duration={1500}>
        <Image source={require('../../../assets/images/pablo_abreu_logo.png')} style={styles.image} />
      </Fadeable>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'contain'
  }
})
