import { Dimensions, StyleSheet } from 'react-native';
import baseColors from '../../../Constant/color';
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
    Container: {
        elevation: 3,
        width: deviceWidth / 1 - 25,
    },
    item: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 15,
        //    marginHorizontal: 10
    },
    imgView: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    imageSty: {
        height: 90,
        width: 90,
        borderRadius: 50
    },
    listItem: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 3
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    email: {
        fontSize: 16,
        color: "gray"
    },
    idName: {
        fontWeight: 'bold',
        fontSize: 14,
        paddingRight: 10
    },
    id: {
        color: 'gray',
        fontSize: 16
    },
    idView: {
        flexDirection: 'row',
    },
    icons: {
        flexDirection: "row",
        paddingVertical: 10
    },
    iconsSty1: {
        color: baseColors.primaryColor,
        paddingRight: 3
    },
    iconsSty2: {
        color: baseColors.sucessColor,
        paddingRight: 3
    },
    lockSty: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    heartSty: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})