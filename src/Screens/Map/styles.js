import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 2,
        // alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
        // justifyContent: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    headright: {
        color: '#800080',
        padding:20,
        fontSize: 15
    },
    headleft: {
        padding:20,
        fontSize: 15
    },
    input: {
        paddingLeft: 10,
        width: width*1,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingBottom: 0,
        textDecorationColor: 'transparent'
    },
    text: {
        paddingTop: 10,
        fontSize: 20,       
        color: 'black',
    },
    location:{
        display: 'flex',
        flexDirection: 'row',
        zIndex: 1000
    }
});
