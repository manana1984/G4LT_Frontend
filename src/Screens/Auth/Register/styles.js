import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:60,
    },
    input: {
        paddingLeft: 15,
        height: 40,
        width: width * 0.8,
        margin: 10,
        borderWidth: 0.5,
        borderRadius: 20
    },
    btnLogin: {
        // alignItems: 'center',
        backgroundColor: '#800080',
        padding: 10,
        width: width * 0.8,
        marginLeft: 8,
        // marginTop: 30,
        borderRadius: 50,
    },
    textGroup: {
        // flex: 1,
        paddingBottom: 10,
    },
    text: {
        fontSize: 30,       
        color: '#800080',
        paddingBottom: 40,
        textAlign:'center',
    },
    inline: {
        alignItems: 'center',
        backgroundColor: 'white',
        // padding: 10,
        width: width * 2 / 3,
        marginTop: 10,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
    },
    Sign: {
        color: 'white',
        textAlign: 'center',
    },
    alert: {
        color: 'red',
        paddingBottom: 20
    }
});
