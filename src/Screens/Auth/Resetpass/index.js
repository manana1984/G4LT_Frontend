import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  TouchableOpacity, TextInput, Text, Image, validateEmail
} from 'react-native';

import { connectAuth } from '../../../Redux/connects';
import styles from './styles';


const ResetpassScreen = ({ navigation, login }) => {
  const [password, setPassword] = useState('');
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Reset Password?</Text>
      <TextInput placeholder="New Password" style={styles.input} onChangeText={x => setPassword(x)} value={password} secureTextEntry={true}/>
      <TextInput placeholder="Re-enter Password" style={styles.input} onChangeText={x => setPassword(x)} value={password} secureTextEntry={true}/>
      <TouchableOpacity style={styles.btnsend} onPress={login('email', password) }>
        <Text style={styles.btnLogin}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnsend} onPress={() => navigation.navigate('Login') }>
      <Text style={styles.text_2}>Back To Sign In</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
};

export default connectAuth(ResetpassScreen);
