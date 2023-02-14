import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
  },
  headerContainer:{ 
    height: 180, 
    marginTop: 35, 
    width: deviceWidth/1,
},
  LinearGradient: {
    
    borderColor: baseColors.lightColor,
    height: 170,
    height: deviceHeight / 4.5,
    width: deviceWidth / 1,
    borderBottomLeftRadius:27,
    borderBottomRightRadius:27
  },
  
  HeadingText:{
    color: baseColors.lightTextColor,
    paddingHorizontal:20,
    paddingTop:30,
    fontWeight:'Bold',
    fontSize:30
  },
  SearchField: {
    height: 45,
    margin: 12,
    borderColor: baseColors.lightColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  screenMiddle: {
  
    width: deviceWidth / 1-10,
    height: deviceHeight / 1,
    flexDirection:'column',
    paddingVertical:10,
    paddingHorizontal: 20,
  
  },
  LinearGradientContainer: {
   
  },
  textColorSuccess: {
    color: baseColors.sucessTextColor,
  },
  textColorDanger: {
    color: baseColors.dangerTextColor,
  },
  
});
