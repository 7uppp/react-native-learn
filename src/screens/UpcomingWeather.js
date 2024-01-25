import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
  { dt_txt: '2022-01-01', main: { temp_max: 5, temp_min: 3 }, weather: [{ main: 'sunny' }] },
  { dt_txt: '2022-01-02', main: { temp_max: 6, temp_min: 1 }, weather: [{ main: 'cloud' }] },
  { dt_txt: '2022-01-03', main: { temp_max: 7, temp_min: 5 }, weather: [{ main: 'rain' }] },
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max} />
  )
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <Text>Upcoming Weather</Text>
      <ImageBackground source={require('../../assets/test.jpg')} style={image} >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt} />
      </ImageBackground>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  image: {
    flex: 1,
  }
})

export default UpcomingWeather