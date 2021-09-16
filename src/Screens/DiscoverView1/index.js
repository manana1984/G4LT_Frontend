import React, { useState, useEffect, } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from "@react-navigation/native";
import { useContext, useRef, useLayoutEffect } from 'react';
import ImageView from 'react-native-image-view';
import { Dimensions } from 'react-native';
import { connectAuth, connectGeneralStatesToProps, connectAuthDescription } from '../../Redux/connects';
import FeedAPI from '../../Services/feeds';
import styles from './styles';



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
            <Ionicons name='map-marker' size={19} color='#800080' />
            <Text style={{ color: '#800080', fontSize: 11 }}>    {location}</Text>
          </View>
        </ListItem.Content>
      </TouchableOpacity>
    </View >
    <TouchableOpacity onPress={() => navigation.navigate('description1', { description: description, attachments: attachments, post_id: id })}>
      <View style={styles.linea}>
        <Text style={styles.input}>{description}</Text>
      </View>
    </TouchableOpacity>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 23, marginBottom: 17 }} >
      {
        attachments.length == 1 && attachments[0] != '' && <TouchableOpacity onPress={() => selectImage(postIndex, 0)}>
          <Image style={styles.bigLogo} source={{ uri: attachments[0] }} />
        </TouchableOpacity>
      }

      {attachments.length > 1 && attachments.map((attachment, index) => (
        !!attachment ? <TouchableOpacity key={`profile-attachment-${index}`} onPress={() => selectImage(postIndex, index)}>
          <Image style={styles.tinyLogo} source={{ uri: attachment }} />
        </TouchableOpacity> : null
      ))}
    </View>
    <TouchableOpacity style={styles.Avatar2} >
      <TouchableOpacity onPress={() => { setLikes(_id) }}>
        <Ionicons name='thumbs-o-up' color={status ? '#800080' : 'blue'} size={17} />
      </TouchableOpacity>
      <Text style={styles.math}>{likes}</Text>
      <TouchableOpacity style={styles.Avatar3} onPress={() => navigation.navigate('description1', { description: description, attachments: attachments, post_id: id })}>
        <Ionicons name='comment-o' color='#800080' size={17} />
        <Text style={styles.math}>{comments}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Avatar4} onPress={() => { setLikes(_id) }}>
        <Ionicons name='share-square-o' color={status ? '#800080' : 'blue'} size={17} />
      </TouchableOpacity>

    </TouchableOpacity>
  </View>
};





const DiscoverView1Screen = (props) => {
  const { user, navigation } = props;





  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [images, setImages] = useState([]);

  const [posts, setPosts] = useState([]);
  const [commentStatus, setCommentStatus] = useState([]);

  const isFocused_1 = useIsFocused();

  useEffect(() => {
    FeedAPI.getHomePosts().then(res => {
      const newPosts = res.data.map(att => ({
        ...att,
        attachments: String(att.attachments || '').split(',')
      }));
      setPosts(newPosts);
      let temp = [];
      for (let i = 0; i < res.data.length; i++) {
        temp.push(true);
      }
      setCommentStatus(temp);
      console.log('res.data', res.data);
    }, e => {
    })
  }, [isFocused_1]);




  const isFocused = useIsFocused();
  const [userdata, setUserData] = useState({
    avatar: 'https://faces/twitter/ladylexy/128.jpg',
    firstname: 'firstname',
    lastname: 'lastname'
  });
  const [myFollowing, setMyFollowing] = []
  const [myCircle, setMyCircle] = []
  const [num, setnum] = []

  useLayoutEffect(() => {

    props.navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "Discover",
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginLeft: 10 }}>
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
    FeedAPI.getMyPosts(userdata)
    FeedAPI.getCircle().then(res => {
      for (i in res.data) {
        if (res.data[i].circle == props.route.params.username) {
          if (res.data[i].approved == null) {
            setStatusCircle("Pending Circle");
          } else if (res.data[i].approved == false) {
            setStatusCircle("Join Circle");
          } else if (res.data[i].approved == 1) {
            setStatusCircle("Approved");
            // 
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
      if (res.data.result === 'success') {
        if (res.data.action === 'like') {
          cmt[index].likes++;
        }
        else if (res.data.action === 'dislike') {
          cmt[index].likes--;
        }
        setPosts(cmt);
      }
    }).catch(e => {
      console.log('error', e);
    });
  }

  const renderFileUri = () => {
    return (
      <SafeAreaView style={styles.backgroundcomponent}>
        {posts.map((post, pi) => {
          if (userdata.username == post.username) {
            return <ProfileComponent key={pi}
              currentusername={user.username} username={post.username} likes={post.likes} comments={post.comments} location={post.location} attachments={post.attachments} description={post.description} postIndex={pi}
              avatar={post.avatar} lastname={post.lastname} firstname={post.firstname} navigation={navigation} name={`${user.firstname} ${user.lastname}`} created_at={post.created_at} selectImage={selectImage}
              setComments={setComments} setLikes={setLikes} _id={pi} status={commentStatus[pi]} id={post.id}
            />
          }
        })}

        {selectedImageIndex >= 0 && <ImageView images={images} imageIndex={Math.max(selectedImageIndex, 0)} onClose={() => setSelectedImageIndex(-1)} />}
      </SafeAreaView>
    );
  }











  return (
    <ScrollView>
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
                <Ionicons color={"#800080"} size={32} name='lock'></Ionicons>
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
        <View style={{paddingLeft: 20, paddingTop: 20}}>
          <Text style={styles.name2}>About Me</Text>
          <Text style={styles.name3}>{userdata.about_me}</Text>
        </View>
        <View style={styles.line1}>
          <Text style={styles.name1} >Followers</Text>
          <Text style={styles.number}> {userdata.following} </Text>
          <Text style={styles.name1} >Posts</Text>
          <Text style={styles.number}>   {userdata.post_count}  </Text>
        </View>
        <SafeAreaView style={{paddingLeft: 20}}>
          {renderFileUri()}
        </SafeAreaView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default connectAuth(connectAuthDescription(connectGeneralStatesToProps(DiscoverView1Screen)));
