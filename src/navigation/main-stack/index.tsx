import { createStackNavigator } from '@react-navigation/stack'

// Configs
import { mainStackConfigs } from '../config'

// Stacks
import AuthStack from '../auth-stack'
import OnboardingStack from '../onboarding-stack'

// Types
import { MainStackParamsList } from '../types'

// State
import { useUserStore } from '../../state/user/user-store'

const Stack = createStackNavigator<MainStackParamsList>()

const MainNavigationStack = () => {
  const userIsLogged = useUserStore(state => state.loggedIn)

  return (
    <Stack.Navigator {...mainStackConfigs}>
      {userIsLogged ? (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      ) : (
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      )}
    </Stack.Navigator>
  )
}

export default MainNavigationStack
