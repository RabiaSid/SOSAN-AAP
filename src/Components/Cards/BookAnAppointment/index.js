import React from "react";
import { View,Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style.js";
import { AvatarPerson2, FlagButtonOne } from "../../../Assets/images/index";
import baseColors from "../../../Constant/color";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import DarkGradient from "../../Gradient/DarkGradient/index";
import { useNavigation } from "@react-navigation/native";

const BookAnAppointment = ({ data }) => {
  const Navigation = useNavigation();
  return (
    <TouchableOpacity
    
      onPress={() => {
        Navigation.navigate(data?.goTo);
      }}
      style={{ flexDirection: "column" }}
    >
      <View style={styles.item}>
        <View style={styles.imgView}>
          <Image source={AvatarPerson2} style={styles.imageSty} />
          <View style={styles.imgText}>
            <Text style={styles.id}>Total</Text>
            <Text style={styles.title}>$ 80</Text>
          </View>
        </View>

        <View style={styles.listItem}>
          <View style={{ paddingLeft: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 2,
              }}
            >
              <Text style={styles.title}>{data?.title}</Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={FlagButtonOne}
                  style={{
                    height: 20,
                    width: 35,
                    marginTop: 7,
                    marginHorizontal: 10,
                  }}
                />
                <AntDesign
                  name="heart"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </View>
            </View>
            <Text style={styles.email}>General Practitioner</Text>
            <View style={styles.idViewTwo}>
              <MaterialIcons
                name="lock-outline"
                size={18}
                style={{ color: baseColors.primaryColor, paddingRight: 5 }}
              />
              <Text style={styles.id}>3 year</Text>
            </View>
            <View style={styles.idViewTwo}>
              <AntDesign
                name="calendar"
                size={18}
                style={{ color: baseColors.sucessColor, paddingRight: 5 }}
              />
              <Text style={{ color: baseColors.secondaryColor, width: 200 }}>
                Available For Next Monday
              </Text>
            </View>
          </View>
          <DarkGradient
            styles={styles.ButtonPrimary}
            onPress={() => {
              Navigation.navigate("AppointmentDoctor");
            }}
          >
            <Text
              style={styles.ButtonTextPrimary}
              onPress={() => {
                Navigation.navigate("PaymentSuccessFull");
              }}
            >
              Book An Appointment
            </Text>
          </DarkGradient>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookAnAppointment;
