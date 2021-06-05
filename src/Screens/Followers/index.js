import React, { useState, useEffect, } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements';
import { useLayoutEffect } from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const FollowersScreen = ({ navigation }) => {

  useLayoutEffect(() => {
   
    navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "Followers",
      headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('G4LT') } style={{ marginLeft: 10 }}>
        <Ionicons name='chevron-left' size={24} color='Black'/>
      </TouchableOpacity>
      ),
      headerRight: () => (
      <TouchableOpacity onPress={() => alert('cancel') } style={{ marginRight: 10 }} >
        <Ionicons name='search' size={24} color='Black'/>
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

  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: '../../Assets/Images/add.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Chris Jackson',
      avatar_url: '../../Assets/Images/add.png',
      subtitle: 'Vice Chairman'
    }
  ]
  return (
    <View>

      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider >
            <Avatar size="medium" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={1} rounded source={{ uri: 'https://faces/twitter/ladylexy/128.jpg', }} />
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

export default FollowersScreen;
