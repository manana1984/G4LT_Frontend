import React, { useState, useEffect, } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements';
import { useLayoutEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connectAuth } from '../../Redux/connects';

import styles from './styles';

const SettingsScreen = ({ navigation, logout }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "Settings",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('profile')} style={{ marginLeft: 10 }}>
          <Ionicons name='ios-chevron-back' size={24} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} >
          <Text style={{color: '#800080'}}> </Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "white",
        borderBottomColor: "black",
      }

    });
  }, []);

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);


  return (
    <View>
      <View style={styles.line}>
        <Ionicons name="ios-person-sharp" size={31} style={{color: '#800080'}}></Ionicons>
        <Text style={styles.text} onPress={() => navigation.navigate('PersonalProfile')}>Profile</Text>
      </View>
      <View style={styles.line1}>
        <Ionicons name="ios-lock-closed" size={31} style={{color: '#800080'}}></Ionicons>
        <Text style={styles.text1}  onPress={() => navigation.navigate('ResetPassword')}>Password</Text>
      </View>
      <View style={styles.line1}>
        <Ionicons name="ios-log-out-outline" size={31} style={{color: '#800080'}}></Ionicons>
        <Text style={styles.text1}  onPress={() => logout()}>logout</Text>
      </View>

    </View>
  )
}



export default connectAuth(SettingsScreen);

