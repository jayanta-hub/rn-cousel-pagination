import {View, Text} from 'react-native';
import React from 'react';
import Onbording from './src/components/Onbording/Onbording';

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
