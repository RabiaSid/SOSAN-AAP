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
    paddingVertical:8
},
  LinearGradient: {
    
    borderColor: baseColors.lightColor,
    height: 170,
    height: deviceHeight / 4.5,
    width: deviceWidth / 1,
    borderBottomLeftRadius:27,
    borderBottomRightRadius:27
  },
  

  screenMiddle: {
  
    width: deviceWidth / 1-10,
    height: deviceHeight / 1,
    flexDirection:'column',
    
  
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
    paddingVertical:4,
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
}
  
});
