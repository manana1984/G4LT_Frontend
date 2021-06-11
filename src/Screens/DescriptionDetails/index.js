import React, { useEffect } from 'react';
import { TouchableOpacity, ScrollView, Text, TextInput, Image, View, Button } from 'react-native';
import { useRef, useLayoutEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Feather';
import { ListItem, Avatar } from 'react-native-elements';
import { connectAuth, connectGeneralStatesToProps, connectAuthDescription } from '../../Redux/connects';
import styles from './styles';
import FeedsAPI from '../../Services/feeds';
import FeedAPI from '../../Services/feeds';

const DescriptionDetailsScreen = (props, { created_at }) => {
  const { user } = props;
  const { post_id, description, attachments } = props.route.params;
  const [desText, setDesText] = useState("");
  const [comments, setComments] = useState([]);
  const [editCommentTxt, setEditCommentTxt] = useState('');
  const [isEdit, setIsEdit] = useState([]);

  useEffect(() => {
    FeedsAPI.getPostDetail(post_id)
      .then(res => {
        var tempComments = res.data.comments;
        var tempReplies = res.data.replies;
        tempComments.sort(function (a, b) {
          return a.created_at < b.created_at;
        });

        for (let i = 0; i < tempComments.length; i++) {
          var temp = [...tempReplies];
          var filterValue = temp.filter(rep => rep.comment_id === tempComments[i].id);
          filterValue.sort((a, b) => a.created_at < b.created_at);
          tempComments[i]['replies'] = filterValue;
        }
        console.log(tempComments);
        setComments(tempComments);
      }).catch(err => {
        console.log('error', err)
      })
  }, []);

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
    setDesText("");
    FeedsAPI.createComment(JSON.stringify({ post_id: post_id, content: data }))
      .then(res => {
        const temp = [...comments];
        temp.push(res.data);
        setComments(temp);
        setIsEdit(isEdit.concat(false));
      }).catch(err => {
        console.log('error', err)
      });
  }

  const commentDelete = (index) => {
    // console.log('comment_id', comments[index].id);
    FeedAPI.deleteComment(comments[index].id)
      .then(res => {
        const temp = [...comments];
        temp.splice(index, 1);
        setComments(temp);
      }).catch(err => {
        console.log('error', err)
      })
  }

  const commentEdit = (index) => {
    if (!isEdit[index]) {
      const temp = [...isEdit];
      let i = temp.indexOf(true);
      if (i > -1) temp[i] = false;
      temp[index] = true;
      setIsEdit(temp);
      setEditCommentTxt(comments[index].content);
    }
    else {
      let tempEdit = [...isEdit];
      tempEdit[index] = false;
      setIsEdit(tempEdit);
      FeedAPI.updateComment(JSON.stringify({ comment_id: comments[index].id, content: editCommentTxt }))
        .then(res => {
          const temp = [...comments];
          temp[index].content = editCommentTxt;
          setComments(temp);
        }).catch(err => {
          console.log('error', err)
        })
    }
  }

  return (

    <View style={styles.MainContainer}>
      <ScrollView>
        <View>
          <Text style={styles.input}> {description}</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 23 }} >
          {
            attachments.includes(',data') ? attachments.split(',data').map((item, index) => (
              <Image style={styles.tinyLogo} source={{ uri: index === 0 ? item : `data${item}` }} />
            )) : (
              <Image style={styles.tinyLogo1} source={{ uri: attachments }} />
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
                    <Text style={styles.input2} key={comment.id}>{comment.content}</Text>
                  }
                  <TouchableOpacity style={styles.delete} onPress={() => commentDelete(index)}>
                    <Ionicons name='message-circle' size={17} color='#800080' />
                  </TouchableOpacity>
                  {isEdit[index] ?
                    <TouchableOpacity style={styles.edit} onPress={() => commentEdit(index)}>
                      <Ionicons name='check-circle' size={17} color='blue' />
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.edit} onPress={() => commentEdit(index)}>
                      <Ionicons name='edit' size={17} color='#800080' />
                    </TouchableOpacity>
                  }
                  <TouchableOpacity style={styles.delete} onPress={() => commentDelete(index)}>
                    <Ionicons name='trash-2' size={17} color='#800080' />
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
