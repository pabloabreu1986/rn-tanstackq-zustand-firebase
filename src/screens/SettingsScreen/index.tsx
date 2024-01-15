import { StyleSheet, Text, View } from 'react-native'


type SettingsScreenProps = {}

const SettingsScreen = ({}: SettingsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})