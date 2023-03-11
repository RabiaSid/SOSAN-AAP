import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  Text: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 10,
  },
  modal: {
    backgroundColor: baseColors.lightColor,
    borderRadius: 10,
  },
  modalView: {
    flexDirection: "row",
    elevation: 7,
    width: deviceWidth / 2 - 30,
    backgroundColor: baseColors.lightColor,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginHorizontal: 2,
    paddingVertical: 12,
    marginHorizontal: 5,
    marginVertical: 15,
  },
  modalViewReverse: {
    flexDirection: "row",
    elevation: 7,
    width: deviceWidth / 2 - 30,
    backgroundColor: baseColors.lightColor,
    borderColor: baseColors.primaryColor,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 2,
    marginVertical: 15,
  },
  modalViewText: {
    color: baseColors.primaryColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 5,
  },
  modalViewTextReverse: {
    color: baseColors.sucessColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 5,
  },
  modalIcon: {
    color: baseColors.primaryColor,
  },
  modalIconReverse: {
    color: baseColors.sucessColor,
  },
});
