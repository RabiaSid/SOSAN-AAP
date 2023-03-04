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
  LinearGradient: {
    borderColor: baseColors.lightColor,
    height: 170,
    height: deviceHeight / 4.5,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
  },

  screenMiddle: {
    width: deviceWidth / 1 - 10,
    height: deviceHeight / 1,
    marginVertical: 70,
    flexDirection: "column",
  },
  items: {
    backgroundColor: baseColors.lightColor,
    borderRadius: 10,
    width: deviceWidth / 1,
    flexDirection: "column",
    marginVertical: 20,
  },
  ListTitle: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 15,
  },
  ViewRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  GradientView: {
    flexDirection: "column",
    alignItems: "center",
    width: deviceWidth / 1.1,
    height: deviceHeight / 2.4,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  SearchField: {
    width: deviceWidth / 1.1,
    height: 40,
    borderRadius: 20,
  },
  ListView: {
    flexDirection: "row",
    width: deviceWidth / 1.1,
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomColor: baseColors.lightColor,
    borderBottomWidth: 2,
    paddingVertical: 7,
  },
  ListImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  ListText: {
    color: baseColors.lightTextColor,
    fontSize: 15,
  },
  LastListView: {
    flexDirection: "row",
    width: deviceWidth / 1.1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 7,
  },
});
