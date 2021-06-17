import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import styles from './styles';

// import exampleImage from './assets/images/example.png'


const SliderScreen = ({ navigation }) => {
    const slides = [
        {
            key: 1,
            image: require('../../../Assets/Images/1.png'),
        },
        {
            key: 2,
            image: require('../../../Assets/Images/2.png'),
        },
        {
            key: 3,
            image: require('../../../Assets/Images/3.png'),
        }
    ];

    const onImage = (key) =>{
        if(key==3) {
            navigation.navigate('Welcome');

        }
    }

    const _renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => {onImage(item.key)}}>
                    <Image source={item.image} style={styles.image} />
                </TouchableOpacity>
            </View>
        );
    }

    const _onDone = () => {
        navigation.navigate('Welcome');
    }

    return (
        <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} showDoneButton={false} showNextButton={false} />
    );
};

export default SliderScreen;
