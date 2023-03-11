import { Dimensions, StyleSheet } from "react-native";
import baseColors from "../../../Constant/color";
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  Container: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 1,
    backgroundColor: baseColors.LightSecondaryColor,
    elevation: 4,
    borderRadius: 10,
    width: deviceWidth / 1 - 25,
    borderColor: baseColors.lightColor,
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    // width: deviceWidth / 1-50,
  },
  imgDiv: {
    flexDirection: "row",
    width: deviceWidth / 1 - 99,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    // borderWidth:1,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  titleTwo: {
    fontSize: 15,
    color: "gray",
  },
  imageSty: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  DivTwo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    // borderWidth:1,
    width: deviceWidth / 4 - 10,
  },
  id: {
    color: "gray",
  },
});
