import React from "react";
import { View, Text, ScrollView, Dimensions , FlatList } from "react-native";
import GradientBackground from "../../../../Components/Gradient/LinearBackground/index";
import AppHeader from "../../../../Components/AppHeader/index";
import SearchField from "../../../../Components/SearchField/index";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AppointmentCardData } from '../../../../Config/index';
import styles from "./style.js"
import baseColors from "../../../../Constant/color";
import AppointmentCard from "../../../../Components/Cards/AppointmentCard/index";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
function Appointments() {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <GradientBackground styles={styles.LinearGradient}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginHorizontal: 10,paddingVertical:15 }}>
              <View>
              <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={{ color: baseColors.lightTextColor }}
                
              onPress={() => {
                navigation.goBack("Feed");
              }}
              />
              </View>
              <Text style={styles.HeadingText}>Appointment</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{
                  fontSize: 12,
                  paddingEnd: 5,
                  color: baseColors.lightColor
                }}>Today</Text>
                <Ionicons name="menu-outline" size={20} color="black" />
              </View>
            </View>
            <View>
              <SearchField placeholder="search for message" styles={styles.SearchField} />
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
     
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{
            flexDirection: 'column',
            width: deviceWidth / 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <FlatList
              data={AppointmentCardData}
              renderItem={({ item }) => <AppointmentCard data={item} />
              }
            />
          </View>
        </View>
      </View>
      </View>
        
      </ScrollView>
      </View>
  );
}

export default Appointments