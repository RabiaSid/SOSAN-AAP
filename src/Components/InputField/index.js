import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import _ from "lodash";
import baseColors from "../../Constant/color";

function index({
  placeholder,
  keyboardType,
  secureTextEntry,
  styles: customStyles,
  multiline,
  numberOfLines,
}) {
  const [number, onChangeNumber] = React.useState("");

  let styles = defaultStyles.appButtonContainer;
  if (!_.isEmpty(customStyles)) {
    styles = { styles, ...customStyles };
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={placeholder}
        multiline={multiline}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        numberOfLines={numberOfLines}
      />
    </SafeAreaView>
  );
}
const defaultStyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    textAlignVertical: "top",
  },
});

export default index;
