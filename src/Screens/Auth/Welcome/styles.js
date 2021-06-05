import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        // paddingTop: 9,
        fontSize:60,
        paddingBottom: 50,
        alignItems: 'center',
        // fontFamily: ''
    },
    text_1: {
        fontSize: 28,
        color: '#800080',
    },
    text_2: {
        fontSize: 22,
        color: 'black',
        alignItems: 'center',
    },
    btnLogin: {
        alignItems: 'center',
        backgroundColor: '#800080',
        padding: 10,
        width: width *.8,
        marginTop: 130,
        borderRadius: 50,
    },
    btnRegister: {
        padding: 10,
        alignItems: 'center',
        width: width *.8,
        marginTop: 20,
        borderColor: '#3179f6',
        backgroundColor: '#E0E0E0',
        borderWidth: .5,
        borderRadius: 50,
    },
    buttonGroup:{
        padding: 0,
    },
    btnLogin1: {
        fontSize: 20,
        color: 'white'
    },
    btnLogin2: {
        fontSize: 20,
        color: 'black'
    }

    
});
