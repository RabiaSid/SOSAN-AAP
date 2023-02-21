import baseColors from "../../../Constant/color"
import { Dimensions , StyleSheet } from "react-native"



const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 65,
    backgroundColor: baseColors.lightColor,
  },
  screenBackground: {
    width: deviceWidth / 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems:'flex-start'
    
  },
  middleScreen: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    borderTopStartRadius:30,
    borderTopEndRadius:30,
    backgroundColor: baseColors.lightColor,
    flexDirection: "column",
    paddingVertical:5

    
   
  },
  headerContainer: {
    width: deviceWidth / 1,

  },
  TextLight: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
  })
export default styles