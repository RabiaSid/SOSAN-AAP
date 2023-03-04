import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
  },
  headerContainer:{
    marginTop: 30, 
    width: deviceWidth/1,
    paddingHorizontal:4,


},
 
  screenMiddle: {
    width: deviceWidth / 1-10,
    flexDirection:'column',
    alignItems: "center",
    justifyContent:'center',
    marginTop:10,
    marginBottom:80,
    
  },
 
});
