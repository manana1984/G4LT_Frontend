import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize:28,
        alignItems: 'center',
        color: '#800080',
        marginBottom: 20
    },
    text_1: {
        fontSize: 20,
        color: 'black',
        marginBottom: 70
    },
    text_2: {
        fontSize: 15,
        color: '#800080',
        marginTop: 20
    },
    input: {
        width: width *.8,
        // paddingHorizontal: 10,
        borderWidth: .5,
        borderColor: '#3179f6',
        backgroundColor: '#E0E0E0',
        borderRadius: 50,
        paddingLeft: 20,
        marginBottom:10
    },
    btnLogin: {
        backgroundColor: '#800080',
        padding: 15,
        width: width *.8,
        marginTop:10,
        borderRadius: 50,
    },
    btnsend:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: "#800080",
        alignItems: "center",
        marginTop: 5,
    },
    Icon: {
        paddingRight: 10,
    },
    text_3: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    }

    
});
