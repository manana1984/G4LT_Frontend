import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  TouchableOpacity, TextInput, Text, Image, validateEmail
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const MainScreen = ({ navigation }) => {
  const [number, setNumber] = useState(0);

   return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Forgot Password Code:</Text>
      <TextInput placeholder="Code" style={styles.input} onChangeText={x => setNumber(x)} value={number} />
      <TouchableOpacity style={[styles.btnsend, styles.btnLogin]} onPress={() => navigation.navigate('Login') }>
        <Ionicons name='enter' size={16} color='white'style={styles.Icon}/>  
        <Text style={styles.text_3}>Enter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnsend} onPress={() => navigation.navigate('Login') }>
      <Text style={styles.text_2}>Back To LogIn</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
};

export default MainScreen;
