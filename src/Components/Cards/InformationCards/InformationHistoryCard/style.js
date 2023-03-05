import { Dimensions, StyleSheet } from 'react-native';
import baseColors from '../../../../Constant/color';
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
    Container: {
        paddingVertical: 5,
        flexDirection: 'column',
        alignItems:'center'
        // borderWidth: 1,
    },
    item: {
        flexDirection: 'column',
        // borderWidth: 1
    },
    listItem: {
        borderWidth: 1,
        borderColor: "blue",
        width: deviceWidth / 1 - 40
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: baseColors.sucessColor,
        marginBottom: 10,
    },
    MainDiv: {
        width: deviceWidth / 1 - 30,
        

    },
    idName: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        flexDirection: 'row',
        justifyContent:'space-between', 
        alignItems:'center',
        width: deviceWidth / 1 - 30,
    },
})