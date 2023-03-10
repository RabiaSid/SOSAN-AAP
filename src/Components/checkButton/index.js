import React from "react";
import { Checkbox } from "react-native-paper";

function CheckButton({value}) {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      status={checked ? "checked" : "unchecked"}
      value={value}
      onPress={() => {
        setChecked(!checked);
      }}
      
    />
  );
}

export default CheckButton;
