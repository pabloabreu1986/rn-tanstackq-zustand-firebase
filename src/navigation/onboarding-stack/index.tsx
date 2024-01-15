import { createStackNavigator } from '@react-navigation/stack'

// Config
import { onboardingStackConfigs } from '../config'

// Screens
import { LoginScreen, SplashScreen } from '../../screens'

const Stack = createStackNavigator()

const OnboardingStack = () => {
  return (
    <Stack.Navigator {...onboardingStackConfigs} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default OnboardingStack
