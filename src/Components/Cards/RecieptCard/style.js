import { Dimensions, StyleSheet } from "react-native";
import baseColors from "../../../Constant/color";
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  CardContainer: {},
  ImgDiv: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: deviceWidth / 1 - 30,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  imgView: {
    flexDirection: "column",
  },
  imageSty: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  listItem: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
  idName: {
    fontWeight: "bold",
    fontSize: 12,
    paddingRight: 10,
  },
  id: {
    color: "gray",
  },
  idView: {
    flexDirection: "row",
  },
});
