import React, { useState, useEffect, } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements';
import { useLayoutEffect } from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Feeds from '../../Services/feeds';

const list = [
]

// let temp = [];
const FollowingScreen = ({ navigation }) => {

  const [followings, setFollowings] = useState(list);

  useEffect(() => {
    let temp = []
    Feeds.getFollowing().then(res => {
      // alert(JSON.stringify(res.data));

      res.data.map(d=>{
        temp.push(Feeds.getUserdata(d.following));
        Promise.all(temp).then((values) => {
            const t = values.map(v=>({name:v.data.firstname  + v.data.lastname, avatar_url: v.data.avatar,subtitle:v.data.about_me}))
            setFollowings(t)
            // console.log(values);
        });
        // Feeds.getUserdata(d.following).then(r=>{
        //   // alert(JSON.stringify(r.data))
        //   const {firstname, lastname, avatar, about_me} = r.data
        //   temp.push({name:firstname+ lastname, avatar_url: avatar,subtitle:about_me })
        //   setFollowings(temp)
        // })
      })

    })
  }, []);

  useLayoutEffect(() => {
   
    navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "Following",
      headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('profile') } style={{ marginLeft: 10 }}>
        <Ionicons name='chevron-left' size={24} color='Black'/>
      </TouchableOpacity>
      ),
      headerRight: () => (
      <TouchableOpacity  style={{ marginRight: 10 }} >
        <Ionicons name='search' size={24} color='Black'/>
      </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "white",
        borderBottomColor: "black",
      }
      
    });
  }, []);
  return (
    <View>

      {
        followings.map((l, i) => (
          <ListItem key={i} bottomDivider >
            <Avatar size="medium" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={1} rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
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

export default FollowingScreen;
