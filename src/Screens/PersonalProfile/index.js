import React, { useEffect, useState, useRef } from 'react';
import { TouchableOpacity, TextInput, Text, ScrollView, View, PermissionsAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';
import ActionSheet from 'react-native-actionsheet';
import Toast from 'react-native-toast-message';

import styles from './styles';
import Http from '../../Services/http';
import { connectAuth } from '../../Redux/connects';


const PersonalProfileScreen = (props) => {
  const { user, updateUser } = props;

  useEffect(() => {
    props.navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "Profile",
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')} style={{ marginLeft: 10 }}>
          <Ionicons name='chevron-left' size={24} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} >
          <Text style={{ color: '#800080' }} onPress={() => profile()}>Done</Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "white",
        borderBottomColor: "black",
      }
    });
  });

  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [username, setUsername] = useState(user.username);
  const [number, setNumber] = useState(user.phone_number);
  const [content, setContent] = useState(user.content);
  const [alert, setAlert] = useState('');
  const [picture, setPicture] = useState(user.avatar || 'https://faces/twitter/ladylexy/128.jpg');

  const onPhotoUploadDialogDone = (index) => {
    !index && requestCameraPermission();
    index === 1 && launchImagePicker();
  };
  
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message: "App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera();
      } else if(granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchImageLibrary();
      }
       else {
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const profile = () => {
    if (firstName == '') {
      setAlert("Please input firstname");
      return
    }
    if (lastName == '') {
      setAlert("Please input lastname");
      return
    }
    
    if (number == '') {
      setAlert("please input phone number");
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
    if (content == '') {
      setAlert("Please input content");
      return
    }
    if (picture == ''){
      setAlert("please input Avatar");
      return
    }

    if (firstName === user.firstname && lastName === user.lastname && number === user.phone_number && picture === user.avatar && content === user.content) {
      Toast.show({
        type: 'error',
        text1: 'Sorry',
        text2: 'Sorry, nothing changed. 😛'
      });
      return;
    }

    setAlert("");

    Http.profile(firstName, lastName, username, number, content, picture).then(response => {
      props.updateUser({
        ...user,
        firstname: firstName,
        lastname: lastName,
        username: username,
        phone_number: number,
        picture: picture,
        about_me: content,
      });
      Toast.show({
        text1: 'Congratulation',
        text2: 'You have successfully updated profile. 👍',
        onPress: () => { props.navigation.navigate('profile'); }
      });
    }, e => {
      console.log('error', e);
    });
  }

  const photoUploadDialogRef = useRef();

  const onAddMediaPress = () => {
    photoUploadDialogRef.current.show();
  };

  const getBlob = async (uri) => {
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  };

  const launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      includeBase64: true
    };
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
        alert(response.customButton);
      } else {
        const imageData = `data:${response.type};base64,${response.base64}`;
        Http.uploadImage(username, imageData).then(rrr => {
          updateUser({ ...user, avatar: imageData });
        }, e => console.log(e));
        convertImage(response.uri);
        setPicture(response.uri);
      }
    });
  };
  const launchImagePicker = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      includeBase64: true
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
        alert(response.customButton);
      } else {
        const imageData = `data:${response.type};base64,${response.base64}`;
        Http.uploadImage(username, imageData).then(rrr => {
          updateUser({ ...user, avatar: imageData });
        }, e => console.log(e));
        convertImage(response.uri);
        setPicture(response.uri);
      }
    });
  };
  const convertImage = async (url) => {      }
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <TouchableOpacity style={styles.avatar} >
          <Avatar size="large" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={1} rounded onPress={onAddMediaPress}
            source={{ uri: picture }} />
        </TouchableOpacity>
      </View>
      <View style={styles.alignSelf}>
        <Text style={styles.name}>{firstName} {lastName}</Text>
      </View>
      <View style={styles.profile}>
        <ScrollView >
          <Text style={styles.alert}>{alert}</Text>
          <Text style={styles.text}>Name *</Text>
          <View style={styles.view}>
            <TextInput placeholder="First Name"  onChangeText={x => setFirstName(x)} value={firstName} />
          </View>
          <View style={styles.view}>
            <TextInput placeholder="Last Name"  onChangeText={x => setLastName(x)} value={lastName} />
          </View>
          <Text style={styles.text}>UserName *</Text>
          <View style={styles.view}>
            <TextInput placeholder="User Name"  onChangeText={x => setUsername(x)} value={username} editable={false} />
          </View>
          <Text style={styles.text}>Phone Number *</Text>
          <View style={styles.view}>
            <TextInput placeholder="Phone Number"  onChangeText={x => setNumber(x)} value={number} />
          </View>
          <Text style={styles.text}>About Me *</Text>
          <View style={styles.view1}>
            <TextInput placeholder="Content"  multiline = {true} numberOfLines = {4} onChangeText={x => setContent(x)} value={content} />
          </View>
        </ScrollView>
      </View>
      <ActionSheet
        ref={photoUploadDialogRef}
        options={[
          'Launch Camera',
          'Open Photo Gallery',
          'Cancel',
        ]}
        cancelButtonIndex={2}
        onPress={onPhotoUploadDialogDone}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default connectAuth(PersonalProfileScreen);
