import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  TouchableOpacity, TextInput, Text, Image, validateEmail} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { connectAuth } from '../../../Redux/connects';
import AuthAPI from '../../../Services/auth';
import styles from './styles';

const ForgetpassScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const validateEmail = (x) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(x) === false) {
      setEmail({ email: x })
      return false;
    }
    else {
      setEmail({ email: x })
    }
  }

  // const mailCheck = () => {
  //   if (email == '') {
  //     setAlert("Please input email");
  //     return;
  //   }
  //   if (!validateEmail(email)) {
  //     setAlert("Please input correct email");
  //     return;
  //   }
  //   setAlert("");
  //   AuthAPI.register(email).then(response => {
  //     if (response.status == 200) {
  //       navigation.navigate('Codepass')
  //     }
  //   }, e => {
  //     if (e.response.status == 409) {
  //       setAlert("The username already exists");
  //     } else {
  //       setAlert("the prolemm.. ");
  //     }
  //   });
  // }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Forgot your password?</Text>
      <Text style={styles.text_1}>Please enter your email address</Text>

      <TextInput placeholder="E-mail Address" style={styles.input} onChangeText={x => validateEmail(x)} value={email} />
      {/* <TouchableOpacity style={[styles.btnsend, styles.btnLogin]} onPress={() => mailCheck()}> */}
      <TouchableOpacity style={[styles.btnsend, styles.btnLogin]} onPress={() => navigation.navigate('Codepass')}>
        <Ionicons name='send' size={16} color='white' style={styles.Icon} />
        <Text style={styles.text_3}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnsend} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text_2}>Back To LogIn</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default connectAuth(ForgetpassScreen);
