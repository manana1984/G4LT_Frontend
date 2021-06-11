import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 25
    },
    avatar: {
        alignItems: 'center',        
        justifyContent: 'center',
        paddingLeft: 75,
        paddingRight: 75
    },
    name: {
        fontSize: 30,
    },
    alignSelf: {
        alignItems: 'center',        
        justifyContent: 'center',
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
    },
    name1: {
        fontSize: 17,
        color: "#800080"
    },
    name2: {
        fontSize: 15,
        color: "#800080",
        paddingLeft: 20
    },
    name3: {
        fontSize: 15,
        color: "black",
        paddingLeft: 20
    },
    between: {
        fontSize: 18,
        color: "black"
    },
    math: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 95
    },
    number1: {
        paddingLeft: 80
    },
    number2: {
        paddingLeft: 85
    }
});
