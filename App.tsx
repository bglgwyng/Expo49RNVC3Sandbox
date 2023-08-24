/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import {
  Camera,
  useCameraDevices,
} from 'react-native-vision-camera';

function App(): JSX.Element {
  const device = useCameraDevices().front;

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      {device && (
        <Camera
          device={device}
          isActive
          style={{flex: 1}}
        />
      )}
    </View>
  );
}

export default App;
