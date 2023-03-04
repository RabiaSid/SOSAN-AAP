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
    marginBottom: 3,
  },
  LinearGradient: {
    borderColor: baseColors.lightColor,
    height: 170,
    height: deviceHeight / 4.5,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
  },
  SearchField: {
    width: deviceWidth / 1.1,
    height: 40,
    borderRadius: 20,
    marginVertical: 10,
  },

  screenMiddle: {
    width: deviceWidth / 1 - 20,
    flexDirection: "column",
  },
  items: {
    backgroundColor: baseColors.lightColor,
    borderRadius: 10,
    width: deviceWidth / 1.1,
    flexDirection: "column",
    marginVertical: 10,
  },
  ListTitle: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 15,
  },
  Button: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 10,
    marginVertical: 20,
    width: deviceWidth / 1 - 40,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  
  textColor: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
  textColorSuccess: {
    color: baseColors.sucessTextColor,
  },
  textColorDanger: {
    color: baseColors.dangerTextColor,
  },
});
