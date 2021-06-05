import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Linking, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';

import styles from './styles';

function ContactUsScreen() {

  useLayoutEffect(() => {
   
    navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "CHAT",
      headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('') } >
          <Text style={styles.headleft}>Cancel</Text>
      </TouchableOpacity>
      ),
      headerRight: () => (
      <TouchableOpacity onPress={() => alert('cancel') } >
        <Text style={styles.headright}>Post</Text>
      </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "white",
        borderBottomColor: "black",
      }
      
    });
  }, []);
  
  const handleEmail = () => {
    Linking.openURL('mailto:alyosha.ruslanovich@gmail.com?subject=Test-Subject&body=Test-Body');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Under Contruction...</Text>
      <TouchableOpacity style={styles.btnSubmit} onPress={() => handleEmail() } >
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ContactUsScreen;
