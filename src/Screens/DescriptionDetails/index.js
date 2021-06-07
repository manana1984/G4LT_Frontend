import React, { useEffect } from 'react';
import { TouchableOpacity, ScrollView, Text, TextInput, Image, View, Button } from 'react-native';
import { useRef, useLayoutEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Feather';
import { ListItem, Avatar } from 'react-native-elements';
import { connectAuth, connectGeneralStatesToProps, connectAuthDescription } from '../../Redux/connects';
import styles from './styles';
import FeedsAPI from '../../Services/feeds';

const DescriptionDetailsScreen = (props, { created_at }) => {
  const { user } = props;
  const [desText, setDesText] = useState("");
  const [comments, setComments] = useState([]);
  const [editCommentTxt, setEditCommentTxt] = useState('');
  const [isEdit, setIsEdit] = useState([]);
  useLayoutEffect(() => {

    props.navigation.setOptions({

      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "Post & Comments",
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate('discover')} style={{ marginLeft: 10 }}>
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

  const setComment = data => {
    const temp = [...comments];
    temp.push(data);
    setDesText("");
    setComments(temp);
    setIsEdit(isEdit.concat(false));
  }

  const commentDelete = (index) => {
    const temp = [...comments];
    temp.splice(index, 1);
    setComments(temp);
  }

  const commentEdit = (index) => {
    if (!isEdit[index]) {
      const temp = [...isEdit];
      temp[index] = !isEdit[index];
      setIsEdit(temp);
      setEditCommentTxt(comments[index]);
    }
    else {
      let tempEdit = [...isEdit];
      tempEdit[index] = !isEdit[index];
      setIsEdit(tempEdit);
      const temp = [...comments];
      temp[index] = editCommentTxt;
      setComments(temp);
    }
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
              <Image style={styles.tinyLogo1} source={{ uri: props.route.params.attachments }} />
            )
          }
          {
            comments.map((comment, index) => (
              <View>
                <View style={styles.comment}>
                  <TouchableOpacity style={styles.Avatar} >
                    <Avatar size="small" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={0.1} rounded
                      source={{ uri: user.avatar || 'https://faces/twitter/ladylexy/128.jpg', }} />
                  </TouchableOpacity>
                  <Text style={styles.name}> {user.firstname} {user.lastname}  </Text>
                  <View>{created_at}</View>
                </View>
                <View style={styles.comment1}>
                  {isEdit[index] ?
                    // <View style={styles.input2}>
                      <TextInput multiline={true} numberOfLines={0} style={styles.input3}
                        onChangeText={x => setEditCommentTxt(x)} value={editCommentTxt} />
                    // </View>
                    :
                    <Text style={styles.input2} key={comment}>{comment}</Text>
                  }
                  {isEdit[index] ?
                    <TouchableOpacity style={styles.edit} onPress={() => commentEdit(index)}>
                      <Ionicons name='check' size={17} color='#800080' />
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.edit} onPress={() => commentEdit(index)}>
                      <Ionicons name='edit' size={17} color='#800080' />
                    </TouchableOpacity>
                  }
                  <TouchableOpacity style={styles.delete} onPress={() => commentDelete(index)}>
                    <Ionicons name='delete' size={17} color='#800080' />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          }
        </View>
      </ScrollView>
      <View style={styles.line}  >
        <View style={styles.input1}>
          <TextInput multiline={true} numberOfLines={4} placeholder="Start typing..."
            onChangeText={x => {
              setDesText(x);
              let temp = [];
              for (let i = 0; i < isEdit.length; i++) {
                temp.push(false);
              }
              setIsEdit(temp);
            }} value={desText} />
        </View>
        <View style={styles.icon1}>
          {/* <Ionicons name='plus-circle' size={27} color='#800080' /> */}
        </View>
        <View style={styles.icon2}>
          <Ionicons name='send' size={27} onPress={() => setComment(desText)} color='#800080' />
        </View>
      </View>
    </View>
  );
};


export default connectAuth(connectAuthDescription(connectGeneralStatesToProps(DescriptionDetailsScreen)));
