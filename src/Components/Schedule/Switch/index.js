import React, {useState} from 'react'
import { View, Switch, StyleSheet } from 'react-native'
import baseColors from '../../../Constant/color';

function SwitchButton() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: baseColors.secondaryColor, true: baseColors.primaryColor}}
        thumbColor={isEnabled ? baseColors.lightColor : baseColors.lightColor }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
export default SwitchButton