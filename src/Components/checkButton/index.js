import React from 'react';
import { Checkbox } from 'react-native-paper';

function index() {
const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      
    />
  )
}

export default index

