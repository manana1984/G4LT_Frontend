import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({

    Avatar: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 5
    },
    input: {
        width: width / 6 * 5,
        paddingHorizontal: 17,
        marginLeft: 15,
        fontSize: 17,
        marginTop: 15
    },
    input1: {
        width: width / 6 * 5,
        paddingHorizontal: 17,
        marginLeft: 15,
        fontSize: 17
    },
    input2: {
        width: width / 25 * 17,
        paddingHorizontal: 17,
        marginLeft: 40,
        fontSize: 17,
        marginTop: -8,
        marginBottom: 8
    },
    input3: {
        width: width /25 * 17,
        paddingHorizontal: 17,
        marginLeft: 40,
        fontSize: 17,
        marginTop: -19,
        marginBottom: 8,
    },
    MainContainer: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',        
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },
    commentsContainer: {
        marginBottom: 50
    },
    line: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    comment: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width* 1,
        marginRight: -100,
        marginTop: 15
        // paddingEnd: 10
    },
    comment1: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width* 1,
        marginRight: -100,
        marginTop: 5
        // paddingEnd: 10
        // flex: 1,
        // paddingLeft: 10,
        // paddingRight: 10,
    },
    reply: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width* 1,
        marginRight: -100,
        marginTop: 15,
        paddingLeft: 30
        // paddingEnd: 10
    },
    reply1: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width* 1,
        marginRight: -100,
        marginTop: 5,
        // paddingEnd: 10
        // flex: 1,
        paddingLeft: 15,
        // paddingRight: 10,
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
        marginLeft: 20,
        marginTop: 9
    },
    tinyLogo1: {
        // alignItems: 'center',
        // margin: 10,
        marginLeft: 7,
        width: 310,
        height: 310,
        // borderRadius:20,
        borderWidth: .1,
        borderColor: 'grey',
        margin: 20,
        marginLeft: 23
    },
    icon1: {
        marginRight: 3
    },
    icon2: {
        marginRight: 50,
    },
    edit:{
        marginTop: -6,
        paddingLeft: -1
    },
    delete:{
        marginTop: -6,
        marginLeft: -2,
    },
    name: {
        fontWeight: "bold",
        fontSize: 19,
        marginLeft: 5
    },
    time: {
        fontSize: 19,
        paddingRight: -25,
        // paddingLeft: 15,
        marginTop: 5,
    },
    textInputStyle:{
       height: 50,
       width: width /25 * 17,
    }
});
