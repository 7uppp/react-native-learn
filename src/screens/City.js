import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'
const City = () => {
  const { container, imageLayout, cityName, countryName, cityText, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/test.jpg')} style={imageLayout} >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText iconName={'user'} IconColor={'white'} bodyText={'8000'} bodyTextStyles={populationText} />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText iconName={'sunrise'} IconColor={'white'} bodyText={'10:46:58 am'} bodyTextStyles={riseSetText} />
          <IconText iconName={'sunset'} IconColor={'white'} bodyText={'10:46:58 am'} bodyTextStyles={riseSetText} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,

  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    color: 'red',
    marginLeft: 7.5,
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30

  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {

    flexDirection: 'row',
    alignItems: 'center',
  }
})
export default City
