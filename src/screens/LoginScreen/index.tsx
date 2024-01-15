import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Components
import { Button, Header, TextInput } from '../../components'

// Types
import { OnboardingStackParamsList } from '../../navigation/types'
type LoginScreenProps = NativeStackScreenProps<OnboardingStackParamsList, 'Splash'>

// Styles
import { styles } from '../../themes'

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [text, setText] = useState('')

  return (
    <View style={[_styles.container, styles.withPadding]}>
      <Header title="Login" />
      <TextInput onChangeText={text => setText(text)} placeholder="write something" />
      <Text>{JSON.stringify(text)}</Text>
      <Button onPress={() => console.log('Login')} title="Entrar" />
    </View>
  )
}

export default LoginScreen

const _styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
