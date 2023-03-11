import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../../Constant/color";

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
    backgroundColor: baseColors.lightColor,
    marginTop: 35,
    width: deviceWidth / 1,
  },

  // screen: {
  //   flexDirection: "column",
  //   justifyContent: "center",
  // },
  imageStyle: {
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 80,
  },
  Button: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  TextSecondary: {
    color: baseColors.secondaryTextColor,
    fontWeight: "bold",
  },
  TextDanger: {
    color: baseColors.dangerTextColor,
    fontWeight: "bold",
  },
  Listmain: {
    flexDirection: "column",
    alignItems: "center",
    width: deviceWidth / 1,
    paddingVertical: 10,
  },
  ListBottom: {
    borderBottomWidth: 0.3,
    borderBottomColor: baseColors.secondaryTextColor,
    width: deviceWidth / 1.1,
    justifyContent: "center",
    alignItems: "center",
  },
  Listitems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: deviceWidth / 1.2,
    marginVertical: 2,
    paddingVertical: 2,
  },
});
