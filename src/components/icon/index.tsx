import Ionicon from 'react-native-vector-icons/Ionicons'
import { IconProps } from 'react-native-vector-icons/Icon'

interface Props extends IconProps {
  focused?: boolean
}

const Icon = ({ color, name, size, focused = false }: Props) => {
  let iconName = name

  switch (name) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline'
      break
    case 'Search':
      iconName = focused ? 'search' : 'search-outline'
      break
    case 'Account':
      iconName = focused ? 'person' : 'person-outline'
      break
  }

  return <Ionicon name={iconName} size={size} color={color} />
}

export default Icon
