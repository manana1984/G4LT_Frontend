import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text, View
} from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const SplashScreen = ({ navigation }) => {
  const [width, setWidth] = useState(1);

  const navigateToScreen = function (pageName) {
    navigation.navigate(pageName);
  };

  const objTimeOut = setTimeout(() => {
    // clearTimeout(objTimeOut);
    navigateToScreen('Slider');
  }, 3000);

  return (
    <SafeAreaView style={styles.container}>
      {/* <MapView> */}
        <Text style={styles.text}>G4LT</Text>
      {/* </MapView> */}
    </SafeAreaView>
  );
};

export default SplashScreen;
