import React from 'react'
import { View,  StyleSheet,   Dimensions, } from 'react-native'
import _ from "lodash";
import baseColors from '../../Constant/color'


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AppHeader({ styles: customStyles, children,}) {
    
    let styles = defaultStyles.headerContainer;
    if (!_.isEmpty(customStyles)) {
      styles = { styles, ...customStyles };
    }
  return (
    <View style={styles}>
      <View style={styles.header}>
      {children}
      </View>
    </View>
  );
}
    
const defaultStyles = StyleSheet.create({
	headerContainer:{
        backgroundColor: baseColors.gradientsucessColor, 
        height: 50, 
        marginTop: 35, 
        width: deviceWidth/1,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        
        
    },
})

export default AppHeader