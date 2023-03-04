import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../../Theme/Colors/Colors";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  screenContainer: {
    // height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseColors.lightColor,
  },
  headerContainer: {
    backgroundColor: baseColors.sucessColor,
    // height: 60, 
    marginTop: 28,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 8
  },



  screenMiddle: {

    width: deviceWidth / 1 - 15,
    // height: deviceHeight / 1,
    flexDirection: 'column',



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
  CardStyling: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    paddingVertical: 10,
    marginVertical: 5,
    elevation: 3,
  },
  item: {
    alignItems: 'flex-start',
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 4,
    borderRadius: 15
  },
  TitleHead: {
    flexDirection: "column"
  },
  title: {
    fontWeight: 'bold',
  },
  ItemDisc: {
    flexDirection: "row",
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  ButtonView: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center'
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
  FirstView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  FollowTitle: {
    fontSize: 16,
    color: baseColors.primaryColor,
    marginHorizontal: 10,
    //  top: 5,
    fontWeight: 'bold'
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
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
});