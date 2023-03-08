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
        marginTop: 36, 
        backgroundColor: baseColors.lightColor,
        
        
      },
      headerContainer:{
        backgroundColor: baseColors.sucessColor,  
        height:60,
        width: deviceWidth/1,

    },

    Listmain: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent:'center',
        width: deviceWidth / 1 - 30,
        paddingVertical: 10,
        marginVertical:10
        
      },
      ListBottom: {
        flexDirection: "row",
        width: deviceWidth / 1.2,
    
      },
      Listitems: {
        flexDirection: 'column',
        width: deviceWidth / 1.2,
        
      },

      textHeading:{
        color:baseColors.darkColor,
        height:30,
        fontSize : 20,
        fontWeight: 'bold'
      },
      textHeadingPrimary:{
        color:baseColors.primaryColor,
        fontSize : 20,
        fontWeight: 'bold',
      },
      text:{
        color:baseColors.darkColor,
        height:30,
        fontSize : 14,
      },
      ActivityImage:{
        height: 50, 
        width: 50, 
        borderRadius: 50 
      },
      
      Text:{
        color: baseColors.darkTextColor,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign:"center",
        paddingVertical:10
      },
      imageStyle:{
        paddingVertical:15,
        justifyContent: "center",
        alignItems: "center",
      },
      image:{ 
        height:180,
        width:180
      },
      screen: {
        flexDirection: "column",
        justifyContent: "center",
        height:deviceHeight/1,
        paddingBottom:50
        
      },
      formText: {
        paddingLeft: 20,
        fontSize:17,
        fontWeight:'700'
      },
      InputField: {
        height: 40,
        margin: 12,
        borderColor: baseColors.sucessColor,
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
      },
      InputFieldAbout: {
        margin: 12,
        borderColor: baseColors.sucessColor,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlignVertical: "top",
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
  