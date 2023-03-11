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
    padding: 20,
    backgroundColor: baseColors.lightColor,
  },
  Text: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 20,
  },
  screenTop: {
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 20,
  },
  formText: {
    paddingLeft: 20,
  },
  ScreenMap: {
    border: "2px",
    borderColor: baseColors.dangerTextColor,
    height: 100,
    width: 60,
  },
  lightTextView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: deviceWidth / 1 - 80,
    marginVertical: 2,
  },
  lightText: {
    paddingLeft: 20,
    color: baseColors.secondaryTextColor,
    textAlign: "center",
    fontWeight: "bold",
  },
  Mapping: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  TextPrimary: {
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 10,
    color: baseColors.primaryTextColor,
  },
  InputStyling: {
    height: 40,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  AboutSty: {
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },
  WebText: {
    height: 40,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    width: 150,
  },
  WebAbout: {
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },
  LoginBtn: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 10,
    width: deviceWidth / 1 - 90,
    justifyContent: "center",
    alignItems: "center",
  },
  ImgSty: {
    height: 200,
    width: 300,
    borderRadius: 15,
  },
  LoginTextSty: {
    color: baseColors.lightColor,
    fontWeight: "bold",
    // textTransform: "uppercase",
    fontSize: 20,
  },
  locationView: {
    flexDirection: "row",
    // width:deviceWidth / 1,
    justifyContent: "center",
    alignItems: "center",
  },
  institutionView: {
    flexDirection: "row",
    flex: 1,
    width: deviceWidth / 1,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  institutionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
