import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
  },
  headerContainer: {
    height: deviceHeight / 4,
    marginTop: 35,
    width: deviceWidth / 1,
  },
  LinearGradient: {
    height: deviceHeight / 4.2,
    borderColor: baseColors.lightColor,
    height: deviceHeight / 4.5,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
  },

  HeadingText: {
    color: baseColors.lightTextColor,
    paddingHorizontal: 20,
    fontWeight: "Bold",
    fontSize: 30,
  },
  HearderFirstRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 10,
    paddingVertical: 15,
  },
  HearderSecondRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  HearderSecondRowText: {
    fontSize: 12,
    paddingEnd: 5,
    color: baseColors.lightColor,
  },
  SearchField: {
    height: 45,
    margin: 12,
    borderColor: baseColors.lightColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    color: baseColors.lightGreyColor,
  },
  ScreenMiddleView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  screenMiddle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  MiddleView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  MiddleViewList: {
    flexDirection: "column",
    width: deviceWidth / 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
