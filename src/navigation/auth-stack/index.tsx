import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Config
import { authStackConfigs } from '../config'

// Screens
import { HomeScreen, AccountScreen, DetailsScreen, SearchScreen, SettingsScreen } from '../../screens'
import MainTabBar from './bottom-tab-bar'
import { AuthStackParamsList } from '../types'

const Tab = createBottomTabNavigator<AuthStackParamsList>()

const AuthStack = () => {
  return (
    <Tab.Navigator initialRouteName="Home" {...authStackConfigs} tabBar={props => <MainTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default AuthStack
