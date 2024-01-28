import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
  const { iconName, IconColor, bodyText, bodyTextStyles } = props
  const { textTheme, container } = styles
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={IconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center'
  }
})
export default IconText