import * as React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import baseColors from "../../Constant/color";
import _ from "lodash";

const SearchField = ({ placeholder, styles: customStyles, icon }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  let styles = defaultStyles.input;
  if (!_.isEmpty(customStyles)) {
    styles = { styles, ...customStyles };
  }

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles}
      // icon={{direction: 'rtl', color:baseColors.darkColor}}
    />
  );
};

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

export default SearchField;
