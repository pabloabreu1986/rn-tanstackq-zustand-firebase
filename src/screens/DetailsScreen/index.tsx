import { StyleSheet, Text, View } from 'react-native'


type DetailsScreenProps = {}

const DetailsScreen = ({}: DetailsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})