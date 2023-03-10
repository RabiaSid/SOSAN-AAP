import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  headerContainer: {
   
    backgroundColor: baseColors.lightColor,
    height: 170,
    marginTop: 35,
    width: deviceWidth / 1,
    borderBottomEndRadius:30,
    borderBottomStartRadius:30,
    

  },
  header: {

  },
  SearchField: {
    height: 50,
    margin: 12,
    borderColor: baseColors.lightColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  LinearGradientContainer: {
    position: "absolute",
    flex: 1,
    width: deviceWidth / 1,
    height: deviceHeight / 1,
    
  },
  Button: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: baseColors.lightColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  items: {
    backgroundColor: baseColors.lightColor,
    borderRadius: 10,
    width: deviceWidth / 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  itemsView: {
    flexDirection: "row",
    elevation: 7,
    width: deviceWidth / 2 - 30,
    backgroundColor: baseColors.lightColor,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginHorizontal: 2,
    paddingVertical: 12,
    marginHorizontal: 5,
    marginVertical: 15,
    height: 80,
  },
  itemsViewReverse: {
    flexDirection: "row",
    elevation: 7,
    width: deviceWidth / 2 - 30,
    backgroundColor: baseColors.lightColor,
    borderColor: baseColors.primaryColor,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 2,
    marginVertical: 15,
  },
  itemsViewText: {
    color: baseColors.primaryColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 4,
  },
  itemsViewTextReverse: {
    color: baseColors.sucessColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 4,
  },
  itemsIcon: {
    color: baseColors.primaryColor,
  },
  itemsIconReverse: {
    color: baseColors.sucessColor,
  },
});
