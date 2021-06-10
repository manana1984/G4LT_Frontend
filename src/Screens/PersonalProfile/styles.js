import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingLeft: 25
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: 35,
        marginTop: -20
    },
    view1: {
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 35,
        height: 100,
        width: width*.8,
        margin: 5,
        borderWidth: 0.5,
        borderRadius: 5,
    },
    avatar: {
        alignItems: 'center',        
        justifyContent: 'center',
        paddingRight: 30,
        marginTop: 15
    },
    name: {
        fontSize: 20,
    },
    alignSelf: {
        alignItems: 'center',        
        justifyContent: 'center',
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        fontSize: 17,
        marginTop: 5,
        color: "#800080"
    },
    view: {
        flexDirection: 'column',
        paddingLeft: 15,
        marginRight: 35,
        height: 40,
        width: width*.8,
        margin: 5,
        borderWidth: 0.5,
        borderRadius: 5
    },
    alert: {
        color: 'red',
        paddingBottom: 5
    },
});
