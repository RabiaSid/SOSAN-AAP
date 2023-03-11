import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../../Constant/color";
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
    backgroundColor: baseColors.lightColor,
    height: 60,
    marginTop: 38,
    width: deviceWidth / 1 - 30,
    paddingVertical: 8,
    // borderWidth:1,
    justifyContent: "space-between",
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
    width: deviceWidth / 1 - 10,
    height: deviceHeight / 1,
    flexDirection: "column",
    marginBottom: 150,
    // borderWidth:1
  },
  textHeading: {
    color: baseColors.darkColor,
    height: 30,
    fontSize: 20,
    fontWeight: "500",
  },
  LoginBtn: {
    elevation: 8,
    backgroundColor: baseColors.sucessColor,
    borderRadius: 50,
    paddingVertical: 10,
    marginVertical: 10,
    width: deviceWidth / 1 - 80,
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginTextSty: {
    color: baseColors.lightColor,
    fontSize: 20,
    fontWeight: "500",
  },
  appViewContainer: {
    width: deviceWidth / 1,
    flexDirection: "column",
    borderWidth: 1,
    backgroundColor: baseColors.sucessTextColor,
  },
  InputStyling: {
    height: 45,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    borderWidth: 2,
  },
  formText: {
    paddingLeft: 25,
    fontSize: 16,
    // marginTop:5
  },
  AboutSty: {
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    textAlignVertical: "top",
    borderWidth: 2,
  },
});
