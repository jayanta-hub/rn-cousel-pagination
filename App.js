import {View, Text} from 'react-native';
import React from 'react';
import Onbording from './src/components/Onbording/Onbording';
import {scale} from './src/infrastructure/utils/screenUtility';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Onbording />
    </View>
  );
};

export default App;
