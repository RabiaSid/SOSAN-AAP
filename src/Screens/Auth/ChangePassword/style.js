import baseColors from "../../../Constant/color";
import { Dimensions, StyleSheet } from "react-native";

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
    // backgroundColor: baseColors.primaryColor,
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
    paddingTop: 10,
  },
  formText: {
    paddingLeft: 11,
  },
  Loginbutton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
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
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  
});
export default styles;
