import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    input: {
        width: width *.8,
        paddingHorizontal: 10,
        borderWidth: .5,
        borderColor: 'black',
        borderRadius: 50,
        padding: 5,
        marginTop:10,
        marginTop: 30
    },
    text_2: {
        fontSize: 15,
        color: '#800080',
        marginTop: 20
    },
    btnLogin: {
        backgroundColor: '#800080',
        padding: 10,
        width: width *.8,
        marginTop: 20,
        borderRadius: 50,
        color: 'white',
        alignItems: 'center'
    },
    btnsend:{
        color: "#800080",
        alignItems: "center",
        marginTop: 25
    }
    
});
