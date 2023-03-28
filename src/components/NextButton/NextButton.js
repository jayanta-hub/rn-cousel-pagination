import {StyleSheet, TouchableOpacity, View, Animated} from 'react-native';
import SVG, {Circle, G} from 'react-native-svg';
import React, {useEffect, useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from '../../infrastructure/utils/screenUtility';
const NextButton = ({percentage}) => {
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const Animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    Animation(percentage);
  }, [percentage]);
  useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset =
        (circumference - circumference * value.value) / 100;
      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [percentage]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SVG width={size} height={size}>
        <G rotation={'-90'} origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke="#F4338F"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            // strokeDashoffset={circumference - (circumference * 30) / 100}
          />
        </G>
      </SVG>
      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: '#f4338f',
          borderRadius: scale(100),
          padding: scale(20),
        }}
        activeOpacity={0.3}>
        <AntDesign name="arrowright" size={scale(32)} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({});
