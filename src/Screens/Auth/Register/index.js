import React, { useState } from 'react';
import { TouchableOpacity, TextInput, Text, TextField, ScrollView, SafeAreaView, View } from 'react-native';
import styles from './styles';

import { connectAuth } from '../../../Redux/connects';
import AuthAPI from '../../../Services/auth';

const RegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState('');
  const [alert, setAlert] = useState('');

  const validateEmail = (x) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(x) === false) {
      return false;
    }
    else {
      return true;
    }
  }
  const register = () => {
    if (firstName == '') {
      setAlert("Please input firstname");
      return
    }
    if (lastName == '') {
      setAlert("Please input lastname");
      return
    }
    if (userName == '') {
      setAlert("Please input username");
      return
    }
    if (email == '') {
      setAlert("Please input email");
      return;
    }
    if (!validateEmail(email)) {
      setAlert("Please input correct email");
      return;
    }
    if (number == '') {
      setAlert("please input phonenumber");
      return
    }
    if (number.length != 10) {
      setAlert("please input correct phone number");
      return
    }
    if (isNaN(number)) {
      setAlert("please input correct phone number");
      return
    }
    if (password == '') {
      setAlert("please input correct password");
      return
    }
    if (password.length < 7) {
      setAlert("The Password has 8 letter more.");
      return
    }
    setAlert("");
    AuthAPI.register(firstName, lastName, userName, password, email, number).then(response => {
      if (response.status == 200) {
        navigation.navigate('Login')
      }
    }, e => {
      if (e.response.status == 409) {
        setAlert("The username already exists");
      } else {
        setAlert("the prolemm.. ");
      }
    });
  }
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View >

          <Text style={styles.text}>Create New Account</Text>

          <TextInput placeholder="First Name" style={styles.input} onChangeText={x => setFirstName(x)} value={firstName} />
          <TextInput placeholder="Last Name" style={styles.input} onChangeText={x => setLastName(x)} value={lastName} />
          <TextInput placeholder="User Name" style={styles.input} onChangeText={x => setUserName(x)} value={userName} />
          <TextInput placeholder="E-mail Address" style={styles.input} onChangeText={x => setEmail(x)} value={email} />
          <TextInput placeholder="Phone Number" style={styles.input} onChangeText={x => setNumber(x)} value={number} />
          <TextInput placeholder="Password" style={styles.input} onChangeText={x => setPassword(x)} value={password} secureTextEntry={true} />

          <Text style={styles.alert}>{alert}</Text>

          <TouchableOpacity style={styles.btnLogin} onPress={() => register()}>
            <Text style={styles.Sign}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default connectAuth(RegisterScreen);
