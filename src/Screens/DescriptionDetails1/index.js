import React, { useEffect } from 'react';
import { TouchableOpacity, ScrollView, Text, TextInput, Image, View, Button } from 'react-native';
import { useRef, useLayoutEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Feather';
import { ListItem, Avatar } from 'react-native-elements';
import { connectAuth, connectGeneralStatesToProps, connectAuthDescription } from '../../Redux/connects';
import styles from './styles';
import FeedsAPI from '../../Services/feeds';
import FeedAPI from '../../Services/feeds';

const DescriptionDetails1Screen = (props, { created_at }) => {
  const { user } = props;
  const { post_id, description, attachments } = props.route.params;
  const [desText, setDesText] = useState("");
  const [comments, setComments] = useState([]);
  const [editCommentTxt, setEditCommentTxt] = useState('');
  const [editReplyTxt, setEditReplyTxt] = useState('');
  const [isEdit, setIsEdit] = useState([]);
  const [isReplyEdit, setIsReplyEdit] = useState([]);
  const [isReplyCreate, setIsReplyCreate] = useState([]);

  useEffect(() => {
    FeedsAPI.getPostDetail(post_id)
      .then(res => {
        const { avatar, firstname, lastname, username } = res.data;
        const arrUsers = res.data.users.map(u => u);
        arrUsers.push({
          avatar, firstname, lastname, username
        });
        var tempComments = res.data.comments.map(c => {
          const curUser = arrUsers.find(user => user.username === c.username);
          return {
            ...c,
            avatar: curUser.avatar,
            firstname: curUser.firstname,
            lastname: curUser.lastname,
          };
        });
        var tempReplies = res.data.replies;
        tempComments.sort((a, b) => a.created_at < b.created_at);

        for (let i = 0; i < tempComments.length; i++) {
          var temp = tempReplies.map(r => {
            const curUser = arrUsers.find(user => user.username === r.username);
            return {
              ...r,
              avatar: curUser.avatar,
              firstname: curUser.firstname,
              lastname: curUser.lastname,
            };
          });
          var filterValue = temp.filter(rep => rep.comment_id === tempComments[i].id);
          filterValue.sort((a, b) => a.created_at < b.created_at);
          tempComments[i]['replies'] = filterValue;
        }
        setComments(tempComments);

        // set isReplyEdit
        var tmpRplEdt = [], tmpRplCrt = [];
        tempComments.forEach(tmpCmt => {
          const repliesInComment = [];
          tmpCmt.replies.forEach(element => {
            repliesInComment.push(false);
          });
          tmpRplEdt.push(repliesInComment);
          tmpRplCrt.push(false);
        });

        console.log('tmpRplEdt', tmpRplEdt);
        setIsReplyCreate(tmpRplCrt);
        setIsReplyEdit(tmpRplEdt);
      }).catch(err => {
        console.log('error', err)
      })
  }, []);

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


  const commentDelete = (index) => {
    FeedAPI.deleteComment(comments[index].id)
      .then(res => {
        const temp = [...comments];
        temp.splice(index, 1);
        setComments(temp);
      }).catch(err => {
        console.log('error', err)
      })
  }

  const replyDelete = (commentIndex, replyIndex) => {
    FeedAPI.deleteReply(comments[commentIndex].replies[replyIndex].id)
      .then(res => {
        const temp = comments.map((comment, ci) => {
          return ci !== commentIndex ? comment : ({
            ...comment,
            replies: comment.replies.filter((reply, ri) => ri !== replyIndex)
          });
        });
        setComments(temp);
      }).catch(err => {
        console.log('error', err)
      })
  }

  const commentReply = (index) => {
    const temp = [...isReplyCreate];
    temp.map(tmp => {
      if (tmp) tmp = false;
    });
    temp[index] = true;
    setIsReplyCreate(temp);
    setEditReplyTxt('');
  }

  const cancelReply = index => {
    const temp = [...isReplyCreate];
    temp[index] = false;
    setIsReplyCreate(temp);
    setEditReplyTxt('');
  }

  const setComment = data => {
    setDesText("");
    FeedsAPI.createComment({
      post_id: post_id,
      content: data
    }).then(ress => {
      console.log('posted data',ress.data)

      FeedAPI.getUserdata(ress.data.username).then(res => {
        console.log('userdata',res.data)
        
        console.log(comments)
        
        const temp = comments.map(c => c);
        temp.push({
          ...ress.data,
          firstname:res.data.firstname,
          lastname:res.data.lastname,
          avatar:res.data.avatar,
          
          // avatar: c.avatar, name: `${c.firstname} ${c.lastname}`,
          replies: []
        });
        console.log(temp)
        setComments(temp);
        setIsEdit(isEdit.concat(false));


      }).catch(err=>{
        console.log(err)
      })

      console.log(comments)

    }).catch(err => {
      console.log('error', err)
    });
  }

  const createReply = index => {
    FeedAPI.createReply({
      comment_id: comments[index].id,
      content: editReplyTxt
    }).then(res => {
      setIsReplyCreate(isReplyCreate.map(r => false));
      setEditReplyTxt('');

      const temp1 = comments.map(c => c);
      temp1[index].replies.push({
        ...res.data,
        avatar: user.avatar,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname
      });
      setComments(temp1);
      setIsReplyEdit(isReplyEdit.map((r, ri) => ri !== index ? r : r.concat([false])))
    }).catch(err => {
      console.log('error', err);
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
      FeedAPI.updateComment({ comment_id: comments[index].id, content: editCommentTxt })
        .then(res => {
          const temp = [...comments];
          temp[index].content = editCommentTxt;
          setComments(temp);
        }).catch(err => {
          console.log('error', err)
        })
    }
  }

  const replyEdit = (commentIndex, replyIndex) => {
    if (!isReplyEdit || !isReplyEdit[commentIndex] || !isReplyEdit[commentIndex][replyIndex]) {
      setIsReplyEdit(isReplyEdit.map((c, ci) => ci !== commentIndex ? c : c.map((r, ri) => ri !== replyIndex ? false : true)));
      setEditReplyTxt(comments[commentIndex].replies[replyIndex].content);
    } else {
      setIsReplyEdit(isReplyEdit.map(a => a.map(b => false)));
      FeedAPI.updateReply({
        reply_id: comments[commentIndex].replies[replyIndex].id,
        content: editReplyTxt
      }).then(res => {
        const temp = comments.map(c => c);
        temp[commentIndex].replies[replyIndex].content = editReplyTxt;
        setComments(temp);
        setEditReplyTxt('');
      }).catch(err => {
        console.log('error', err);
      })
    }
  }

  return (

    <View style={styles.MainContainer}>
      <ScrollView style={styles.commentsContainer}>
        <View>
          <Text style={styles.input}> {description}</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 23 }} >
          {
            attachments.includes(',data') ? attachments.split(',data').map((item, index) => (
              <Image style={styles.tinyLogo} source={{ uri: index === 0 ? item : `data${item}` }} key={index} />
            )) : (
              <Image style={styles.tinyLogo1} source={{ uri: attachments }} />
            )
          }
          {
            comments.map((comment, index) => (
              <View key={index}>
                <View style={styles.comment}>
                  <TouchableOpacity style={styles.Avatar} >
                    <Avatar size="small" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={0.1} rounded
                      source={{ uri: comment.avatar || 'https://faces/twitter/ladylexy/128.jpg', }} />
                  </TouchableOpacity>
                  <Text style={styles.name}> {comment.firstname} {comment.lastname}  </Text>
                  <View style={styles.time}>
                    <Text>{comment.created_at}</Text>
                  </View>
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
                  <TouchableOpacity style={styles.edit} onPress={() => commentReply(index)}>
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
                {comment.replies.map((reply, _index) => (
                  <View key={_index}>
                    <View style={styles.reply}>
                      <TouchableOpacity style={styles.Avatar} >
                        <Avatar size="small" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={0.1} rounded
                          source={{ uri: reply.avatar || 'https://faces/twitter/ladylexy/128.jpg', }} />
                      </TouchableOpacity>
                      <Text style={styles.name}>  {reply.firstname} {reply.lastname} </Text>
                      <View style={styles.time}>
                        <Text>{reply.created_at}</Text>
                      </View>
                    </View>
                    <View style={styles.reply1}>
                      {isReplyEdit && isReplyEdit[index] && isReplyEdit[index][_index] ?
                        // <View style={styles.input2}>
                        <TextInput multiline={true} placeholder="Please...." numberOfLines={0} style={styles.input3} 
                          onChangeText={x => setEditReplyTxt(x)} value={editReplyTxt} />
                        // </View>
                        :
                        <Text style={styles.input2} key={reply.id}>{reply.content}</Text>
                      }
                      {isReplyEdit && isReplyEdit[index] && isReplyEdit[index][_index] ?
                        <TouchableOpacity style={styles.edit} onPress={() => replyEdit(index, _index)}>
                          <Ionicons name='check-circle' size={17} color='blue' />
                        </TouchableOpacity> :
                        <TouchableOpacity style={styles.edit} onPress={() => replyEdit(index, _index)}>
                          <Ionicons name='edit' size={17} color='#800080' />
                        </TouchableOpacity>
                      }
                      <TouchableOpacity style={styles.delete} onPress={() => replyDelete(index, _index)}>
                        <Ionicons name='trash-2' size={17} color='#800080' />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
                {isReplyCreate[index] && (
                  <View style={styles.reply1}>
                    <TextInput multiline={true} placeholder="Please...." numberOfLines={0} style={styles.input3}
                      onChangeText={setEditReplyTxt} value={editReplyTxt} />
                    <TouchableOpacity style={styles.edit} onPress={() => createReply(index)}>
                      <Ionicons name='check-square' size={17} color='#800080' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.edit} onPress={() => cancelReply(index)}>
                      <Ionicons name='x-square' size={17} color='#800080' />
                    </TouchableOpacity>
                  </View>
                )}
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


export default connectAuth(connectAuthDescription(connectGeneralStatesToProps(DescriptionDetails1Screen)));
