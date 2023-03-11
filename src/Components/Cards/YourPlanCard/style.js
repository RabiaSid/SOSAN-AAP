import { Dimensions, StyleSheet } from "react-native";
import baseColors from "../../../Constant/color";
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  ScreenContainer: {
    borderWidth: 2,
    marginTop: 15,
    borderRadius: 10,
    borderColor: baseColors.lightGreyColor,
    elevation: 6,
    backgroundColor: baseColors.LightSecondaryColor,
  },
  ScreenTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 55,
    width: deviceWidth / 1 - 20,
  },
  ImageStyling: {
    height: 30,
    width: 120,
  },
  textStyling: {
    color: "#fff",
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  TouchButton: {
    elevation: 8,
    backgroundColor: baseColors.sucessColor,
    borderRadius: 5,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    marginVertical: 20,
  },
  ButtonText: {
    color: baseColors.lightTextColor,
    flexDirection: "column",
    textAlign: "center",
    fontSize: 14,
  },
  CardRow: {
    flexDirection: "row",
  },
  TextCardRow: {
    fontSize: 18,
    paddingHorizontal: 15,
  },
});
