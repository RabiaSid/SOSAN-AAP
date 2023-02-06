import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import { styles } from './Style'
import InputField from '../../../Components/InputField'
import baseColors from '../../../Constant/color'
// import { Ionicons } from '@expo/vector-icons';

function CommonDetail() {
  return (
    <ScrollView style={styles.screenContainer}>
        <View style={styles.screenTop}>
        <Text style={styles.Text}>
            Detail
        </Text>
        <Text style={styles.formText}>Institude Name</Text>
        <InputField placeholder="Your Email" 
        styles={{height: 40,
        margin: 12,
        borderColor: baseColors.sucessColor,
      borderWidth: 1,
      borderRadius: 50,
      padding: 10,}}
      ></InputField>
        <Text style={styles.formText}>Enter Your location</Text>
        <InputField placeholder= "location" 
        styles={{height: 40,
          margin: 12,
          borderColor: baseColors.sucessColor,
          borderWidth: 1,
          borderRadius: 50,
          padding: 10,}}
          ></InputField>
        </View>
    </ScrollView >
  )
}

export default CommonDetail