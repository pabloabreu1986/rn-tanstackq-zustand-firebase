import { View, TouchableOpacity } from 'react-native'

// Components
import { Icon } from '../../../components'

// Styles
import { colors } from '../../../themes'

// Types
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

const MainTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 8 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        return (
          <TouchableOpacity
            key={String(label)}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center' }}>
            <Icon name={String(label)} size={isFocused ? 32 : 24} color={isFocused ? colors.blue : '#222222'} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default MainTabBar
