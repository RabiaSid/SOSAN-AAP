import {StyleSheet, Dimensions } from 'react-native'
import baseColors from '../../../Constant/color'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    screenContainer: {
        height: deviceHeight / 1,
        width: deviceWidth / 1,
        flex: 1,
        flexDirection: "column",
        padding: 20,
        backgroundColor: baseColors.lightColor,
      },
      Text:{
        color: baseColors.darkTextColor,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign:"center",
        paddingVertical:10
      },
   
  
  });
  