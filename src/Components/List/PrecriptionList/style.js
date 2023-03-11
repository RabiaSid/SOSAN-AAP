import { Dimensions, StyleSheet } from "react-native";
import baseColors from "../../../Constant/color";
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  Container: {
    width: deviceWidth / 1 - 30,
    justifyContent: "space-around",
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: baseColors.lightColor,
    borderRadius: 10,
    backgroundColor: baseColors.lightColor,
    borderBottomColor: baseColors.lightGreyColor,
    elevation: 8,
  },
  List: {
    width: deviceWidth / 1,
    marginVertical: 10,
  },
  ListItems1: {
    flexDirection: "column",
  },
  ListItems2: {
    flexDirection: "column",
  },
  ListItems3: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: baseColors.lightGreyColor,
    width: deviceWidth / 1 - 65,
    marginHorizontal: 20,
  },
  secondRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 30,
    alignItems: "center",
    paddingHorizontal: 10,
    width: deviceWidth / 1 - 30,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textStyling: {
    paddingBottom: 1,
    margin: 3,
  },
  textStyling1: {
    paddingBottom: 1,
    margin: 3,
    color: baseColors.dangerTextColor,
  },
});
