/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import {View} from 'react-native';

export default function Thundery() {
  return (
    <View style={{ height: 108, width: 108, backgroundColor: 'transparent' }}>
      <Svg width="218" height="218" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M23.66 9.90003C26.8425 9.89903 29.965 10.7664 32.691 12.4087C35.4171 14.0511 37.6433 16.4061 39.13 19.22C40.956 18.1525 43.0037 17.5206 45.1138 17.3735C47.2239 17.2264 49.3394 17.5681 51.2959 18.3721C53.2523 19.176 54.9969 20.4205 56.394 22.0087C57.791 23.5969 58.8028 25.4859 59.3506 27.529C59.8985 29.572 59.9676 31.7138 59.5526 33.7879C59.1376 35.862 58.2497 37.8124 56.9579 39.4873C55.6662 41.1623 54.0054 42.5166 52.1049 43.445C50.2043 44.3734 48.1152 44.8508 46 44.84L23.61 44.9C18.9687 44.9 14.5175 43.0563 11.2356 39.7744C7.95373 36.4925 6.10999 32.0413 6.10999 27.4C6.10999 22.7587 7.95373 18.3075 11.2356 15.0257C14.5175 11.7438 18.9687 9.90003 23.61 9.90003H23.66Z" fill="url(#paint0_linear_19_81)" />
        <Path d="M59.2976 34.7944C61.341 27.4806 57.0685 19.895 49.7547 17.8516C42.4409 15.8082 34.8554 20.0807 32.8119 27.3945C30.7685 34.7083 35.041 42.2939 42.3548 44.3373C49.6686 46.3807 57.2542 42.1082 59.2976 34.7944Z" fill="url(#paint1_linear_19_81)" />
        <Path d="M33.13 36.35L31 48.6H35.26L33.13 57.65L43.25 44.87H38.46L42.72 36.35H33.13Z" fill="#EFCC00" />
        <Path d="M28.85 53.28C28.85 54.2666 28.4581 55.2128 27.7604 55.9104C27.0628 56.6081 26.1166 57 25.13 57C24.1434 57 23.1972 56.6081 22.4996 55.9104C21.8019 55.2128 21.41 54.2666 21.41 53.28C21.41 50.02 24.41 47 25.13 47C25.85 47 28.85 50 28.85 53.28Z" fill="#0BAEFF" />
        <Defs>
          <LinearGradient id="paint0_linear_19_81" x1="19.25" y1="46.39" x2="40.34" y2="19.08" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#F2F2F2" />
            <Stop offset="1" stopColor="#CFCFCF" />
          </LinearGradient>
          <LinearGradient id="paint1_linear_19_81" x1="51.6676" y1="26.2044" x2="35.7365" y2="40.0793" gradientUnits="userSpaceOnUse">
            <Stop offset="0.02" stopColor="white" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
}
