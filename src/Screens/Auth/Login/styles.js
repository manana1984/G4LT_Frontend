import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black'
    },
    input: {
        width: width * 0.8,
        paddingLeft: 15
        // paddingHorizontal: 10,

    },
    text: {
        fontSize: 35,
        color: '#800080',
        marginTop: 70,
        marginBottom: 70
    },
    text_1: {
        fontSize: 20,
        color: 'black',
        alignItems: 'center',
    },
    inline: {
        alignItems: 'center',
        borderColor: '#3179f6',
        backgroundColor: '#E0E0E0',
        width: width * .8,
        marginTop: 10,
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: .5,
        paddingLeft: 15
    },
    btnforgotpassword: {
        // alignItems: 'center',
        width: width * .8,
        paddingLeft:10,
        marginTop: 10,
        marginBottom: 20,
    },
    btnLogin: {
        alignItems: 'center',
        backgroundColor: '#800080',
        padding: 10,
        width: width * .8,
        borderRadius: 50,
        marginBottom: 10,
    },
    btnLogin1: {
        alignItems: 'center',
        backgroundColor: '#800080',
        padding: 10,
        width: width * .8,
        borderRadius: 50,
        marginBottom: 130,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    
    btnDefaultSize: {
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textWhite: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10
    },
    textBlack: {
        color: 'black'
    },
    facebook: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#337fff',
    },
    apple: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#070707',
    },
    alert: {
        color: 'red',
        // paddingBottom: 5
    }
    
});

