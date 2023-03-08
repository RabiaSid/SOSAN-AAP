import {StyleSheet, Dimensions } from 'react-native'
import baseColors from '../../../../Constant/color'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({

    screenContainer: {
        height: deviceHeight / 1,
        width: deviceWidth / 1,
        flexDirection: "column",
        alignItems:'center',
        paddingHorizontal: 20,
        marginTop: 36, 
        backgroundColor: baseColors.lightColor,
        
        
      },
      headerContainer:{
        backgroundColor: baseColors.lightColor,  
        width: deviceWidth/1,
        height:70,
    },
      
      
      screen: {
        flexDirection: "column",
        justifyContent: "center",
        height:deviceHeight/1,
        paddingBottom:50
        
      },
      formText: {
        paddingTop:10,
        paddingLeft: 20,
      },
      InputField: {
        height: 40,
        margin: 12,
        borderColor: baseColors.sucessColor,
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
      },
      
      Button: {
        elevation: 5,
        backgroundColor: baseColors.primaryColor,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 30,
        marginVertical:10,
        width: deviceWidth / 1 - 50,
        justifyContent: "center",
        alignItems: "center",
      },
      ButtonText: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
      },
   
  
  });
  