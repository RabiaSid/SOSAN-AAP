import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import BookAnAppointment from "../../Components/Cards/BookAnAppointment/index";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import baseColors from "../../Constant/color";
import DarkGradient from "../Gradient/DarkGradient";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AvailabilityComponent() {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
        width: deviceWidth / 1,
        justifyContent: "center",
      }}
    >
      <BookAnAppointment />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: deviceWidth / 1 - 20,
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name="calendar"
            size={18}
            style={{ color: baseColors.sucessColor, paddingRight: 5 }}
          />
          <Text style={{ color: baseColors.secondaryColor, width: 200 }}>
            Available For Next Monday
          </Text>
        </View>
        <View>
          <Text style={{ color: baseColors.primaryColor, width: 200 }}>
            Check Availablity
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: "flex-end",
          width: deviceWidth / 1 - 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: deviceWidth / 1 - 50,
            paddingVertical: 10,
          }}
        >
          <DarkGradient
            styles={styles.ButtonPrimary}
            onPress={() => {
              Navigation.navigate("AppointmentDoctor");
            }}
          >
            <Text
              style={styles.ButtonTextPrimary}
              onPress={() => {
                Navigation.navigate("AppointmentDoctor");
              }}
            >
              Book An Appointment
            </Text>
          </DarkGradient>
          <View style={styles.imgText}>
            <Text style={styles.id}>Total</Text>
            <Text style={styles.title}>$ 80</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: deviceWidth / 1 - 50,
            paddingVertical: 10,
          }}
        >
          <DarkGradient
            styles={styles.ButtonPrimary}
            onPress={() => {
              Navigation.navigate("AppointmentDoctor");
            }}
          >
            <Text
              style={styles.ButtonTextPrimary}
              onPress={() => {
                Navigation.navigate("AppointmentDoctor");
              }}
            >
              Book An Appointment
            </Text>
          </DarkGradient>
          <View style={styles.imgText}>
            <Text style={styles.id}>Total</Text>
            <Text style={styles.title}>$ 80</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonPrimary: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 12,
    width: deviceWidth / 1.7,
    marginVertical: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextPrimary: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
  imgText: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 2,
  },

  id: {
    color: "gray",
  },
});

export default AvailabilityComponent;
