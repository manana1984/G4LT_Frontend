import { StyleSheet, Dimensions } from 'react-native';
// import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headleft: {
        padding: 20,
        fontSize: 15,
    },
    Avatar: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 5
    },
    line:{
        marginTop: -5,
        marginBottom: -5
    },
    Avatar1: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 10,
        marginLeft: 10
    },
    Avatar2: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 35
    },
    Avatar3:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10
    },
    time: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 8
    },
    side: {
        paddingLeft: 15,
        paddingBottom: 15
    },
    text: {
        paddingTop: 7,
        fontSize: 16,
        fontWeight: "bold"
    },
    textWhite: {
        paddingRight: 10,
        color: 'black',
        fontSize: 11
    },
    input: {
        width: width / 6 * 5 + 10,
        paddingHorizontal: 5,
        marginTop: 11,
        marginLeft: 15,
        fontSize: 17,
        height: 43
    },
    tinyLogo: {
        // alignItems: 'center',
        // margin: 10,
        marginLeft: 7,
        width: 100,
        height: 100,
        // borderRadius:20,
        borderWidth: .1,
        borderColor: 'grey',
        marginTop: 10
    },
    backgroundcomponent: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        width: width * 7 / 8 + 15,
        borderRadius: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    math:{
        marginLeft: 10,
        color: "#800080"
    }
});
