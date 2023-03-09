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
    backgroundColor: baseColors.sucessColor,
    height: 60,
    marginTop: 35,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 8,
    marginBottom: 3,
  },
  HeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  HeaderRowitems: {
    width: deviceWidth / 3,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  HeaderRowTextView: {
    width: deviceWidth / 3,
    flexDirection: "row",
    justifyContent: "center",
  },
  HeaderRowText: {
    fontWeight: "bold",
    color: baseColors.lightTextColor,
  },

  screenMiddle: {
    width: deviceWidth / 1 - 10,
    height: deviceHeight / 1,
    flexDirection: "column",
  },
  MiddleViewMain: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
