import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { Logo, AvatarPerson1, AvatarPerson2 } from "../../../Assets/images";
import AppHeader from "../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import OverviewAmountModal from "../../../Components/Modal/OverviewAmountModal";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function OverViewHospitality() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => Navigation.goBack("Epargne")}>
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={{ color: baseColors.darkTextColor }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image source={Logo} style={{ height: 45, width: 140 }} />
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
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.screenMiddle}>
          <View style={styles.Listmain}>
            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.textHeading}>Dr. Umair Rana</Text>
                <Text style={styles.text}>Sosan ID: 00000</Text>
              </View>
            </View>
          </View>

          <View style={styles.items}>
            <Text style={styles.ListTitle}>Balance History</Text>
            <View
              style={{
                flexWrap: "wrap",
                flexDirection: "row",
              }}
            >
              <View style={styles.itemsView}>
                <Text style={styles.itemsViewTextLight}>$ 5000</Text>
                <Text style={styles.itemsViewText}>Personal Balance</Text>
              </View>

              <View style={styles.itemsView}>
                <Text style={styles.itemsViewTextLight}>$ 450</Text>
                <Text style={styles.itemsViewText}>Earning In August</Text>
              </View>

              <View style={styles.itemsView}>
                <Text style={styles.itemsViewTextLight}>$ 850</Text>
                <Text style={styles.itemsViewText}>Average Earning</Text>
              </View>

              <View style={styles.itemsView}>
                <Text style={styles.itemsViewTextLight}>$ 850</Text>
                <Text style={styles.itemsViewText}>Last Earning</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.RefreshRow}>
          <View style={styles.Refreshitems}>
            <Ionicons name="refresh" size={24} color="black" />
          </View>
          <View style={styles.Refreshitems}>
            <Text>updated just now</Text>
          </View>
        </View>
      </View>

      <View style={styles.items}>
        <Text style={styles.ListTitle}>Last Activities</Text>

        <View style={styles.ActivityView}>
          <Image source={AvatarPerson1} style={styles.ActivityImage}></Image>
          <View style={{ flexDirection: "column" }}>
            <Text>Jack</Text>
            <Text>hi EveryOne I'm Jack</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <OverviewAmountModal />
          </View>
        </View>
        <View style={styles.ActivityView}>
          <Image source={AvatarPerson1} style={styles.ActivityImage}></Image>
          <View style={{ flexDirection: "column" }}>
            <Text>Jack</Text>
            <Text>hi EveryOne I'm Jack</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <OverviewAmountModal />
          </View>
        </View>
        <View style={styles.ActivityView}>
          <Image source={AvatarPerson1} style={styles.ActivityImage}></Image>
          <View style={{ flexDirection: "column" }}>
            <Text>Jack</Text>
            <Text>hi EveryOne I'm Jack</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <OverviewAmountModal />
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default OverViewHospitality;
