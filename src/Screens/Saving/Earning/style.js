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
  headerContainer:{
    height: 60, 
    marginTop: 30, 
    width: deviceWidth/1,
    paddingHorizontal:4,
    

},
 
  screenMiddle: {
    width: deviceWidth / 1-10,
    flexDirection:'column',
    alignItems: "center",
    justifyContent:'center',
    
  },
  Listmain: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'center',
    width: deviceWidth / 1 - 30,
    paddingVertical: 10,
    marginVertical:10
    
  },
  ListBottom: {
    borderBottomWidth:0.5,
    borderBottomColor: baseColors.darkColor,
    width: deviceWidth / 1.2,

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
  text:{
    color:baseColors.darkColor,
    height:30,
    fontSize : 14,
  },

  items: {
    backgroundColor: baseColors.lightColor,
    borderRadius: 10,
    width: deviceWidth / 1,
    paddingHorizontal: 20,
    flexDirection: "column",
    marginVertical:10,
    
  },
  itemsView: {
    flexDirection: "column",
    elevation: 8,
    width: deviceWidth / 2 - 30,
    backgroundColor: baseColors.primaryMiddleColor,
    borderColor: baseColors.primaryMiddleColor,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
    paddingVertical: 12,
    marginHorizontal: 5,
    marginVertical: 15,
    height: 80,
  },
 
  itemsViewText: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    fontSize : 14,
  },
  itemsViewTextLight:{
    color: baseColors.lightTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 4,
    fontSize : 20,
  },
  
  
  RefreshRow:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent:'flex-end',
    width:deviceWidth/1,
    paddingRight:25,
  },
  ActivityView:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height:70,
    width:deviceWidth/1-40,
    backgroundColor:baseColors.LightSecondaryColor,
    borderRadius:15,
    marginTop:10
  },
  ActivityImage:{
    height: 50, 
    width: 50, 
    borderRadius: 50 
  },
  textColorSuccess: {
    color: baseColors.sucessTextColor,
  },
  textColorDanger: {
    color: baseColors.dangerTextColor,
  },
  ListTitle:{
    color:baseColors.darkTextColor,
    fontWeight:'bold',
    fontSize : 18,
    paddingLeft:10

  },
});
