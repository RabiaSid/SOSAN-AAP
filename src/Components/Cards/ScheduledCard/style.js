import { Dimensions, StyleSheet } from "react-native";
import baseColors from "../../../Constant/color";
const deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  CardStyling: {
    backgroundColor: "#fff",
    // padding: 5,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 5,
    elevation: 3,
    width: deviceWidth / 1 - 30,
  },
  item: {
    alignItems: "center",
    width: 300,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 15,
    paddingVertical: 4,
  },
  TitleHead: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  ItemDisc: {
    flexDirection: "row",
  },
  img: {
    height: 30,
    width: 120,
    justifyContent: "center",

    // borderRadius: 50,
  },
  ButtonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  ButtonSucess: {
    elevation: 0,
    backgroundColor: baseColors.sucessColor,
    width: 70,
    height: 27,
    borderRadius: 5,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    color: baseColors.lightColor,
  },
  ButtonText: {
    color: baseColors.lightTextColor,
  },
  ButtonReject: {
    elevation: 0,
    backgroundColor: baseColors.dangerTextColor,
    width: 70,
    height: 27,
    borderRadius: 5,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    color: baseColors.lightColor,
  },
  iconsSty: {
    flexDirection: "column",
  },
  LoginBtn: {
    elevation: 8,
    backgroundColor: baseColors.dangerTextColor,
    borderRadius: 5,
    width: 130,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  NextBtn: {
    elevation: 8,
    backgroundColor: baseColors.sucessColor,
    borderRadius: 5,
    width: 130,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginTextSty: {
    color: baseColors.lightColor,
    textAlign: "center",
  },
});
