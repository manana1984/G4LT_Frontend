import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  TouchableOpacity, Text, Image,} from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';

import styles from './styles';

const WelcomeScreen = ({ navigation }) => {
  // const slides = [
  //   {
  //     key: 1,
  //     title: 'Title 1',
  //     text: 'Description.\nSay something cool',
  //     image: require('./assets/1.jpg'),
  //     backgroundColor: '#59b2ab',
  //   },
  //   {
  //     key: 2,
  //     title: 'Title 2',
  //     text: 'Other cool stuff',
  //     image: require('./assets/2.jpg'),
  //     backgroundColor: '#febe29',
  //   },
  //   {
  //     key: 3,
  //     title: 'Rocket guy',
  //     text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
  //     image: require('./assets/3.jpg'),
  //     backgroundColor: '#22bcb5',
  //   }
  // ];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>G4LT</Text>
      <Text style={styles.text_1}>You Are Not A Product</Text>
      <Text style={styles.text_2}>Think, share, and</Text>
      <Text style={styles.text_2}>collaborate for yourself</Text>
      <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Login') }>
        <Text style={styles.btnLogin1}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Register') }>
        <Text style={styles.btnLogin2}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
