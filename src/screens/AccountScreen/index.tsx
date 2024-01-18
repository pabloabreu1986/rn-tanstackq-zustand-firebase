import { StyleSheet, Text, View } from 'react-native'

// State
import { useUserStore } from '../../state/user/user-store'

// Components
import { Button } from '../../components'

// Styles
import { styles } from '../../themes'

type AccountScreenProps = {}

const AccountScreen = ({}: AccountScreenProps) => {
  // User state
  const logOutUser = useUserStore(state => state.logout)

  // Handle email aunthentication
  const handleLogout = async () => {
    logOutUser()
  }

  return (
    <View style={[_styles.container, styles.withPadding]}>
      <Text>Account Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

export default AccountScreen

const _styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
