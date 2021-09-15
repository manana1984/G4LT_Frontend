import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 10,
        flex: 1,
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
        fontSize: 18
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
    lock: {
        paddingBottom: 13,
        paddingLeft: 2
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
    Avatar4:{
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
    bigLogo: {
        // alignItems: 'center',
        // margin: 10,
        marginLeft: 7,
        width: width/ 6 * 5,
        height: height/2,
        // borderRadius:20,
        // borderWidth: .1,
        // borderColor: 'grey',
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
