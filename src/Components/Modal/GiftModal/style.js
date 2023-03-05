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
      borderRadius:30,
      
    },
    modalView:{
      flexDirection:'column',
      backgroundColor: baseColors.lightColor,
      alignItems:'center',
      justifyContent:'flex-end',
      paddingVertical:15,
      width:deviceWidth/1.1,
      height:deviceHeight/2.2,
      borderRadius:30,
      
    },
   
    modalViewText:{
      color: baseColors.darkTextColor,

    },
   
    modalIcon:{
      color: baseColors.primaryColor,
    },

    TextButton:{
      textAlign:'center'
    },
    Text: {
      color: baseColors.darkTextColor,
      fontSize: 16,
      fontWeight: "500",
      textAlign: "center",
    },
   
    TextAmountView: {
      paddingVertical: 3,
      paddingHorizontal: 30,
      marginVertical: 10,
      borderColor: baseColors.secondaryColor,
      borderRadius: 50,
      borderWidth: 2,
    },
    TextAmount: {
      color: baseColors.darkTextColor,
      fontSize: 19,
      fontWeight: "bold",
      textAlign: "center",
    },
    TextSecondery:{
      width:deviceWidth/1.4,
      color: baseColors.secondaryTextColor,
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center",
    },
    TextSmallSecondery:{
      paddingVertical:5,
      width:deviceWidth/1.4,
      color: baseColors.secondaryTextColor,
      fontSize: 12,
      fontWeight: "bold",
      textAlign: "center",
    },
    ButtonPrimary: {
      elevation: 8,
      backgroundColor: baseColors.primaryColor,
      borderRadius: 50,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width:deviceWidth/1.3,
      marginVertical: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    ButtonTextPrimary: {
      color: baseColors.lightTextColor,
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    
    ButtonDanger:{
      elevation: 8,
      backgroundColor: baseColors.dangerTextColor,
      borderRadius: 50,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width:deviceWidth/1.3,
      marginVertical: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    ButtonTextDanger:{
    
       color: baseColors.lightTextColor,
        fontWeight: "bold",
        textTransform: "uppercase",
      
    },
  
  });
  
  