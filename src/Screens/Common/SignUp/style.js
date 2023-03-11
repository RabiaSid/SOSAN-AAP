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
    paddingTop: 36,
    backgroundColor: baseColors.lightColor,
  },
  screenBackground: {
    // backgroundColor: baseColors.primaryColor ,
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  screenMiddle: {
    height: deviceHeight / 1.2,
    width: deviceWidth / 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    justifyContent: "center",
    backgroundColor: baseColors.lightColor,
  },
  Text: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 10,
  },
  Textleft: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 10,
  },
  formText: {
    paddingLeft: 20,
  },
  modalView: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
    borderRadius: 10,
  },
  modalButton: {
    // flex: 1,
    // flexDirection:'row',
  },
});
