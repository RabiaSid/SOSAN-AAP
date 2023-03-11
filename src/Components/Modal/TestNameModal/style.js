import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  Text: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 5,
    width: deviceWidth / 1.4,
    paddingLeft: 10,
  },
  modal: {
    backgroundColor: baseColors.lightColor,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: baseColors.sucessColor,
    width: deviceWidth / 1.3,
    height: deviceHeight / 3,
  },
  modalView: {
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 30,
  },
  modalViewText: {
    color: baseColors.darkTextColor,
  },
  ImgView: {
    borderWidth: 1,
    borderColor: baseColors.sucessColor,
    borderRadius: 100,
    height: 130,
    width: 120,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  ImgViewLittle: {
    width: deviceWidth / 1.4,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: baseColors.primaryMiddleColor,
    justifyContent: "center",
    alignItems: "center",
  },

  ImageStyling: {
    height: 60,
    width: 70,
    marginBottom: 10,
  },
  modalIcon: {
    color: baseColors.primaryColor,
  },
  ButtonText: {
    color: baseColors.lightColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  LoginBtn: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 20,
    width: deviceWidth / 1 - 90,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginTextSty: {
    color: baseColors.lightColor,
    fontWeight: "bold",
    fontSize: 20,
  },
  ImgText: {
    fontSize: 18,
    textAlign: "center",
    color: baseColors.primaryColor,
    width: 100,
  },
});
