import { Dimensions, StyleSheet } from "react-native";
import baseColors from "../../../../Constant/color";
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  Container: {
    paddingVertical: 5,
    elevation: 3,
    width: deviceWidth / 1 - 25,
  },
  item: {
    alignItems: "flex-start",
    width: deviceWidth / 1 - 30,
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  listItem: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: baseColors.sucessColor,
    marginBottom: 10,
  },
  TextSty: {
    width: deviceWidth / 1 - 30,
    paddingVertical: 5,
  },
  idName: {
    fontSize: 16,
    borderBottomWidth: 1,
    marginBottom: 10,
    color: "gray",
    borderBottomColor: "gray",
  },
});
