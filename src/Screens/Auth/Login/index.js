import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import styles from './styles';
import { connectAuth } from '../../../Redux/connects';
import AuthAPI from '../../../Services/auth';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ navigation, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');


  const onLoginButtonClicked = () => {
    // Validate Email and Password
    // If validation fails, show alert messages and return
    if (email === '') {
      setAlert("Please input username");
      return;
    }

    if (password === '') {
      setAlert("Please input password");
      return;
    }

    // If validation is succeed
    AuthAPI.login(email, password).then(response => {
      if (response.name === 'Error') {
        setAlert("Incorrect credential");
        return;
      }
      // AuthAPI.verifyAccesstoken().then(user => {
      //   login(user);
      // }, e => console.log(e));      
      AuthAPI.getUser(email).then(user => {
        console.log('user', user);
        login(user);
      }, e => console.log(e));      
    }, e => {
      setAlert("Incorrect credential");
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Access G4LT</Text>
      <View>
        <Text style={styles.alert}>{alert}</Text>
        <View style={styles.inline}>
          <TextInput placeholder="Username" style={styles.input}
            onChangeText={text => setEmail(text)} value={email} />
        </View>
        <View style={styles.inline}>
          <TextInput placeholder="Password" style={styles.input}
            onChangeText={text => setPassword(text)} value={password} secureTextEntry={true} />
        </View>
      </View>
      <View  style={styles.btnforgotpassword}>
        <Text  onPress={() => navigation.navigate('Forgetpass')}>Forgot Password</Text>
      </View>
      <TouchableOpacity style={[styles.btnLogin,styles.btnLogin1]} onPress={onLoginButtonClicked} >
        <Ionicons name='login' size={24} color='white'/>
        <Text style={styles.textWhite}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btnLogin, styles.facebook]} onPress={() => navigation.navigate('Register')} >
        <Ionicons name='facebook' size={24} color='white'/>
        <Text style={styles.textWhite}>Facebook Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btnLogin, styles.apple]} onPress={() => navigation.navigate('Register')} >
        <Ionicons name='apple' size={24} color='white'/>
        <Text style={styles.textWhite}>Login With Apple ID</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default connectAuth(LoginScreen);
