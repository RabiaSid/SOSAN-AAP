import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  MainConatiner: {
    
    borderColor: baseColors.lightColor,
    flexDirection: "column",
    width: deviceWidth / 1 - 40,
    paddingVertical:10,
   
  },
  formText: {
    paddingLeft: 10,
  },
  TopImage:{
    justifyContent: "center",
    alignItems: "center",
  },
  TextStyle: {
    color: "#d3d3d3",
    textAlign: "center",
    marginVertical: 5,
  },
  columnImages: {
    height: 150, 
    width:300, 
    borderRadius: 10, 
    resizeMode: "cover" 
  },
  RowImages: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-evenly",
    marginVertical: 10
  },
  

  ImgSty: {
    borderRadius: 5,
    height: 80,
    width: 90,
  },
});