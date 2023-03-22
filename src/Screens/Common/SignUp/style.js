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
    paddingTop: 36,
    backgroundColor: baseColors.lightColor,
  },
  screenBackground: {
    // backgroundColor: baseColors.primaryColor ,
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flexDirection: "column",
    justifyContent: 'center',
    
  },
  headingTop:{
    textAlign:'center',
    fontSize:35,
    fontWeight:'bold',
    color:baseColors.lightTextColor,
    paddingBottom:5

  },
  screenMiddle: {
    height: deviceHeight / 1.2,
    width: deviceWidth / 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop:30,
    backgroundColor: baseColors.lightColor,
  },
  Text: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    fontSize:16,
    textTransform: "uppercase",
    textAlign: "center",
    paddingBottom: 10,
  },
  Textleft: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize:15,
    padding: 10,
  },
  formText: {
    paddingLeft: 20,
  },
  InputField:{
    height: 40,
    marginHorizontal:12,
    marginVertical:5,
    borderColor: baseColors.sucessColor,
    borderWidth: 1.7,
    borderRadius: 50,
    padding: 10,
  },
  modalView: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
    borderRadius: 10,
  },
  modalButton: {
    // flex: 1,
    // flexDirection:'row',
  },
});
