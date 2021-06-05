import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { useEffect, useContext, useState, useRef, useLayoutEffect, } from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { ListItem, Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { connectAuth } from '../../Redux/connects';

const ProfileScreen = (props) => {
  const { user } = props;
  // const image= "data:image/jpeg;base64," + this.state.source
  
  useLayoutEffect(() => {

    props.navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      headerTitle: "My Profile",
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate('G4LT')} style={{ marginLeft: 10 }}>
          <Ionicons name='chevron-left' size={24} color='Black' />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={styles.Avatar} style={{ marginRight: 10 }} >
          <Ionicons name='user' size={24} color='#CCC' />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "white",
        borderBottomColor: "black",
      }

    });
  }, []);

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Ionicons name='bell' size={24} color='#800080' />
        <View style={styles.avatar}>
          <Avatar size="xlarge" icon={{ name: 'user', type: 'font-awesome' }} activeOpacity={1} rounded
          source={{ uri: user.avatar || 'https://faces/twitter/ladylexy/128.jpg', }} />
        </View>
        <View >
          <Ionicons name='cog' size={24} color='#800080' onPress={() => props.navigation.navigate('Settings')}/>
        </View>
      </View>
      <View style={styles.alignSelf}>
        <Text style={styles.name}> {user.firstname} {user.lastname} </Text>
        <View style={styles.line}>
          <Text style={styles.name1}>Posts</Text>
          <Text style={styles.between}>  |  </Text>
          <Text style={styles.name1} onPress={() => props.navigation.navigate('Following')}>Following</Text>
          <Text style={styles.between}>  |  </Text>
          <Text style={styles.name1} onPress={() => props.navigation.navigate('Followers')}>Followers</Text>
        </View>
      </View>
      <View style={styles.math}>
        <Text>25</Text>
        <Text style={styles.number1}>21</Text>
        <Text style={styles.number2}>64</Text>
      </View>
      <View>
        <Text style={styles.name2}>About {user.firstname} {user.lastname}</Text>
        <Text style={styles.name3}>She is from Armenia, Her name is Manana Asatrain and the ages is 31.</Text>
      </View>
    </SafeAreaView>
  );
};

export default connectAuth(ProfileScreen);
