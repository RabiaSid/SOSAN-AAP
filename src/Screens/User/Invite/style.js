import baseColors from "../../../Constant/color";
import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    paddingTop: 36,
    backgroundColor: baseColors.lightColor,
  },
  screenBackground: {
    // backgroundColor: baseColors.primaryColor,
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flexDirection: "column",
  },
  headerContainer: {
    width: deviceWidth / 1,
    height: deviceHeight / 6,
  },
  TextLight: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
  middleScreen: {
    height: deviceHeight / 1.4,
    width: deviceWidth / 1,
    borderRadius: 30,
    backgroundColor: baseColors.lightColor,
    paddingTop: 30,
  },
  EmailSecondaryText: {
    color: baseColors.secondaryTextColor,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 10,
    width: deviceWidth / 1.2,
  },
  LinkInput: {
    borderColor: baseColors.sucessColor,
    borderWidth: 2,
    flexDirection: "row",
    borderColor: baseColors.sucessColor,
    borderWidth: 2,
    height: 40,
    borderRadius: 20,
    width: deviceWidth / 1.2,
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
  LinkInputField: {
    width: deviceWidth / 1.4,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingLeft: 15,
  },
  LinkInputButton: {
    width: deviceWidth / 9.2,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: baseColors.sucessColor,
    borderWidth: 2,
    backgroundColor: baseColors.sucessColor,
    justifyContent: "center",
    alignItems: "center",
  },
  SocialSecondaryText: {
    color: baseColors.secondaryTextColor,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
    padding: 15,
    width: deviceWidth / 1.2,
  },
  SocialIconView: {
    flexDirection: "row",
    width: deviceWidth / 1 - 50,
    marginTop:15
  },
  SocialIconItemsRow: {
    width: deviceWidth / 3.5,
    height: 70,
    justifyContent:'center',
    alignItems:'center'
  },
  IconViewPrimary:{
    height:60,
    width:55,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:baseColors.primaryColor,
    borderRadius:12
  },
  IconViewSucess:{
    height:60,
    width:55,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:baseColors.sucessColor,
    borderRadius:12
  },
  IconViewLightPrimary:{
    height:60,
    width:55,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:baseColors.gradientprimaryColor,
    borderRadius:12
  }
});
export default styles;
