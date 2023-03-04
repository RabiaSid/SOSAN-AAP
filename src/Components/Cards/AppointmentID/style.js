import { Dimensions, StyleSheet } from 'react-native';
import baseColors from '../../../Constant/color';
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
    Container: {
        // backgroundColor: '#fff',
        padding: 10,
        paddingVertical: 10,
        marginVertical: 5,
        elevation: 3,
        width: deviceWidth / 1 - 25,
    },
    item: {
        alignItems: 'center',
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 15,
        paddingVertical:4,
       marginHorizontal: 10
    },
    imgView:{
        flexDirection: 'column'
    },
    imageSty:{
        height: 100,
        width:100,
        borderRadius: 50
    },
    listItem:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },
    title:{
    fontWeight: 'bold',
    fontSize: 20
    },
    email:{
        fontSize: 14,
        color: "gray"
    },
    idName:{
     fontWeight: 'bold',
     fontSize: 12,
     paddingRight: 10
    },
    id:{
        color: 'gray'
    },
    idView:{
        flexDirection: 'row',
    }
})