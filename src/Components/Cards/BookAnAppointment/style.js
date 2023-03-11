import { Dimensions, StyleSheet } from "react-native";
import baseColors from "../../../Constant/color";
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: 15,
    paddingVertical: 10,
    marginVertical: 10,
    width: deviceWidth / 1 - 20,
    backgroundColor: baseColors.lightColor,
    elevation: 4,
  },
  imgView: {
    flexDirection: "column",
  },
  imgText: {
    flexDirection: "column",
    alignItems: "center",
  },
  imageSty: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  listItem: {
    flexDirection: "column",
    width: deviceWidth / 1.4,
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 2,
  },

  icon: {
    paddingRight: 10,
    paddingTop: 5,
    color: baseColors.secondaryTextColor,
  },
  id: {
    color: "gray",
  },
  idView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: deviceWidth / 2.5,
    paddingVertical: 2,
  },
  idViewTwo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: deviceWidth / 2.5,
    paddingVertical: 2,
  },
  ButtonPrimary: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 9,
    paddingHorizontal: 12,
    width: deviceWidth / 1.5,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextPrimary: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
});
