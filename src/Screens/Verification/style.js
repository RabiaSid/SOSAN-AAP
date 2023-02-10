import baseColors from "../../Constant/color"
import { Dimensions , StyleSheet } from "react-native"



const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    screenContainer: {
      height: deviceHeight / 1,
      width: deviceWidth / 1,
      flex: 1,
      flexDirection: "column",
      paddingTop: 38,
      backgroundColor: baseColors.lightColor,
    },
    screenBackground: {
      backgroundColor: baseColors.primaryColor,
      height: deviceHeight / 1,
      width: deviceWidth / 1,
      flexDirection: "column",
      justifyContent: "center",
    },
    middleScreen: {
      height: deviceHeight / 1.2,
      width: deviceWidth / 1,
      borderRadius: 30,
      backgroundColor: baseColors.lightColor,
      paddingTop: 30
    },
    heading: {
      // fontWeight: "600",
      color: baseColors.sucessTextColor,
      justifyContent: "center",
      textAlign: "center",
      fontSize: 20,
    } 
,
BoxScreen:{
marginTop: 65,
}, 
headingMini:{
   color: baseColors.sucessTextColor,
  fontSize: 14,
  marginBottom: 10,
  paddingStart: 5
},
TextContainer:{
marginTop: 12,
padding: 12
},
TextNormal:{
fontSize:12.5
},
underline:{
textDecorationLine: "underline"
}
  })
export default styles