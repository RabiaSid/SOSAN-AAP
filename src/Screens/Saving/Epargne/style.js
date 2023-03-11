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
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  TitleRow: {
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  TitleRowImage: {
    width: deviceWidth / 4.1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  Image: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginBottom: 30,
  },
  TitleRowView: {
    flexDirection: "column",
    width: deviceWidth / 2.1,
    justifyContent: "space-evenly",
  },
  TitleTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TitleIconView: {
    flexDirection: "column",
    width: deviceWidth / 4.8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  ButtonRow: {
    flexDirection: "row",
    width: deviceWidth / 1 - 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    // paddingTop: 5,
  },
  ButtonView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  TextButton: {
    textAlign: "center",
  },
  ButtonIcons: {
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: baseColors.lightColor,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  PromoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  promoView: {
    flexDirection: "row",
    width: deviceWidth / 1 - 50,
    height: 40,
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: baseColors.primaryLightColor,
    borderWidth: 1,
    backgroundColor: baseColors.primaryLightColor,
    borderRadius: 20,
    marginVertical: 15,
  },
  promoItems: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  ListTitleRow: {
    paddingVertical: 5,
  },
  ListMainView: {
    paddingLeft: 20,
    paddingVertical: 5,
    // height:deviceHeight/5
  },
  ListTitle: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
  },
  Listmain: {
    flexDirection: "column",
    alignItems: "center",
    width: deviceWidth / 1 - 30,
    paddingVertical: 10,
  },
  textColor: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
  textColorSuccess: {
    color: baseColors.sucessTextColor,
  },
  textColorDanger: {
    color: baseColors.dangerTextColor,
  },
  textColorPrimary: {
    color: baseColors.primaryTextColor,
  },
  textColorSecondaryLight: {
    color: baseColors.lightGreyColor,
  },
  textColorPrimaryLight: {
    color: baseColors.primaryLightColor,
  },
  TextSecondary: {
    color: baseColors.secondaryTextColor,
    fontWeight: "bold",
  },
});
