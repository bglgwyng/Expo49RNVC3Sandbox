/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';

function App(): JSX.Element {
  const [direction, setDirection] = useState<'back' | 'front'>('back');
  const device = useCameraDevices("wide-angle-camera")[direction];

  useEffect(() => {
    void (async() => {
      await Camera.requestCameraPermission();
    })()
  }, [])

  const frameProcessor = useFrameProcessor(() => {
    'worklet';
  }, [])

  const cameraRef = useRef<Camera>(null)

  return (
    <View style={{ flex: 1 }}>
      <View style={StyleSheet.absoluteFill}>
        {device && (
          <Camera
            ref={cameraRef}
            device={device}
            style={{ flex: 1 }}
            fps={30}
            // frameProcessor={frameProcessor}
            video={false}
            isActive />
        )}
      </View>
      <View style={{ flex: 1 }}></View>
      <Button title="flip" onPress={() => { setDirection(direction === 'back' ? 'front' : 'back') }} />
    </View>
  );
}

export default App;
