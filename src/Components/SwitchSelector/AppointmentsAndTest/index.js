import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import baseColors from "../../../Constant/color";
import { useNavigation } from "@react-navigation/native";
import { PharmacyReservedSelectorData } from "../../../Config";
import {
  Ionicons,
  MaterialCommunityIcons,
  Foundation,
  FontAwesome5,
} from "@expo/vector-icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function index({ children }) {
  const [switchValue, setswitchValue] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SwitchSelector
        initial={0}
        textColor={baseColors.secondaryTextColor} //'#7a44cf'
        selectedColor={baseColors.lightColor}
        bold
        height={50}
        fontSize={16}
        buttonColor={baseColors.sucessColor}
        borderColor={baseColors.sucessColor}
        onPress={(value) => setswitchValue(value)}
        hasPadding
        options={[
          { label: "Appointments", value: false },
          { label: "Test", value: true },
        ]}
      />
      {children}
      <View>
        {switchValue !== true ? (
          <FlatList
            data={PharmacyReservedSelectorData}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AgendaAppointmentDetailPharmacy")
                }
              >
                <View style={styles.ActivityView}>
                  <Image
                    source={item?.image}
                    style={styles.ActivityImage}
                  ></Image>
                  <View style={{ flexDirection: "column" }}>
                    <Text>{item?.title}</Text>
                    <View style={styles.ItemDisc}>
                      <Foundation
                        name="clipboard-pencil"
                        size={15}
                        style={{
                          color: baseColors.primaryColor,
                          paddingRight: 5,
                        }}
                      />
                      <Text>Lower Abdomen</Text>
                    </View>
                    <View style={styles.ItemDisc}>
                      <FontAwesome5
                        name="calendar-alt"
                        size={14}
                        style={{
                          color: baseColors.primaryColor,
                          paddingRight: 5,
                        }}
                      />
                      <Text>Wednesday 1 Aug 2022</Text>
                    </View>
                    <View style={styles.ItemDisc}>
                      <Ionicons
                        name="timer"
                        size={17}
                        style={{
                          color: baseColors.sucessColor,
                          paddingRight: 5,
                        }}
                      />
                      <Text>12:50 Am </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "space-around",
                      height: 110,
                    }}
                  >
                    <Text style={styles.itemsViewText}>ultrasound</Text>
                    <MaterialCommunityIcons
                      name="chat-plus"
                      size={45}
                      style={styles.icon}
                      onPress={() => navigation.navigate("Conversation")}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <FlatList
            data={PharmacyReservedSelectorData}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TestAppointmentDetailPharmacy")
                }
              >
                <View style={styles.ActivityView}>
                  <Image
                    source={item?.image}
                    style={styles.ActivityImage}
                  ></Image>
                  <View style={{ flexDirection: "column" }}>
                    <Text>{item?.title}</Text>
                    <View style={styles.ItemDisc}>
                      <Foundation
                        name="clipboard-pencil"
                        size={15}
                        style={{
                          color: baseColors.primaryColor,
                          paddingRight: 5,
                        }}
                      />
                      <Text>Lower Abdomen</Text>
                    </View>
                    <View style={styles.ItemDisc}>
                      <FontAwesome5
                        name="calendar-alt"
                        size={14}
                        style={{
                          color: baseColors.primaryColor,
                          paddingRight: 5,
                        }}
                      />
                      <Text>Wednesday 1 Aug 2022</Text>
                    </View>
                    <View style={styles.ItemDisc}>
                      <Ionicons
                        name="timer"
                        size={17}
                        style={{
                          color: baseColors.sucessColor,
                          paddingRight: 5,
                        }}
                      />
                      <Text>12:50 Am </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "space-around",
                      height: 110,
                    }}
                  >
                    <Text style={styles.itemsViewText}>ultrasound</Text>
                    <MaterialCommunityIcons
                      name="chat-plus"
                      size={45}
                      style={styles.icon}
                      onPress={() => navigation.navigate("Conversation")}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: deviceWidth / 1 - 50,
    marginTop: 70,
  },
  ActivityView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 110,
    width: deviceWidth / 1 - 50,
    backgroundColor: baseColors.LightSecondaryColor,
    borderRadius: 15,
    marginTop: 10,
  },
  ActivityImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  itemsViewText: {
    color: baseColors.primaryTextColor,
    fontWeight: "bold",
    fontSize: 14,
  },
  icon: {
    color: baseColors.sucessColor,
  },
  ItemDisc: {
    flexDirection: "row",
    paddingTop: 5,
  },
});
export default index;
