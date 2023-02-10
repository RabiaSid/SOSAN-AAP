import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import baseColors from "../../../Constant/color";

const TimePicker = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    var minutes = new Date().getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    setCurrentDate(hours + ":" + minutes + " " + ampm);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>{currentDate}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:baseColors.lightColor,
    justifyContent: "center",
    
  },
  textStyle: {
    textAlign: "center",
    color: baseColors.darkColor,
    paddingHorizontal:5,
    marginHorizontal:5
    
  },
});

export default TimePicker;
