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
        width: width / 6 * 5 ,
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
        width: width / 6 * 5,
        paddingHorizontal: 17,
        marginLeft: 15,
        fontSize: 17,
        marginTop: 10,
    },   
    MainContainer: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',        
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%', 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginLeft: 15
    },
    tinyLogo: {
        // alignItems: 'center',
        // margin: 10,
        marginLeft: 7,
        width: 150,
        height: 150,
        // borderRadius:20,
        borderWidth: .1,
        borderColor: 'grey',
        margin: 20
    },
    icon1: {
        marginRight: 3
    },
    icon2: {
        marginRight: 50
    }
});
