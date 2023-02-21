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
    marginVertical:5,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    height:37,
  },
  ButtonView:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems:"center",
    marginVertical:5,
    paddingTop:10
  },
  TopButton:{
    elevation: 8,
    backgroundColor: baseColors.sucessColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal:2,
    width: deviceWidth/2-33,
    height:40,
    justifyContent: "center",
    alignItems: "center",
  },
  TopButtonText:{
    color:baseColors.lightTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  TopTwoButton:{
    elevation: 8,
    backgroundColor: baseColors.lightColor,
    borderColor:baseColors.sucessColor,
    borderWidth:2,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal:2,
    width: deviceWidth/2-33,
    height:40,
    justifyContent: "center",
    alignItems: "center",
  },
  TopTwoButtonText:{
    color: baseColors.sucessTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  ButtonText: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  ButtonSuccess: {
    elevation: 8,
    backgroundColor: baseColors.sucessColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical:5,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    height:37,
  },
  ButtonSuccessText: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  TextSecondary: {
    color: baseColors.secondaryTextColor,
    fontWeight: "bold",
  },
  TextDanger:{
    color: baseColors.dangerTextColor,
    fontWeight: "bold",
  },
  Listmain: {
    flexDirection: "column",
    alignItems: "center",
    width: deviceWidth / 1 - 30,
    paddingVertical: 10,
  },
  ListBottom: {
    borderBottomWidth: 0.3,
    borderBottomColor: baseColors.secondaryTextColor,
    width: deviceWidth / 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  ListBottomGape:{
    borderBottomWidth: 0.3,
    borderBottomColor: baseColors.secondaryTextColor,
    width: deviceWidth / 1.2,
    justifyContent: "center",
    alignItems: "center",
    marginTop:40
  },
  ListBottomGapeBottom:{
    borderBottomWidth: 0.3,
    borderBottomColor: baseColors.secondaryTextColor,
    width: deviceWidth / 1.2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:40
  },
  Listitems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: deviceWidth / 1.4,
    marginVertical: 2,
    paddingVertical: 2,
  },
});
