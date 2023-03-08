import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  screenContainer: {
    width: deviceWidth / 1,
    height:deviceHeight/1,
    flex: 1,
    flexDirection: "column",
    alignItems:'center',
    backgroundColor: baseColors.lightColor,
  },
  headerContainer:{ 
    backgroundColor:baseColors.sucessColor,
    height: 60, 
    marginTop: 35, 
    width: deviceWidth/1,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    paddingVertical:8,
},

  contentContainer: {
    width: deviceWidth/1,
    flexDirection: "column",
    alignItems:'center',
  },

  screenMiddle: {
    flexDirection: "column",
        justifyContent: "center",
        alignItems:'center',
        width: deviceWidth/1-10,
        height:deviceHeight/1,
    
  
  },
  textColor:{
    color:baseColors.lightTextColor,
    fontWeight: "bold",
  },
  textColorSuccess: {
    color: baseColors.sucessTextColor,
  },
  textColorDanger: {
    color: baseColors.dangerTextColor,
  },
  
});
