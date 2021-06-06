import React, { useState, useEffect, } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements';
import { useLayoutEffect } from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connectAuth } from '../../Redux/connects';
import styles from './styles';
import FeedAPI from '../../Services/feeds';
import { useIsFocused } from "@react-navigation/native";

const DiscoverViewScreen = (props) => {
  const { user } = props;
  const isFocused = useIsFocused();
  const [userdata, setUserData] = useState({
    avatar: 'https://faces/twitter/ladylexy/128.jpg',
    firstname: 'firstname',
    lastname: 'lastname'
  });
  const [myFollowing, setMyFollowing] = []
  const [myCircle, setMyCircle] = []

  useLayoutEffect(() => {

    props.navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "Discover",
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate('discover')} style={{ marginLeft: 10 }}>
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
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isFollowed, setIsFollowed] = useState(false);
  const [isCircle, setIsCircle] = useState(false);
  const [statusFollowing, setStatusFollowing] = useState("Follow")
  const [statusCircle, setStatusCircle] = useState("Join Circle")

  useEffect(() => {
    FeedAPI.getUserdata(props.route.params.username).then(res => {
      setUserData(res.data);
    }, e => {
    })
    FeedAPI.getFollowing().then(res => {
      // setMyFollowing(res.data);
      for (i in res.data) {
        if (res.data[i].following == props.route.params.username) {
          setStatusFollowing("Following");
          break;
        }
      }
    }, e => {
    })
    FeedAPI.getCircle().then(res => {
      for (i in res.data) {
        if (res.data[i].circle == props.route.params.username) {
          if (res.data[i].approved == null) {
            setStatusCircle("Pending Circle");
          } else if (res.data[i].approved == false) {
            setStatusCircle("Join Circle");
          } else if (res.data[i].approved == true) {
            setStatusCircle("Approved");
          }
          break;
        }
      }
    }, e => {
    })
  }, [isFocused]);




  const onClickFollowBtn = (data) => {
    if (statusFollowing == "Follow") {
      FeedAPI.createFollow(data)
        .then(res => {
          setIsFollowed(!isFollowed);
          setStatusFollowing("Following");

        }).catch(err => {
        })
    } else {
      FeedAPI.deleteFollow(data)
        .then(res => {
          setStatusFollowing("Follow");
        }).catch(err => {
        })
    }
  }
  const onClickCircleBtn = (data) => {
    if (statusCircle == "Join Circle") {
      FeedAPI.createCircle(data)
        .then(res => {
          // setIsCircle(true);
          setStatusCircle("Pending Circle")
        }).catch(err => {
        })
    }
  }
  const checkFollow = (username, following) => {
    let checked = false;
    for (i in following) {
      if (following[i].following == user.username) {
        checked = true;
        break;
      }
    }
    return checked
  }
  return (
    <SafeAreaView >
      <View style={[styles.avatar, styles.container]}>
        <Avatar size="xlarge" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={1} rounded
          source={{ uri: userdata.avatar || 'https://faces/twitter/ladylexy/128.jpg', }} />
        <TouchableOpacity onPress={() => {
          onClickCircleBtn(props.route.params.username)
        }} style={styles.roundButton1}>
          <Text style={styles.text_3}>{statusCircle == "Approved" ? '' : statusCircle}</Text>
          {
            statusCircle == "Approved" &&
            <View style={styles.lock}>
              <Ionicons size={32} name='lock' color="#800080" />
            </View>
          }
        </TouchableOpacity>
      </View>
      <View style={styles.alignSelf}>
        <Text style={styles.name}>{userdata.firstname} {userdata.lastname}</Text>
        <Text style={[styles.btnLogin1, styles.text_4]} onPress={() => {
          onClickFollowBtn(props.route.params.username)
        }}>{statusFollowing}</Text>
      </View>
      <View>
        <Text style={styles.name2}>About Me</Text>
        <Text style={styles.name3}>She is from Armenia, Her name is Manana Asatrain and the ages is 31.</Text>
      </View>
      <View style={styles.line1}>
        <Text style={styles.name1} >Followers</Text>
        <Text style={styles.number}>  25  </Text>
        <Text style={styles.name1} >Posts</Text>
        <Text style={styles.number}>  25  </Text>
      </View>
    </SafeAreaView>
  );
};

export default connectAuth(DiscoverViewScreen);
