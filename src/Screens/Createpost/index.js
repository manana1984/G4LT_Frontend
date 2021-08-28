import React, { useState, useRef, useEffect } from 'react';
import { Text, TextInput, Image, TouchableOpacity, View, ScrollView, PermissionsAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'react-native-image-picker';
import ActionSheet from 'react-native-actionsheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Overlay } from 'react-native-elements';
import { useLayoutEffect } from 'react';
import styles from './styles';
import FeedsAPI from '../../Services/feeds';
import { connectAuth, connectGeneralStatesToProps, connectAuthDescription } from '../../Redux/connects';
import { Alert, Modal, StyleSheet, Pressable } from "react-native";


const CreatepostScreen = (props, {navigation}) => {
  const { user, route, setLocation, location, setDescription } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const [attachments, setAttachments] = useState([]);
  const [files, setFiles] = useState([]);
  const [desText, setDesText] = useState('');

  const photoUploadDialogRef = useRef();

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "Create Post",
      headerLeft: () => (
        <TouchableOpacity onPress={postDelete} >
          <Text style={styles.headleft}>Cancel</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={onClickPostBtn} >
          <Text style={styles.headright}>Post</Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "white",
        borderBottomColor: "black",
      }
    });
  });


  useEffect(() => {
    setDesText('');
    setAttachments([]);
    setLocation('')

  },[]);


  useEffect(() => {
  }, [location]);

  const onPhotoUploadDialogDone = (index) => {
    // !index && launchCamera();
    !index && requestCameraPermission();
    index === 1 && launchImagePicker();
  };

  const onAddMediaPress = () => {
    photoUploadDialogRef.current.show();
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
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Image Picker Migration
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
        const imageFile = {
          uri: `data:${response.type};base64,${response.base64}`,
          name: response.fileName,
          type: response.type
        };
        setFiles(prevState => [...prevState, response]);
        setAttachments(attachments.concat([imageFile]));
      }
    });
  };

  const launchImagePicker = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images'
      },
      // noData: true,
      includeBase64: true
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
        alert(response.customButton);
      } else {
        const imageFile = {
          uri: `data:${response.type};base64,${response.base64}`,
          name: response.fileName,
          type: response.type
        };
        setFiles(prevState => [...prevState, response]);
        setAttachments(attachments.concat([imageFile]));
      }
    });
  };

  const renderFileUri = () => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {attachments.map((attachment, ai) => <Image key={ai} source={attachment} style={styles.image} />)}
        <TouchableOpacity onPress={onAddMediaPress} >
          <Image source={require('../../Assets/Images/plus.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  };

  const postDelete = () => {
    setDesText('');
    setAttachments([]);
    setLocation('')
  }

  const onClickPostBtn = () => {
    // setModalVisible(true);
    const username = user.username;
    if (!username) { }
    if (!desText) {
      alert('Please input description!');
      return 
    }
    if (!location) {
    }
    if (!attachments.length) {
    }
    setVisible(!visible);
  }

  const postToCircle = () => {
    const username = user.username;
    if (!username) { }
    if (!desText) {
      alert('Please input description!');
    }
    if (!location) {
    }
    if (!attachments.length) {
      alert('Please input attachments!');
    }
    setDescription({ description: desText, created_at: (new Date()).toDateString(), images: attachments });

    const body = {
      description: desText,
      location: location,
      attachments: attachments.map(a => String(a.uri).split(',')[1])
    };
    FeedsAPI.circle_post(body).then(response => {
      setVisible(!visible);
      setModalVisible(true)
      props.navigation.navigate('firstPage');
    }, e => {
      console.log('Circle post error: ----------------- ', e)
    });
  }

  const postToPublic = () => {
    const username = user.username;
    if (!username) { }
    if (!desText) {
      alert('Please input description!');
    }
    if (!location) {
    }
    if (!attachments.length) {
    }
    setDescription({ description: desText, created_at: (new Date()).toDateString(), images: attachments });

    var params = {
      location: location,
      description: desText,
      is_public: true,
      attachments: attachments.map(a => String(a.uri).split(',')[1])
    };
    console.log(params)
    FeedsAPI.public_post(params).then(response => {
      setVisible(!visible);
      setModalVisible(true);
      props.navigation.navigate('firstPage');
    }, e => {
      
      console.log('public post error: ----------------- ', e)
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.Avatar}>
          <Avatar size="large" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={0.1} rounded source={{ uri: user.avatar || 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }} />
          <Text style={styles.text_2}>{user.firstname} {user.lastname}</Text>
        </View >
        <View style={styles.line}>
          <TextInput multiline={true} numberOfLines={4} placeholder="Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor."
            style={styles.input} onChangeText={x => setDesText(x)} value={desText} />
          <Ionicons name='pencil' size={27} color='blue' style={styles.pensil} />
        </View>
        {renderFileUri()}
        <View style={[styles.btnsend, styles.btnLogin]} >
          <TouchableOpacity onPress={() => props.navigation.navigate('map')}>
            <Ionicons name='location' size={19} color='#800080' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('map')}>
            <Text style={styles.textWhite}>{location ? location : 'Please Select Location'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ActionSheet ref={photoUploadDialogRef} options={['Launch Camera', 'Open Photo Gallery', 'Cancel',]}
        cancelButtonIndex={2} onPress={onPhotoUploadDialogDone} />
      {/* <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible); }} style={{ width: 100, height: 100 }}> */}
        <View style={styles.centeredView}>
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={postToPublic}>
                <Text style={styles.textStyle}>Public Post</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={postToCircle}>
                <Text style={styles.textStyle}>Circle Post</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={() => setVisible(!visible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Overlay>
        </View>
      {/* </Modal> */}
    </SafeAreaView>
  );
};

export default connectAuth(connectGeneralStatesToProps(connectAuthDescription(CreatepostScreen)));
