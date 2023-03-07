import {StyleSheet, Dimensions } from 'react-native'
import baseColors from '../../../../Constant/color'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({

    screenContainer: {
        height: deviceHeight / 1,
        width: deviceWidth / 1,
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 36, 
        backgroundColor: baseColors.lightColor,
        
        
      },
      headerContainer:{
        backgroundColor: baseColors.lightColor,  
        width: deviceWidth/1,
    },
      
      
      imageStyle:{
        paddingVertical:15,
        justifyContent: "center",
        alignItems: "center",
        width:deviceWidth/1,
      },
      image:{ 
        height:110,
        width:110
      },
      screen: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems:'center',
        width: deviceWidth/1,
        height:deviceHeight/1,
        paddingBottom:50,
        
      },
      
   
  
  });
  