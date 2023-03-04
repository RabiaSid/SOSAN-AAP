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
  headerContainer: {
    backgroundColor: baseColors.sucessColor,
    height: 60,
    marginTop: 35,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 8,
    
  },
  LinearGradient: {
    borderColor: baseColors.lightColor,
    height: 170,
    height: deviceHeight / 4.5,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
  },

  screenMiddle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: deviceWidth / 1,
    
    
  },
 
  ButtonView:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems:"center",
    paddingVertical:10,
    height:deviceHeight/7.5,
    
  },
  TopButton:{
    elevation: 8,
    backgroundColor: baseColors.sucessColor,
    borderRadius: 50,
    paddingVertical: 10,
    marginHorizontal:2,
    width: deviceWidth/2-17,
    height:40,
    justifyContent: "center",
    alignItems: "center",
  },
  TopButtonText:{
    color:baseColors.lightTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  TopTwoButton:{
    elevation: 8,
    backgroundColor: baseColors.lightColor,
    borderColor:baseColors.sucessColor,
    borderWidth:2,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal:2,
    width: deviceWidth/2-17,
    height:40,
    justifyContent: "center",
    alignItems: "center",
  },
  TopTwoButtonText:{
    color: baseColors.sucessTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  switchView:{
    height:deviceHeight/1.2,
    paddingTop:10
    
  }
});
