import { NavigationContainer } from '@react-navigation/native'

import MainNavigationStack from './main-stack'

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavigationStack />
    </NavigationContainer>
  )
}

export default Navigation
