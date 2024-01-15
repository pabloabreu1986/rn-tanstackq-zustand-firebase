import { StyleSheet, Text, View } from 'react-native'


type AccountScreenProps = {}

const AccountScreen = ({}: AccountScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})