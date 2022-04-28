/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Blizzard from './src/assets/Blizzard';
import Cloudy from './src/assets/Cloudy';
import Drizzle from './src/assets/Drizzle';
import Mist from './src/assets/Mist';
import Rain from './src/assets/Rain';
import Snow from './src/assets/Snow';
import Sunny from './src/assets/Sunny';
import Thundery from './src/assets/Thundery';

export default function App() {
  const [locationName, setLocationName] = useState('');
  const [temperature, setTemperature] = useState('');
  const [localTime, setLocalTime] = useState('');
  const [condition, setCondition] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [icon, setIcon] = useState();

  let completeDate = new Date();
  const year = completeDate.getFullYear();
  const month = completeDate.getUTCMonth() + 1;
  const day = completeDate.getDate();

  const dateNow = `${day}/${month < 10 ? '0' + month : month}/${year}`;
  console.log(dateNow);

  const uri = 'http://api.weatherapi.com/v1/current.json?key=7f491b48e9a949e1b21214508222404&q=Seoul';

  function isImage(item) {
    if (item.current.condition.text.includes('Cloudy') || item.current.condition.text.includes('cloudy') || item.current.condition.text.includes('overcast') || item.current.condition.text.includes('Overcast')) {
      setIcon(Cloudy);
    } else if (item.current.condition.text.includes('Sleet') || item.current.condition.text.includes('sleet') || item.current.condition.text.includes('Blizzard') || item.current.condition.text.includes('blizzard')) {
      setIcon(Blizzard);
    } else if (item.current.condition.text.includes('Clear') || item.current.condition.text.includes('clear') || item.current.condition.text.includes('Sunny') || item.current.condition.text.includes('sunny')) {
      setIcon(Sunny);
    } else if (item.current.condition.text.includes('Rain') || item.current.condition.text.includes('rain')) {
      setIcon(Rain);
    } else if (item.current.condition.text.includes('Snow') || item.current.condition.text.includes('snow')) {
      setIcon(Snow);
    } else if (item.current.condition.text.includes('Drizzle') || item.current.condition.text.includes('drizzle')) {
      setIcon(Drizzle);
    } else if (item.current.condition.text.includes('thundery') || item.current.condition.text.includes('Thundery')) {
      setIcon(Thundery);
    } else if (item.current.condition.text.includes('mist') || item.current.condition.text.includes('Mist')) {
      setIcon(Mist);
    }
  }

  function getItems(item) {
    setLocationName(item.location.name);
    setTemperature(item.current.temp_c);
    setLocalTime(item.location.localtime);
    setCondition(item.current.condition.text);
    setFeelsLike(item.current.feelslike_c);

    isImage(item);

    console.log('Name: ', locationName, 'Temperature: ', temperature, 'Local time: ', localTime, 'Condition text: ', condition, 'Feelslike: ', feelsLike);
  }

  function showAPI() {
    fetch(uri)
    .then((response) => response.json())
    .then((json) => getItems(json))
    .catch((error) => console.log(error));
  }

  setInterval(showAPI, 10000);

  return (
    <View>
      <Text style={styles.appName}>Weather App</Text>
      <Text>{locationName}</Text>
      <Text>{temperature}</Text>
      <Text>{localTime}</Text>
      <Text>{condition}</Text>
      <Text>{feelsLike}</Text>
      { icon }
    </View>
  );
}
const styles = StyleSheet.create({
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
