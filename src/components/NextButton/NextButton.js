import {StyleSheet, Text, View} from 'react-native';
// import SVG from 'react-native-svg';
import React from 'react';

const NextButton = () => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <SVG width={size} height={size}>
        <Circle
          stroke="#E6E7E8"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#E6E7E8"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (circumference * 25) / 100}
        />
      </SVG> */}
      <Text>skjdkdc</Text>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({});
