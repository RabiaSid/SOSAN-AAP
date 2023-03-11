import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../Constant/color";

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
    height: deviceHeight / 1,
    flexDirection: "column",
    paddingVertical: 10,
  },
  Listmain: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: deviceWidth / 2.5,
    // padding: 10,
    // marginVertical:10
  },
  ListBottom: {
    flexDirection: "row",
    // borderBottomWidth:0.5,
    borderBottomColor: baseColors.darkColor,
    width: deviceWidth / 1.2,
  },
  Listitems: {
    flexDirection: "column",
    width: deviceWidth / 1.3,
  },
  textHeading: {
    color: baseColors.darkColor,
    height: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  textHeadingPrimary: {
    color: baseColors.primaryColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: baseColors.darkColor,
    height: 30,
    fontSize: 14,
  },
  ActivityImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 7,
  },
});
