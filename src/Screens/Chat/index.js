import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { connectAuth } from '../../Redux/connects';
import FeedAPI from '../../Services/feeds';
import styles from './styles';
import { useIsFocused } from "@react-navigation/native";

const ChatScreen = (props, { navigation }) => {

  const { user } = props;
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [requestUsers, setRequestUsers] = useState([]);
  const isFocused = useIsFocused();
  const [callAgain, setCallAgain] = useState(true)


  useEffect(() => {

    FeedAPI.getRequestUsers().then(res => {

      setRequestUsers(res.data);

    }).catch(err => {

    });

    FeedAPI.getJoinedUsers().then(res => {
      setJoinedUsers(res.data);


    }).catch(err => {
    });
  }, [isFocused, callAgain]);


  useLayoutEffect(() => {

    props.navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "CHAT",
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate('G4LT')} style={{ marginLeft: 10 }}>
          <Ionicons name='chevron-left' size={24} color='Black' />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => alert('cancel')} style={{ marginRight: 10 }} >
          <Avatar size="small" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={0.1} rounded
            source={{ uri: user.avatar || 'https://faces/twitter/ladylexy/128.jpg', }}
            onPress={() => props.navigation.navigate('profile')} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "white",
        borderBottomColor: "black",
      }

    });
  }, []);

  const onClickAccept = (username) => {
    FeedAPI.approvedUser(username).then(res => {
      setCallAgain(!callAgain);
    }).catch(err => {
    })
  }
  const onClickDecline = (username) => {
    FeedAPI.decliendUser(username).then(res => {
      setCallAgain(!callAgain);
    }).catch(err => {
    })
  }
  return (
    <View>

      {
        requestUsers.map((user, i) => (
          <ListItem key={i} bottomDivider onPress={() => props.navigation.navigate('Chatting')} >
            <Avatar size="medium" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={1} rounded
              source={{ uri: user.avatar }} />
            <ListItem.Content>
              <ListItem.Title style={styles.text1}>{user.firstname} {user.lastname}</ListItem.Title>
              <Text>Wants to join Circle</Text>
              <TouchableOpacity style={styles.button}>
                < TouchableOpacity style={styles.btnsend} onPress={() => onClickAccept(user.username)}>
                  <Text style={styles.btnLogin}>Accept</Text>
                </TouchableOpacity>
                < TouchableOpacity style={styles.btnsend1} onPress={() => onClickDecline(user.username)}>
                  <Text style={styles.btnLogin1}>Decline</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </ListItem.Content>
          </ListItem>

        ))
      }
      {
        joinedUsers.map((user, i) => (
          <ListItem key={i} bottomDivider onPress={() => props.navigation.navigate('Chatting')}>
            <Avatar size="medium" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={1} rounded
              source={{ uri: user.avatar }} />
            <ListItem.Content>
              <ListItem.Title style={styles.text1}>{user.firstname} {user.lastname}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View >
  )
}


const custom_styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
    color: '#4f603c'
  }
})

export default connectAuth(ChatScreen);
