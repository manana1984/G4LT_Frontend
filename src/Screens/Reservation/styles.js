import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    btnDetails: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#800080',
        marginTop: 230, 
        marginLeft: 100,
        padding: 10,
        width: width / 2,
        borderRadius: 5,
    },
    text:{
        color: 'white',
        fontSize: 20,
    }
});
