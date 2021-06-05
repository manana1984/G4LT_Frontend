import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        alignItems: 'center',
        margin: 10,
        marginLeft: 15,
        width: 100,
        height: 100,
        // borderRadius:20,
        borderWidth: .1,
        borderColor: 'grey',
    },
    btnDetails: {
        alignItems: 'center',
        backgroundColor: '#3179f6',
        padding: 10,
        width: width / 2,
        borderRadius: 5,
    },
    input: {
        width: width / 6 * 5 + 10,
        paddingHorizontal: 10,
        padding: 5,
        marginLeft: 10,
    },
    text: {
        color: '#800080',
        fontSize: 20
    },
    btnLogin: {
        fontSize: 15,
        color: 'grey',
        margin: 25,
        display: 'flex',
        flexDirection: 'row',
    },
    bntselect: {
        borderRadius: 50,
        marginBottom: 10
    },
    Avatar: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 15
    },
    text_2: {
        fontSize: 25,
        paddingLeft: 15,
        paddingTop: 15
    },
    headright: {
        color: '#800080',
        padding: 20,
        fontSize: 15
    },
    headleft: {
        padding: 20,
        fontSize: 15
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
    },
    pensil: {
        paddingTop: 23
    },
    side: {
        paddingLeft: 15,
        paddingBottom: 15
    },
    time: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 20
    },
    textWhite: {
        paddingRight: 10,
        color: 'black'
    },
    buttonGroup: {
        paddingLeft:90,
        paddingBottom:15,
        paddingTop:15,
        paddingRight:90,
        alignItems: "center",
    },
    button: {
        padding: 10,          
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "white",
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    modalText: {
        textAlign: "center"
    }
});
