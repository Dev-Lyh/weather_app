/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import {View} from 'react-native';

export default function Mist() {
  return (
    <View style={{ height: 108, width: 108, backgroundColor: 'transparent' }}>
      <Svg width="218" height="218" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M16.5 17.5H29.5" stroke="#B9C1C6" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <Path d="M9.5 22.5H22.5" stroke="#B9C1C6" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <Path d="M6.5 27.5H55.5" stroke="#B9C1C6" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <Path d="M39.5 32.5H57.5" stroke="#A5A9AA" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <Path d="M6.5 32.5H31.5" stroke="#B9C1C6" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <Path d="M30.5 37.5H56.5" stroke="#A5A9AA" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <Path d="M15.5 42.5H52.5" stroke="#A5A9AA" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <Path d="M25.5 47.5H42.5" stroke="#A5A9AA" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <Path d="M8.5 37.5H23.5" stroke="#A5A9AA" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <Path d="M28.5 22.5H35.5" stroke="#B9C1C6" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <Path d="M45.5 22.5H52.5" stroke="#A5A9AA" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
      </Svg>
    </View>
  );
}
