import 'react-native-gesture-handler'
import { StatusBar, View } from 'react-native'

// Navigation
import Navigation from './src/navigation'

// Theme
import { styles } from './src/themes'

const App = () => {
  return (
    <View style={{ flex: 1, ...styles.withIosMarginBottom }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Navigation />
    </View>
  )
}

export default App
