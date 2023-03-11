import React from "react";
import baseColors from "../../../Constant/color";
import _ from "lodash";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const InformationDetailList = ({
  children,
  styles: customStyle,
  TextStyle: customStyleText,
  TitleTextSty: custromStyleTitle,
}) => {
  // for button container styling
  let styles = defaultStyles.appViewContainer;
  if (!_.isEmpty(customStyle)) {
    styles = { styles, ...customStyle };
  }
  // for text styling
  let TextStyle = defaultStyles.appViewText;
  if (!_.isEmpty(customStyleText)) {
    TextStyle = { TextStyle, ...customStyleText };
  }
  // for Title styling
  let TitleTextSty = defaultStyles.appViewTitle;
  if (!_.isEmpty(custromStyleTitle)) {
    TitleTextSty = { TitleTextSty, ...custromStyleTitle };
  }
  return (
    <View style={styles.appViewContainer}>
      <View
        style={{ flexDirection: "row", borderWidth: 2, borderColor: "blue" }}
      >
        <Text style={styles.appViewTitle}>{children}</Text>
      </View>
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  appViewContainer: {
    // width:200 ,
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: baseColors.sucessTextColor,
  },
  appViewTitle: {
    fontSize: 18,
    color: baseColors.LightSecondaryColor,
  },
});
