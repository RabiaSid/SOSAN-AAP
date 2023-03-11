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
    backgroundColor: baseColors.lightColor,
    height: 80,
    marginTop: 35,
    width: deviceWidth / 1,
    paddingVertical: 8,
    marginBottom: 3,
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
    width: deviceWidth / 1 - 10,
    flexDirection: "column",
    alignItems: "center",
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
});
