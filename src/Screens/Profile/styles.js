import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        flex: 1
        // paddingLeft: 25
    },
    avatar: {
        alignItems: 'center',        
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
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
    linea:{
        marginTop: -5,
        marginBottom: -5
    },
    name1: {
        fontSize: 17,
        color: "#800080",
    },
    name2: {
        fontSize: 15,
        color: "#800080",
        paddingLeft: 40,
        paddingTop: 30
    },
    name3: {
        fontSize: 15,
        color: "black",
        paddingLeft: 40,
        paddingTop: 20,
        paddingBottom: 30
    },
    between: {
        fontSize: 18,
        color: "black"
    },
    math1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',        
        justifyContent: 'center',
    },
    number1: {
        paddingLeft: 70
    },
    number2: {
        paddingLeft: 85
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
        marginTop: 10,
        paddingLeft: 20
    },
    backgroundcomponent: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        width: width * 7 / 8 + 15,
        borderRadius: 5,
        paddingLeft: 20
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    math:{
        marginLeft: 10,
        color: "#800080"
    }
});
