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
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 10,
  },
  screen: {
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 30,
  },
  formText: {
    paddingLeft: 20,
  },
  MapText: {
    paddingLeft: 20,
    color: baseColors.secondaryTextColor,
  },
  Map: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  MapImage: {
    height: 200,
    width: 300,
    borderRadius: 15,
  },
  TextPrimary: {
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 10,
    color: baseColors.primaryTextColor,
  },
  InputField: {
    height: 40,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  InputFieldAbout: {
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },
  Button: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    width: deviceWidth / 1 - 40,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
