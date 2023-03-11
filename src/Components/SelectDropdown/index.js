import React, { useState } from "react";
import { View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import baseColors from "../../Constant/color";

function index() {
  const [selected, setSelected] = useState([]);

  const data = [
    { key: "1", value: "Mobiles" },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
  ];

  return (
    <View>
      <SelectList
        data={data}
        setSelected={setSelected}
        boxStyles={{
          height: 50,
          margin: 10,
          borderColor: baseColors.sucessColor,
          borderWidth: 1,
          borderRadius: 10,
          marginHorizontal: 11,
          padding: 5,
        }}
        dropdownStyles={{
          backgroundColor: baseColors.lightColor,
          marginHorizontal: 10,
          color: baseColors.sucessTextColor,
          borderColor: baseColors.sucessColor,
          borderWidth: 1,
        }}
      />
    </View>
  );
}

export default index;
