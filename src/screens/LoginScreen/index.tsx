import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Clients
import { loginWithEmailAndPassword } from '../../clients/firebase'

// Components
import { Button, Header, TextInput } from '../../components'

// Types
import { OnboardingStackParamsList } from '../../navigation/types'
type LoginScreenProps = NativeStackScreenProps<OnboardingStackParamsList, 'Splash'>

// Styles
import { styles } from '../../themes'

// State
import { useUserStore } from '../../state/user/user-store'

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [{ email, password }, setEPCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState<string | null>(null)

  // User state
  const userIsLogged = useUserStore(state => state.loggedIn)
  const logInUser = useUserStore(state => state.authenthicateUser)

  // Handle email aunthentication
  const handleLogin = async () => {
    try {
      const user = await loginWithEmailAndPassword(email, password)
      setEPCredentials({ email: '', password: '' })
      logInUser()
      // Guarda el usuario en el estado local o contexto según tu necesidad
    } catch (e) {
      setError(String(e))
      console.log(e)
      // Handle Error
    }
  }

  /**
   *
   * Social Login*/

  return (
    <View style={[_styles.container, styles.withPadding]}>
      <Header title="Login" />
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={_styles.input}
        onChangeText={text => setEPCredentials({ password, email: text })}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry
        style={_styles.input}
        onChangeText={text => setEPCredentials({ email, password: text })}
      />
      {error && <Text style={_styles.error}>{error}</Text>}
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

export default LoginScreen

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  input: {
    height: 40
  },
  error: {
    color: 'red',
    marginBottom: 12
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
