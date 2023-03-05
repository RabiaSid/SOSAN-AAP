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
    padding: 20,

    backgroundColor: baseColors.lightColor,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 40,
    marginTop: 35,
    width: deviceWidth / 1.2,
    paddingVertical: 8,
    marginBottom: 3,
  },
  Headeritems: {
    flexDirection: "row",
    alignItems:'center'
  },
  HeaderText: {
    fontSize:17,
    color:baseColors.primaryTextColor
  },

  screenMiddle: {
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 20,
    width: deviceWidth / 1,
  },
  Button: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    width: deviceWidth / 1 - 40,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  
});
