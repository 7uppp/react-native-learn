import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'


const CurrentWeather = () => {
  const { wrapper, container, temp, feels, highLow, highLowWrapper, bodyWrapper, description, message } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black"></Feather>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText messageOne={'High: 7'} messageTwo={'Low: 4'} containerStyles={highLowWrapper} messageOneStyles={highLow} messageTwoStyles={highLow} />
      </View>
      <RowText messageOne={'sunny'} messageTwo={'Its perfect weather'} containerStyles={bodyWrapper} messageOneStyles={description} messageTwoStyles={message} />
    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    color: 'black',
    fontSize: 48
  },
  message: {
    color: 'black',
    fontSize: 30
  }
})

export default CurrentWeather