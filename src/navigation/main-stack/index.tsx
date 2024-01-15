import { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Configs
import { mainStackConfigs } from '../config'

// Stacks
import AuthStack from '../auth-stack'
import OnboardingStack from '../onboarding-stack'

// Types
import { MainStackParamsList } from '../types'

const Stack = createStackNavigator<MainStackParamsList>()

const MainNavigationStack = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Stack.Navigator {...mainStackConfigs}>
      {isLoggedIn ? (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      ) : (
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      )}
    </Stack.Navigator>
  )
}

export default MainNavigationStack
