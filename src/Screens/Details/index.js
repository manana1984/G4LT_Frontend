import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, ScrollView, Text, Image, View } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { useRef, useLayoutEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListItem, Avatar } from 'react-native-elements';
import { connectAuth, connectGeneralStatesToProps, connectAuthDescription } from '../../Redux/connects';
import ImageView from 'react-native-image-view';

import styles from './styles';
import { Dimensions } from 'react-native';
import FeedAPI from '../../Services/feeds';
import { set } from 'react-native-reanimated';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProfileComponent = ({ 
  avatar, currentusername, navigation, username, firstname, lastname, 
  likes, comments, description, location, attachments, created_at, selectImage, postIndex,
  setLikes, setComments, _id, status, id,
}) => {
  const goTonaviation = (username) => {
    if (username != currentusername) {
      navigation.navigate('DiscoverView1', { username: username })
    }
  }
  return <View>
    <View style={styles.Avatar1} >
      <Avatar size="medium" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={0.1} rounded onPress={() => goTonaviation(username)}
        source={{ uri: avatar || 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }} />
      <TouchableOpacity>
        <ListItem.Content style={styles.side} >
          <TouchableOpacity onPress={() => goTonaviation(username)}>
            <ListItem.Title style={styles.text}>{firstname} {lastname}</ListItem.Title>
          </TouchableOpacity>
          <View style={styles.time} >
            <ListItem.Subtitle style={styles.textWhite}>{created_at}</ListItem.Subtitle>
            <Ionicons name='location' size={19} color='#800080' />
            <Text style={{ color: '#800080', fontSize: 11 }}>{location}</Text>
          </View>
        </ListItem.Content>
      </TouchableOpacity>
    </View >
    <TouchableOpacity onPress={() => navigation.navigate('description1', { description: description, attachments: attachments, post_id: id })}>
      <View style={styles.line}>
        <Text style={styles.input}>{description}</Text>
      </View>
    </TouchableOpacity>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 23, marginBottom: 17 }} >
      {attachments.map((attachment, index) => (
        !!attachment ? <TouchableOpacity key={`profile-attachment-${index}`} onPress={() => selectImage(postIndex, index)}>
          <Image style={styles.tinyLogo} source={{ uri: attachment }} />
        </TouchableOpacity> : null
      ))}
    </View>
    <TouchableOpacity style={styles.Avatar2} >
      <TouchableOpacity onPress={() =>{setLikes(_id)}}>
        <Ionicons name='thumbs-up-sharp' color={status? '#800080': 'blue'} size={17} />
      </TouchableOpacity>
        <Text style={styles.math}>{likes}</Text>
      <TouchableOpacity style={styles.Avatar3} onPress={() =>{setComments(_id)}} >
        <Ionicons name='chatbubble-outline' color='#800080' size={17} />
        <Text style={styles.math}>{comments}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  </View>
};

const DetailsScreen = (props) => {
  const { user, navigation } = props;
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [images, setImages] = useState([]);

  const [posts, setPosts] = useState([]);
  const [commentStatus, setCommentStatus] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    FeedAPI.getHomePosts().then(res => {
      const newPosts = res.data.map(att => ({
        ...att,
        attachments: String(att.attachments || '').split(',')
      }));
      setPosts(newPosts);
      let temp = [];
      for(let i = 0; i< res.data.length; i++) {
        temp.push(true);
      }
      setCommentStatus(temp);
      console.log('res.data', res.data);
    }, e => {
    })
  }, [isFocused]);

  useLayoutEffect(() => {
    props.navigation.setOptions({

      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "Feed",
      headerLeft: () => (
        <TouchableOpacity  >
          <Text style={styles.headleft}>G4LT</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={styles.Avatar} >
          <Ionicons name='person-circle-outline' size={40} color='#d0d0d0' style={{ marginRight: 5 }} onPress={() => props.navigation.navigate('Following')} />
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

  const selectImage = (postIndex, imageIndex) => {
    if (!!posts[postIndex].attachments) {
      setImages(posts[postIndex].attachments.map((item, index) => ({
        source: { uri: item },
        title: `title-${postIndex}-${index}`,
        width: width * 1,
        height: height * 1
      })));
    }
    setSelectedImageIndex(imageIndex);
  };

  const setComments = (index) => {
    console.log('AAAAAA');
  }

  const setLikes = (index) => {
    const temp = [...commentStatus];
    temp[index] = !temp[index];
    setCommentStatus(temp);
    FeedAPI.setLikes(posts[index].id).then(res => {
      const cmt = [...posts];
      if(res.data.result ==='success') {
        if(res.data.action === 'like') {
          cmt[index].likes++;
        }
        else if(res.data.action === 'dislike') {
          cmt[index].likes--;
        }
        setPosts(cmt);
      }
    }).catch(e=> {
      console.log('error', e);
    });
  }

  const renderFileUri = () => {
    return (
      <SafeAreaView style={styles.backgroundcomponent}>
        {posts.map((post, pi) => <ProfileComponent key={pi} 
          currentusername={user.username} username={post.username} likes={post.likes} comments={post.comments} location={post.location} attachments={post.attachments} description={post.description} postIndex={pi}
          avatar={post.avatar} lastname={post.lastname} firstname={post.firstname} navigation={navigation} name={`${user.firstname} ${user.lastname}`} created_at={post.created_at} selectImage={selectImage}
          setComments={setComments} setLikes={setLikes} _id={pi} status={commentStatus[pi]} id={post.id}
        />)}

        {selectedImageIndex >= 0 && <ImageView images={images} imageIndex={Math.max(selectedImageIndex, 0)} onClose={() => setSelectedImageIndex(-1)} />}
      </SafeAreaView>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {renderFileUri()}
      </SafeAreaView>
    </ScrollView>
  );
};

export default connectAuth(connectAuthDescription(connectGeneralStatesToProps(DetailsScreen)));
