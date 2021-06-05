import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 15,
        paddingLeft: 70,
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
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
    line1: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10
    },
    name2: {
        fontSize: 15,
        color: "#800080",
        paddingLeft: 20,
        marginTop: 10
    },
    name3: {
        fontSize: 15,
        color: "black",
        paddingLeft: 20
    },
    text_3: {
        color: '#800080',
        textAlign: 'center',
        fontSize: 9
    },
    text_4: {
        color: '#800080',
        textAlign: 'center',
        fontSize: 18,
        width: 110,
        height: 28,
    },
    roundButton1: {
        width: 50,
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        marginLeft: 30,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#800080',
        backgroundColor: 'white',
        borderColor: '#800080',
    },
    btnLogin1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: width * .5 / 2,
        borderRadius: 5,
        borderColor: '#800080',
        textAlign: 'center',
        borderWidth: 1,
        marginTop: 10
    },
    number: {
        fontSize: 16,
        color: "black"
    },
    name1: {
        fontSize: 17,
        color: "#800080"
    },

});
