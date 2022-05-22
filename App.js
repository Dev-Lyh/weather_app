/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Checkbox } from 'react-native-paper';
import TextGradient from './src/components/TextGradient';
import {API_KEY} from '@env';

import Blizzard from './src/assets/Blizzard';
import Cloudy from './src/assets/Cloudy';
import Drizzle from './src/assets/Drizzle';
import Mist from './src/assets/Mist';
import Rain from './src/assets/Rain';
import Snow from './src/assets/Snow';
import Sunny from './src/assets/Sunny';
import Thundery from './src/assets/Thundery';

import colors from './src/assets/misc/colors';

export default function App() {
  const [locationName, setLocationName] = useState('');
  const [temperature, setTemperature] = useState('');
  const [localTime, setLocalTime] = useState('');
  const [condition, setCondition] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [icon, setIcon] = useState();
  const [theme, setTheme] = useState('LIGHT');
  const [checked, setChecked] = useState(true);
  const [time, setTime] = useState('');

  const newLocalTime = localTime.split('');
  const dateLT = newLocalTime.slice(0, 10).join('').split('-').reverse().join('/');
  const timeLT = newLocalTime.slice(11, 16).join('');
  const arr = ['0'];
  const KEY = API_KEY;

  const uri = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=auto:ip`;

  function isImage(item) {
    item.toLowerCase();
    if (item.includes('cloudy') || item.includes('overcast')) {
      setIcon(Cloudy);
    } else if (item.includes('sleet') || item.includes('blizzard')) {
      setIcon(Blizzard);
    } else if (item.includes('clear') || item.includes('sunny')) {
      setIcon(Sunny);
    } else if (item.includes('rain')) {
      setIcon(Rain);
    } else if (item.includes('snow')) {
      setIcon(Snow);
    } else if (item.includes('drizzle')) {
      setIcon(Drizzle);
    } else if (item.includes('thundery')) {
      setIcon(Thundery);
    } else if (item.includes('mist')) {
      setIcon(Mist);
    }

  }

  function getItems(item) {
    const conditionUpper = item.current.condition.text;

    setLocationName(item.location.name);
    setTemperature(item.current.temp_c);
    setLocalTime(item.location.localtime);
    setCondition(conditionUpper.toLowerCase());
    setFeelsLike(item.current.feelslike_c);
    if (newLocalTime[12] === ':') {
      const newTimeLT = arr.concat(timeLT).join('');
      setTime(newTimeLT + ' AM');
    } else {
      const newTimeLT = timeLT;
      setTime(newTimeLT + ' PM');
    }

    isImage(condition);
  }

  useEffect(() => {
    async function fetchAPI() {
      await fetch(uri)
        .then((response) => response.json())
        .then((json) => getItems(json))
        .catch((error) => console.log(error));
    }
    fetchAPI();
  });

  const onToggleSwitch = () => {
    if (checked === true) {
      setTheme('DARK');
    } else if (checked === false) {
      setTheme('LIGHT');
    }
  };

  let _background = theme === 'LIGHT' ? colors.LIGHT.BACKGROUND : colors.DARK.BACKGROUND;
  let _text = theme === 'LIGHT' ? colors.LIGHT.TEXT : colors.DARK.TEXT;
  let _info_container = theme === 'LIGHT' ? colors.LIGHT.INFO_CONTAINER : colors.DARK.INFO_CONTAINER;
  let _top_color = theme === 'LIGHT' ? colors.LIGHT.TOP_COLOR : colors.DARK.TOP_COLOR;
  let _bottom_color = theme === 'LIGHT' ? colors.LIGHT.BOTTOM_COLOR : colors.DARK.BOTTOM_COLOR;
  let _status_bar = theme === 'LIGHT' ? colors.LIGHT.STATUS_BAR : colors.DARK.STATUS_BAR;
  let _title = theme === 'LIGHT' ? colors.LIGHT.TITLE : colors.DARK.TITLE;
  let _copyright_top_color = theme === 'LIGHT' ? colors.LIGHT.COPYRIGHT_TOP : colors.DARK.COPYRIGHT_TOP;
  let _copyright_bottom_color = theme === 'LIGHT' ? colors.LIGHT.COPYRIGHT_BOTTOM : colors.DARK.COPYRIGHT_BOTTOM;

  return (
    <>
      <StatusBar barStyle={theme === 'DARK' ? 'light-content' : 'dark-content'} backgroundColor={_status_bar} />
      <View style={[styles.view, { backgroundColor: _background }]}>
        <View style={styles.header}>
          <Text style={[styles.appName, { color: _title }]}>Weather App</Text>
          <View style={styles.modeArea}>
            <Text style={[styles.modeText, { color: _text }]}>Dark Mode</Text>
            <Checkbox
              status={checked ? 'unchecked' : 'checked'}
              onPress={() => {
                setChecked(!checked);
                onToggleSwitch();
              }}
              uncheckedColor="#151515"
              color="#F5F5F5"
            />
          </View>
        </View>
        <View style={[styles.infoContainer, { backgroundColor: _info_container }]}>
          <Text style={[styles.localName, { color: _text }]}> {locationName} </Text>
          <View style={styles.icon_container}>
            {icon}
          </View>
          <TextGradient text={temperature + '°C'} top_color={_top_color} bottom_color={_bottom_color} style={styles.temperature} />
          <Text style={[styles.condition, { color: _text }]}>
            {condition}
          </Text>
          <View style={[styles.localTimeArea]}>
            <Text style={[styles.dateLT, { color: _text }]}>{dateLT}</Text>
            <Text style={[styles.timeLT, { color: _text }]}>{time}</Text>
          </View>
          <View style={styles.localTimeArea}>
            <TextGradient text={'Feelslike: '} top_color={_bottom_color} bottom_color={_top_color} style={styles.feelsLike} />
            <TextGradient text={feelsLike + '°C'} top_color={_bottom_color} bottom_color={_top_color} style={styles.feelsLikeC} />
          </View>
          <TextGradient text={'© 2022 DevLyh'} top_color={_copyright_top_color} bottom_color={_copyright_bottom_color} style={styles.copyright}/>
        </View>
      </View>
    </>
  );
}

const montserrat_bold = 'Montserrat-Bold';
const montserrat_regular = 'Montserrat-Regular';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  appName: {
    fontSize: 24,
    fontFamily: montserrat_bold,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    height: 30,
    marginBottom: 30,
  },
  modeArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modeText: {
    marginRight: 5,
    fontFamily: montserrat_regular,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 33,
  },
  icon_container: {
    width: '100%',
    height: 128,
    alignItems: 'center',
    justifyContent: 'center',
  },
  localName: {
    fontSize: 24,
    fontFamily: montserrat_regular,
  },
  temperature: {
    fontFamily: montserrat_bold,
    fontSize: 72,
  },
  condition: {
    fontSize: 36,
    fontFamily: montserrat_regular,
    marginBottom: 15,
  },
  localTimeArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateLT: {
    marginRight: 5,
    fontFamily: montserrat_regular,
  },
  timeLT: {
    fontFamily: montserrat_bold,
  },
  feelsLike: {
    fontFamily: montserrat_bold,
    fontSize: 20,
  },
  feelsLikeC: {
    fontFamily: montserrat_regular,
    fontSize: 20,
  },
  copyright: {
    fontFamily: montserrat_bold,
    fontSize: 18,
  },
});
