/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { LinearTextGradient } from 'react-native-text-gradient';

export default function TextGradient(props) {
  return (
    <LinearTextGradient
      style={props.style}
      locations={[0, 1]}
      colors={[props.top_color, props.bottom_color]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Text>
        {props.text}
      </Text>
    </LinearTextGradient>
  );
}
