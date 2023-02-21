import React from "react";
import { View, Text, ScrollView } from "react-native";
import GradientBackground from "../../../../Components/Gradient/LinearBackground";
import AppHeader from "../../../../Components/AppHeader/index";
import SearchField from "../../../../Components/SearchField/index";
import styles from "./style.js"

function Appointments() {
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <GradientBackground styles={styles.LinearGradient}>
            <View>
              <Text style={styles.HeadingText}>Chat</Text>
            </View>
            <View>
              <SearchField placeholder="Search" styles={styles.SearchField} />
            </View>
          </GradientBackground>
        </AppHeader>
      </View>
      <ScrollView>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.screenMiddle}>
       {/* <CancelledAppointmentCard /> */}
       <View style={{borderWidth:2, width:160, height:50}}> 
       </View>
        </View>
        
      </View>
      
      </ScrollView>
    </View>
  );
}

export default Appointments