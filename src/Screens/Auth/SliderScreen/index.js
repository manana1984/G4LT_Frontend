import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import styles from './styles';

const SliderScreen = ({ navigation }) => {
    const slides = [
        {
            key: 1,
            title: 'Title 1',
            text: 'Description.\nSay something cool',
            // image: require('./assets/1.jpg'),
            backgroundColor: '#59b2ab',
        },
        {
            key: 2,
            title: 'Title 2',
            text: 'Other cool stuff',
            // image: require('./assets/2.jpg'),
            backgroundColor: '#febe29',
        },
        {
            key: 3,
            title: 'Rocket guy',
            text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
            // image: require('./assets/3.jpg'),
            backgroundColor: '#22bcb5',
        }
    ];

    const _renderItem = ({ item }) => {
        return (
            <View style={{backgroundColor:item.backgroundColor}}>
                <Text style={styles.title}>{item.title}</Text>
                {/* <Image source={item.image} /> */}
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }

    const _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        navigation.navigate('Welcome');
        console.log('doneoeonoeno')
    }

    return (
        // <SafeAreaView style={styles.container}>
        //   <Text style={styles.text}>G4LT</Text>
        //   <Text style={styles.text_1}>You Are Not A Product</Text>
        //   <Text style={styles.text_2}>Think, share, and</Text>
        //   <Text style={styles.text_2}>collaborate for yourself</Text>
        //   <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Login') }>
        //     <Text style={styles.btnLogin1}>Log In</Text>
        //   </TouchableOpacity>
        //   <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Register') }>
        //     <Text style={styles.btnLogin2}>Sign Up</Text>
        //   </TouchableOpacity>
        // </SafeAreaView>
        <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
    );
};

export default SliderScreen;
