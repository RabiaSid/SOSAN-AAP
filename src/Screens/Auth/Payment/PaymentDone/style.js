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

  screenMiddle: {
    width: deviceWidth / 1,
    height: deviceHeight / 1.1,
    flexDirection: "column",
  },
  Button: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    width: deviceWidth / 1 - 60,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  borderView: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderTopColor: baseColors.darkColor,
    borderBottomColor: baseColors.darkColor,
    width: deviceWidth / 1,
    height: deviceHeight / 6,
    paddingVertical: 10,
    marginVertical: 10,
  },
  borderTextView: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  borderItemsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: deviceWidth / 1.2,
    paddingTop: 10,
  },
  borderDarkText: {
    color: baseColors.darkColor,
    fontWeight: "bold",
    paddingVertical: 2,
  },
  borderDangerText: {
    color: baseColors.dangerTextColor,
    fontWeight: "bold",
    paddingVertical: 1,
  },
  paymentView: {
    flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: deviceWidth / 1,
                paddingVertical: 20,
  },
  paymentViewItems:{
    flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: deviceHeight / 1.5,
  },
  paymentSecondaryText:{
    color: baseColors.secondaryTextColor,
    fontWeight: "bold",
  },
  paymentSuccessText:{
    color: baseColors.sucessTextColor,
    fontWeight: "bold",
    textAlign: "center",
  },
});