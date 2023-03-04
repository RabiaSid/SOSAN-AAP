import { Dimensions, StyleSheet } from 'react-native';
import baseColors from '../../../Theme/Colors/Colors';
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
    Container: {
        width: deviceWidth / 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: baseColors.lightGreyColor,
        marginBottom : 10
    },
    List: {
        width: deviceWidth / 1,
        marginVertical: 10,
        paddingVertical: 10,
    },
    ListItems: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      

    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    firstRow: {
        borderWidth: 1, 
        flexDirection: 'row',
         justifyContent: 'space-around', 
         alignItems: 'center', 
         borderColor: baseColors.lightGreyColor
    },
    secondRow: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        paddingRight: 30,
        alignItems: 'center',
        paddingLeft: 0
    },
    textStyling:{
        paddingBottom: 1,
        margin: 3
    }
})