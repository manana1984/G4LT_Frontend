import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect,  useState,} from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, TextInput, Text, ScrollView, View } from 'react-native';
import Toast from 'react-native-toast-message';

import styles from './styles';

import Http from '../../Services/http';
import { connectAuth } from '../../Redux/connects';

const ResetPasswordScreen = (props) => {
  const [currentpassword, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [reenterpassword, setResectPassword] = useState("");  
  const [alert, setAlert] = useState('');

  useEffect(() => {
    props.navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "Password",
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')} style={{ marginLeft: 10 }}>
          <Ionicons name='chevron-left' size={24} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }}  >
          <Text style={{ color: '#800080' }} onPress={() => resetPassword()}>Done</Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "white",
        borderBottomColor: "black",
      }

    });
  });

  const resetPassword = () => {
    if (currentpassword === ''){
      setAlert('Please Input Current Password!');     
      return 
    } 
    if(newpassword == '') {
      setAlert('Please Input New Password!');
      return;
    }
    if(newpassword.length < 8) {
      setAlert('Please Input Password minimum 8 character!');
      return;
    }
    if(newpassword !== reenterpassword) {
      setAlert("not match");
      return 
    } else {
      const username = props.user.username;
      Http.resetPassword(username, currentpassword, newpassword).then(response => {
        Toast.show({
          text1: 'Success',
          text2: 'Password is changed successfully.😀',
          onPress: () => { props.navigation.navigate('profile'); }
        });
      }, e => {
        if (e.response.status == 409) {
          Toast.show({
            type: 'error',
            text1: 'Sorry',
            text2: 'Incorrect current password. 😛'
          });
        } else {
          console.log('fail');
        }
      });
    }
  }
  return (
    <SafeAreaView >

      <View style={styles.profile}>
        <ScrollView >
        <Text style={styles.alert}>{alert}</Text>
          <Text style={styles.text}>Current Password</Text>
          <View style={styles.view}>
            <TextInput placeholder="Please Input Current Password" onChangeText={x => setPassword(x)} value={currentpassword} secureTextEntry={true} />
          </View>
          <Text style={styles.text}>New Password</Text>
          <View style={styles.view}>
            <TextInput placeholder="Password minimum 8 character" onChangeText={x => setNewPassword(x)} value={newpassword} secureTextEntry={true} />
          </View>
          <Text style={styles.text}>Re-enter Password</Text>
          <View style={styles.view}>
            <TextInput placeholder="Comfirm The New Password" onChangeText={x => setResectPassword(x)} value={reenterpassword} secureTextEntry={true} />
          </View>
        </ScrollView>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default connectAuth(ResetPasswordScreen);
