import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import AppHeader from "../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import DarkGradient from "../../../Components/Gradient/DarkGradient";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../Components/Buttons/index";
import { AvatarPerson2 } from "../../../Assets/images";
import AppointmentID from "../../../Components/Cards/AppointmentID/index";
import { useState } from "react";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AppointmentDoctor() {
  const [switchValue, setswitchValue] = React.useState(true);
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
              <TouchableOpacity onPress={() => Navigation.navigate("Feed")}>
                <Ionicons
                  name="chevron-back-sharp"
                  size={37}
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
                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
              >
                Appointment
              </Text>
            </View>
            <View
              style={{
                width: deviceWidth / 5,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <AntDesign
                name="exclamationcircleo"
                size={20}
                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
              />
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
          // paddingHorizontal:10
        }}
      >
        <View style={styles.screenMiddle}>
          <View style={styles.borderView}>
            {switchValue !== true ? (
              <View style={styles.item}>
                <View style={styles.imgView}>
                  <Image source={AvatarPerson2} style={styles.imageSty} />
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.title}>Kianna Levin</Text>
                  <Text style={styles.email}>General Practitioner</Text>
                  <View style={styles.idView}>
                    <View style={{flexDirection:'row'}}>
                  <MaterialIcons name="lock-outline" size={18}  style={{color: baseColors.primaryColor}} />
                    <Text style={styles.id}>3 year</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                  <MaterialIcons name="lock-outline" size={18} color="black" style={{color: baseColors.sucessColor}} />
                    <Text style={styles.id}>92%</Text>
                    </View>
                  </View>
                </View>
                <View>
                <AntDesign name="heart" size={24} color="black" style={styles.icon}/>
                </View>
              </View>
            ) : (
              <View style={styles.item}>
                <View style={styles.imgView}>
                  <Image source={AvatarPerson2} style={styles.imageSty} />
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.title}>Kianna Levin</Text>
                  <Text style={styles.email}>General Practitioner</Text>
                  <View style={styles.idViewTwo}>
                  <MaterialIcons name="lock-outline" size={18}  style={{color: baseColors.primaryColor}} />
                    <Text style={styles.id}>3 year</Text>
                  </View>
                </View>
                <View>
                <AntDesign name="heart" size={24} color="black" style={styles.icon}/>
                </View>
              </View>
            )}
          </View>

          <View>
            <View style={styles.paymentView}>
              <View style={styles.paymentViewItems}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    height: deviceHeight / 1.8,
                    width: deviceWidth / 1,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      width: deviceWidth / 1.1,
                    }}
                  >
                    <Text
                      style={{
                        paddingBottom: 20,
                        fontSize: 16,
                        fontWeight: "700",
                      }}
                    >
                      What Kind of Appointment You Want?
                    </Text>

                    <View
                      style={{
                        flexDirection: "row",
                        width: deviceWidth / 1.2,
                        justifyContent: "space-around",
                      }}
                    >
                      <Button
                        styles={{
                          borderWidth: 1.5,
                          paddingVertical: 15,
                          paddingHorizontal: 12,
                          borderRadius: 7,
                          borderColor: baseColors.secondaryColor,
                        }}
                        onPress={(value) => setswitchValue(true)}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontSize: 14, fontWeight: "700" }}>
                            What Kind{" "}
                          </Text>
                          <View style={{ paddingVertical: 10 }}>
                            <DarkGradient
                              styles={{
                                width: 47,
                                height: 47,
                                borderRadius: 50,
                                padding: 1,
                              }}
                            >
                              <MaterialCommunityIcons
                                name="camera-iris"
                                style={{ width: 46, height: 46 }}
                                size={45}
                                color="white"
                              />
                            </DarkGradient>
                          </View>
                          <Text style={{ fontSize: 10 }}>
                            Appointment You Want?
                          </Text>
                        </View>
                      </Button>

                      <Button
                        styles={{
                          borderWidth: 1.5,
                          paddingVertical: 15,
                          paddingHorizontal: 12,
                          borderRadius: 7,
                          borderColor: baseColors.secondaryColor,
                        }}
                        onPress={(value) => setswitchValue(false)}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontSize: 14, fontWeight: "700" }}>
                            What Kind
                          </Text>

                          <MaterialCommunityIcons
                            name="home-plus-outline"
                            size={47}
                            style={{
                              color: baseColors.primaryColor,
                              paddingVertical: 10,
                            }}
                          />
                          <Text style={{ fontSize: 10 }}>
                            Appointment You Want?
                          </Text>
                        </View>
                      </Button>
                    </View>
                  </View>
                </View>

                <View style={{ height: deviceHeight / 7 }}>
                  <DarkGradient styles={styles.Button}>
                    <Text
                      style={styles.ButtonText}
                      onPress={() => Navigation.navigate("SelectDateAppointment")}
                    >
                      Next
                    </Text>
                  </DarkGradient>
                </View>
              </View>
            </View>
          </View>
          <View></View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default AppointmentDoctor;
