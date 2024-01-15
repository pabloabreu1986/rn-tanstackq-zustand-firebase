import { StyleSheet, Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// Types
import { AuthStackParamsList } from '../../navigation/types'

type SearchScreenProps = NativeStackScreenProps<AuthStackParamsList, 'Search'>

const SearchScreen = ({ navigation }: SearchScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
