import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style.js';
const AppointmentList = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.List}>
        <View style={styles.firstRow}>
          <Text style={styles.title}>Name</Text>
          <Text style={styles.title}>Time</Text>
          <Text style={styles.title}>When or How</Text>
        </View>
        <View style={styles.secondRow}>
          <View style={styles.ListItems}>

            <Text style={styles.textStyling}>Lorem Spam</Text>
            <Text style={styles.textStyling}>Lorem Spam</Text>
            <Text style={styles.textStyling}>Lorem Spam</Text>
            <Text style={styles.textStyling}>Lorem Spam</Text>
          </View>
          <View style={styles.ListItems}>

            <Text style={styles.textStyling}>2 Times a day</Text>
            <Text style={styles.textStyling}>3 Times a day</Text>
            <Text style={styles.textStyling}>Every 6 Hours</Text>
            <Text style={styles.textStyling}>Once a day</Text>
          </View>
          <View style={styles.ListItems}>

            <Text style={styles.textStyling}>After Meal</Text>
            <Text style={styles.textStyling}>After Meal</Text>
            <Text style={styles.textStyling}>After Meal</Text>
            <Text style={styles.textStyling}>After Meal</Text>
          </View>
        </View>
      </View>
    </View>
    
  )
}

export default AppointmentList