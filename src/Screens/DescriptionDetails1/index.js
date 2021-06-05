import React, { useEffect } from 'react';
import { TouchableOpacity, ScrollView, Text, TextInput, Image, View, Button } from 'react-native';
import { useRef, useLayoutEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Feather';
import { ListItem, Avatar } from 'react-native-elements';
import { connectAuth, connectGeneralStatesToProps, connectAuthDescription } from '../../Redux/connects';
import styles from './styles';
import FeedsAPI from '../../Services/feeds';

const DescriptionDetails1Screen = (props) => {
  const { user } = props;
  const [desText, setDesText] = useState("");
  const [comments, setComments] = useState([]);
  useLayoutEffect(() => {

    props.navigation.setOptions({

      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "Post & Comments",
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate('G4LT')} style={{ marginLeft: 10 }}>
          <Ionicons name='chevron-left' size={24} color='Black' />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={styles.Avatar} >
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
  });

  const setComment = data1 => {
    const temp = [...comments];
    temp.push(data1);
    setDesText("");
    setComments(temp, []);
  }

  return (

    <View style={styles.MainContainer}>
      <ScrollView>
        <View>
          <Text style={styles.input}> {props.route.params.description}</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 23 }} >
          {
            props.route.params.attachments.includes(',data') ? props.route.params.attachments.split(',data').map((item, index) => (
              <Image style={styles.tinyLogo} source={{ uri: index === 0 ? item : `data${item}` }} />
            )) : (
              <Image style={styles.tinyLogo} source={{ uri: props.route.params.attachments }} />
            )
          }
          {
            comments.map((comment, index) => (
              <Text style={styles.input2} key={comment}>{comments}</Text>
            ))
          }
        </View>
      </ScrollView>
      <View style={styles.line}  >
        <View style={styles.input1}>
          <TextInput multiline={true} numberOfLines={4} placeholder="Start typing..."
            onChangeText={x => setDesText(x)} value={desText} />
        </View>
        <View style={styles.icon1}>
          <Ionicons name='plus-circle' size={27} color='#800080' />
        </View>
        <View style={styles.icon2}>
          <Ionicons name='send' size={27} onPress={() => setComment(desText)} color='#800080' />
        </View>
      </View>
    </View>
  );
};


export default connectAuth(connectAuthDescription(connectGeneralStatesToProps(DescriptionDetails1Screen)));
