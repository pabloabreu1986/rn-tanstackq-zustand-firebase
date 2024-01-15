import { Platform, StyleSheet, ViewStyle } from 'react-native'

interface Styles {
  withMargin: ViewStyle
  withPadding: ViewStyle
  withIosMarginBottom: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
  withMargin: {
    marginHorizontal: 20
  },
  withPadding: {
    paddingHorizontal: 20
  },
  withIosMarginBottom: {
    paddingBottom: Platform.OS === 'ios' ? 20 : 0
  }
})

export { default as colors } from './light-theme/colors'
