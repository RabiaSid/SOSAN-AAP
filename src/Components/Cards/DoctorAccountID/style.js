import { Dimensions, StyleSheet } from "react-native";
import baseColors from "../../../Constant/color";
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  Container: {
    flexDirection: "column",
    // paddingVertical:10
  },
  item: {
    flexDirection: "row",
    width: deviceWidth / 2,
  },
  imgDiv: {
    flexDirection: "row",
    width: deviceWidth / 2,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
  },
  titleTwo: {
    fontSize: 15,
    color: "gray",
  },
  imageSty: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  DivTwo: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: deviceWidth / 2 - 20,
    paddingVertical: 10,
    marginTop: 5,
  },
  id: {
    color: "gray",
  },
});
