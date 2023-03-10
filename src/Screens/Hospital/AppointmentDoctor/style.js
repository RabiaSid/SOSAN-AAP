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
    color: baseColors.lightColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  borderView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: baseColors.darkColor,
    width: deviceWidth / 1,
    height: deviceHeight / 6,
    paddingBottom: 20,
    marginVertical: 10,
   
  },
  
  paymentView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: deviceWidth / 1,
    paddingVertical: 20,
  },
  paymentViewItems: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: deviceHeight / 1.5,
  },
  item: {
    alignItems: 'center',
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 15,
    paddingVertical:4,
   marginHorizontal: 10,
   width:deviceWidth/1.1,
},
imgView:{
    flexDirection: 'column'
},
imageSty:{
    height: 80,
    width:80,
    borderRadius: 50
},
listItem:{
    flexDirection: 'column',
    width:deviceWidth/2,
},
email:{
  fontSize: 14,
  color: "gray",
},
title:{
fontWeight: 'bold',
fontSize: 20,
paddingVertical:2
},

icon:{
 paddingRight:10,
 paddingTop:5,
 color:baseColors.secondaryTextColor
},
id:{
    color: 'gray'
},
idView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width:deviceWidth/2.5,
    paddingVertical:2
},
idViewTwo:{
  flexDirection: 'row',
  justifyContent:'flex-start',
  width:deviceWidth/2.5,
  paddingVertical:2
}
  
});
