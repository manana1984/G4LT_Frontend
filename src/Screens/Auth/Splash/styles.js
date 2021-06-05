import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        paddingTop: 9,
        fontSize: 60,
        alignItems: 'center',
        fontWeight: "900"
    },
    cover: {
        position: 'absolute',
        height: '100%'
    }
});
