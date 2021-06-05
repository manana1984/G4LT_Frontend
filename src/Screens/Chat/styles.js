import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headleft: {
        paddingLeft: 20,
    },
    image: {
        borderRadius: 50,
        alignItems: 'flex-start'
    },
    button: {
        display: 'flex',
        // alignItems: 'left',
        marginLeft: -60,
        flexDirection: 'row',
    },
    btnLogin: {
        backgroundColor: '#800080',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        textAlignVertical: "center",
        width: 120,
        height: 35,
        borderRadius: 5,
        color: 'white',
    },
    btnLogin1: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        textAlignVertical: "center",
        width: 120,
        height: 35,
        borderRadius: 5,
        borderColor: '#800080',
        color: '#800080',
    },
    btnsend: {
        color: "#800080",
        marginLeft: 70,
        marginTop: 5
    },
    btnsend1: {
        marginLeft: 10,
        marginTop: 5
    },
    text1: {
        fontSize: 20,
        fontWeight: "bold"
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -50,
    }
});
