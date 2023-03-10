import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import SpecialistAndDiagnostics from "../../../../Components/SwitchSelector/SpecialistAndDiagnostics"
import { MaterialIcons } from '@expo/vector-icons';
import DarkGradient from '../../../../Components/Gradient/DarkGradient'
import { useNavigation } from "@react-navigation/native";


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SpecialistAndDiagnosticsHospital() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            <View
              style={{
                width: deviceWidth / 4,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={{ color: baseColors.lightTextColor }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: deviceWidth / 2,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: baseColors.lightTextColor,
                  fontSize: 16,
                }}
              >
                Appointments
              </Text>
            </View>
          </View>
        </AppHeader>
      </View>
      {/* <ScrollView> */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.screenMiddle}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          >
            
            <View style={{ height: deviceHeight / 1 , marginBottom:170}}>
              <SpecialistAndDiagnostics/>

              <View style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              width: deviceWidth / 1 - 40,

            }}>

              <DarkGradient
                styles={{
                  elevation: 8,
                  backgroundColor: baseColors.sucessColor,
                  borderRadius: 50,
                  padding: 10,
                  // paddingHorizontal: 12,
                  width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 60,
                  // marginVertical: 20,
                }}>
                <MaterialIcons name="add" size={40} color="white" onPress={() => {
                  Navigation.navigate("AddSpecializationHospital");
                }} />
              </DarkGradient>
            </View>  
            </View>
          </ScrollView>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default SpecialistAndDiagnosticsHospital;
