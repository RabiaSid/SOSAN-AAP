import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

function index({placeholder, keyboardType, secureTextEntry}) {
  const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 50,
      padding: 10,
    },
  });

export default index