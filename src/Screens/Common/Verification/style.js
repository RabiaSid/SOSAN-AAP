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
    paddingTop: 28,
    backgroundColor: baseColors.lightColor,
  },
  screenBackground: {
    // backgroundColor: baseColors.primaryColor,
    height: deviceHeight / 1 - 85,
    width: deviceWidth / 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  middleScreen: {
    height: deviceHeight / 1.29,
    width: deviceWidth / 1,
    borderRadius: 30,
    backgroundColor: baseColors.lightColor,
    paddingTop: 30,
    // borderWidth:1,
    // marginTop:60
  },
  headerContainer: {
    height: deviceHeight / 6 - 50,
    width: deviceWidth / 1 - 30,
    //  borderWidth:1,
    marginTop: 30,
    marginHorizontal: 15,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 45,
  },
  textHeading: {
    color: baseColors.lightTextColor,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    // borderWidth:1,
    width: deviceWidth / 1.5,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    height: deviceHeight / 6 - 50,
  },
  heading: {
    // fontWeight: "600",
    color: baseColors.sucessTextColor,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
  },
  BoxScreen: {
    marginTop: 65,
  },
  headingMini: {
    color: baseColors.sucessTextColor,
    fontSize: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: deviceWidth / 1 - 50,
    // borderWidth:1,
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  TextContainer: {
    marginTop: 12,
    padding: 10,
    flexDirection: "column",
    width: deviceWidth / 1 - 10,
    marginHorizontal: 5,
  },
  TextNormal: {
    fontSize: 12,
  },
  TextNorm: {
    fontSize: 12,
    flexDirection: "row",
  },
  resend: {
    flexDirection: "row",
  },
  underline: {
    textDecorationLine: "underline",
  },
  InputUnderline: {
    color: baseColors.sucessTextColor,
    fontSize: 14,
  },
  BtnDiv: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    // borderWidth:1,
    height: deviceHeight / 6 - 25,
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // borderWidth:1,
    width: deviceWidth / 1 - 20,
  },
  ButtonSty: {
    elevation: 8,
    backgroundColor: baseColors.secondaryColor,
    borderRadius: 20,
    paddingVertical: 12.5,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    width: 130,
  },
  TextSty: {
    fontSize: 18,
    color: "#fff",
    // fontWeight: "600",
    alignSelf: "center",
    textTransform: "uppercase",
    textAlign: "center",
  },
  NextBtn: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    width: 130,
  },
  TextSty: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "600",
    alignSelf: "center",
    textTransform: "uppercase",
    borderRadius: 50,
    textAlign: "center",
  },
});
export default styles;
