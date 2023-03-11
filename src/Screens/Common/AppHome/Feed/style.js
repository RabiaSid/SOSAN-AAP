import { StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: baseColors.lightColor,
    height: deviceHeight / 1,
  },
  headerContainer: {
    backgroundColor: baseColors.lightColor,
    height: 170,
    marginTop: 35,
    width: deviceWidth / 1,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  headerContainerView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    width: deviceWidth / 1,
  },
  HeaderFirstRow: {
    width: deviceWidth / 1.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 35,
  },
  HeaderSecondRow: {
    width: deviceWidth / 3.8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemsMainView: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  SearchField: {
    height: 50,
    margin: 12,
    borderColor: baseColors.lightColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
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
