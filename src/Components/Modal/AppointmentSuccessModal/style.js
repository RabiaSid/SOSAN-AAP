import {StyleSheet, Dimensions } from 'react-native'
import baseColors from '../../../Constant/color'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  
    Text:{
      color: baseColors.darkTextColor,
      fontWeight: "bold",
      textAlign:"center",
    },
    modal: {
      backgroundColor:baseColors.lightColor,
      borderRadius:10,

    },
    modalView:{
      flexDirection:'column',
      backgroundColor: baseColors.lightColor,
      alignItems:'center',
      justifyContent:'center',
      width:deviceWidth/1.1,
      height:deviceHeight/3.7,
      paddingVertical:10,
      borderRadius:30,
    },
   
    modalViewText:{
      color: baseColors.darkTextColor,

    },
    ImgView:{
      borderWidth: 4,
       borderColor: baseColors.lightGreyColor, 
      borderRadius: 50 ,
       height: 100, 
       width: 100, 
       justifyContent:'center',
       alignItems:'center'
    },
   ImageStyling:{
    height: 60, 
    width: 70,
    marginBottom:10 
   },
    modalIcon:{
      color: baseColors.primaryColor,
    },
    
   
    ButtonText: {
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  
  });