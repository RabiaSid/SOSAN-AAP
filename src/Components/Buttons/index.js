import React from 'react';
import baseColors from '../../Constant/color';
import {
  StyleSheet, 
  TouchableOpacity, 
  Text
} from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

function index({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>  
);
  
}


const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12
    
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default index