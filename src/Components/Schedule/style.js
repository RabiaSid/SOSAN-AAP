import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  screenContainer: {
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "center",
    backgroundColor: baseColors.lightColor,
  },
  Text: {
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 10,
  },
  scheduleMain: {
    width: deviceWidth / 1 - 60,
    // flex:1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: baseColors.lightColor,
    borderColor: baseColors.secondaryColor,
    borderWidth: 1,
    borderRadius: 20,
    elevation: 2,
  },
  schedulecolumn: {
    flexDirection: "column",
  },
  scheduleDay: {
    paddingVertical: 14,
  },
  scheduleTiming: {
    paddingVertical: 14,
  },
});
