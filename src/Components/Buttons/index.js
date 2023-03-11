import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import _ from "lodash";
import baseColors from "../../Constant/color";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
// #007bff
function index({
  onPress,
  children,
  value,
  styles: customStyles,
  styles_text: customStyles_text,
}) {
  let styles = defaultStyles.appButtonContainer;
  if (!_.isEmpty(customStyles)) {
    styles = { styles, ...customStyles };
  }

  let styles_text = defaultStyles.appButtonText;
  if (!_.isEmpty(customStyles_text)) {
    styles_text = { styles_text, ...customStyles_text };
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles} value={value}>
      <Text style={styles.appButtonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const defaultStyles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: baseColors.lightColor,
    border: baseColors.sucessColor,
    color: baseColors.primaryTextColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    margin: 10,
    width: 100,
    justifyContent: "center",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    borderWidth: 2,
    padding: 10,
    borderColor: baseColors.dangerTextColor,
  },
  appButtonText: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingLeft: 10,
  },
});

export default index;
