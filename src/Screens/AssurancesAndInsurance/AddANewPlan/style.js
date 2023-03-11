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
    alignItems: "center",
    backgroundColor: baseColors.lightColor,
  },
  headerContainer: {
    backgroundColor: baseColors.lightColor,
    height: 60,
    marginTop: 25,
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
    // borderWidth:1,
    width: deviceWidth / 1 - 10,
    height: deviceHeight / 1,
    flexDirection: "column",
    alignItems: "center",
  },
  textHeading: {
    color: baseColors.darkTextColor,
    // height: 30,
    fontSize: 20,
  },

  LoginTextSty: {
    color: baseColors.lightColor,
    fontSize: 20,
  },
  BottomBtn: {
    flexDirection: "column",
    alignItems: "center",
    height: deviceHeight / 1,
    marginVertical: 160,
    paddingVertical: 10,
    backgroundColor: baseColors.lightColor,
    elevation: 6,
    width: deviceWidth / 1,
  },
  LoginBtn: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 20,
    paddingVertical: 10,
    marginVertical: 10,
    width: deviceWidth / 1 - 40,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginBtnTextSty: {
    color: baseColors.lightColor,
    fontWeight: "bold",
    fontSize: 18,
  },
});
