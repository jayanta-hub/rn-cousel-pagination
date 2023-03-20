import {
  Platform,
  StyleSheet,
  Animated,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {scale} from '../../infrastructure/utils/screenUtility';

const Pagination = ({renderData, activeIndex, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: scale(Platform.isPad ? -125 : -8),
        }}>
        {renderData.length > 0
          ? renderData.map((_, index) => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ];
              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [6, 14, 6],
                extrapolate: 'clamp',
              });
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={index.toString()}
                  style={{
                    width: dotWidth,
                    height: scale(6),
                    borderRadius: scale(3),
                    backgroundColor: '#146C94',
                    marginHorizontal: scale(5),
                    opacity: opacity,
                  }}
                />
              );
            })
          : null}
      </View>
    </>
  );
};

export default Pagination;
