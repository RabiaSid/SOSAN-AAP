import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  SearchField: {
    width: deviceWidth / 1.2,
    height: 37,
    borderRadius: 20,
  },
});
