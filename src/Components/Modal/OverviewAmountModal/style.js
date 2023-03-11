import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  Text: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  modal: {
    backgroundColor: baseColors.lightColor,
    borderRadius: 20,
  },
  modalView: {
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
    alignItems: "center",
    justifyContent: "center",
    width: deviceWidth / 1.1,
    height: deviceHeight / 3,
    paddingVertical: 10,
    borderRadius: 20,
  },

  modalViewText: {
    color: baseColors.darkTextColor,
  },

  modalIcon: {
    color: baseColors.primaryColor,
  },

  TextButton: {
    textAlign: "center",
  },
  Text: {
    color: baseColors.darkTextColor,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  TextCode: {
    color: baseColors.darkTextColor,
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 3,
  },
  TextCodeNumber: {
    color: baseColors.darkTextColor,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
    paddingVertical: 3,
  },
  TextAmountView: {
    paddingVertical: 3,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderColor: baseColors.secondaryColor,
    borderRadius: 50,
    borderWidth: 2,
  },
  TextAmount: {
    color: baseColors.darkTextColor,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  ButtonPrimary: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: deviceWidth / 1.3,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextPrimary: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
  ButtonLight: {
    elevation: 8,
    backgroundColor: baseColors.lightColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: deviceWidth / 1.3,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextLight: {
    color: baseColors.secondaryTextColor,
    fontWeight: "bold",
  },
  ButtonSecondary: {
    elevation: 8,
    backgroundColor: baseColors.secondaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: deviceWidth / 1.3,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextSecondery: {
    color: baseColors.lightColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
