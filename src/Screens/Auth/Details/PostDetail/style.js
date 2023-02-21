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
  headerContainer:{ 
    backgroundColor:baseColors.sucessColor,
    height: 60, 
    marginTop: 35, 
    width: deviceWidth/1,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    paddingVertical:8,
 
},

  screenMiddle: {
    width: deviceWidth / 1,
    height: deviceHeight / 1.1,
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    
  
  },
  ListBottom: {
    flexDirection: "row",
    width: deviceWidth / 1.2,
    paddingTop:40,
    paddingBottom:10
  },
  Listitems: {
    flexDirection: 'column',
    width: deviceWidth / 1.2,
    
  },
  textHeading:{
    color:baseColors.darkColor,
    height:30,
    fontSize : 20,
    fontWeight: 'bold'
  },
  textHeadingPrimary:{
    color:baseColors.primaryColor,
    fontSize : 20,
    fontWeight: 'bold',
  },
  text:{
    color:baseColors.darkColor,
    height:30,
    fontSize : 14,
  },
  ActivityImage:{
    height: 50, 
    width: 50, 
    borderRadius: 50 
  },
  formText: {
    paddingLeft: 20,
  },
  InputField: {
    height: 40,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  InputFieldAbout: {
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },
  Button: {
    elevation: 5,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 30,
    marginVertical:10,
    width: deviceWidth / 1 - 50,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  textColor:{
    color:baseColors.lightTextColor,
    fontWeight: "bold",
  },
  textColorSuccess: {
    color: baseColors.sucessTextColor,
  },
  textColorDanger: {
    color: baseColors.dangerTextColor,
  },
  
});
