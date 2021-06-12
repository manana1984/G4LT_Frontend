import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        // marginTop: 170,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize:28,
        alignItems: 'center',
        color: '#800080',
        marginBottom: 90
    },
    text_2: {
        fontSize: 15,
        color: '#800080',
        marginTop: 20
    },
    input: {
        width: width *.8,
        paddingHorizontal: 7,
        borderWidth: .5,
        borderColor: '#3179f6',
        backgroundColor: '#E0E0E0',
        borderRadius: 50,
        paddingLeft: 15,
        marginTop:10
    },
    btnLogin: {
        backgroundColor: '#800080',
        padding: 15,
        width: width *.8,
        marginTop: 10,
        borderRadius: 50,
        color: 'white',
        textAlign: 'center'
    },
    btnsend:{
        color: "#800080",
        alignItems: "center",
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    Icon: {
        paddingRight: 10,
    },
    text_3: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
});
