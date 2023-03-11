import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import baseColors from "../../../../Constant/color";
import SearchField from "../../../../Components/SearchField";
import DarkGradient from "../../../../Components/Gradient/DarkGradient";
import ReverseDarkGradient from "../../../../Components/Gradient/ReverseDarkGradient";
import { useNavigation } from "@react-navigation/native";
import { Logo, BottomImage, FlagButtonTwo } from "../../../../Assets/images";
import {
  FontAwesome5,
  Fontisto,
  FontAwesome,
  Foundation,
} from "@expo/vector-icons";
import { styles } from "./style";
import PaymentPayAs from "../../../../Components/Modal/PaymentModal/PaymentPayAs";
import PaymentPayAsForm from "../../../../Components/Modal/PaymentModal/PaymentPayAsForm";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Feed() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: baseColors.lightColor,
        height: deviceHeight / 1,
      }}
    >
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            width: deviceWidth / 1,
          }}
        >
          <View
            style={{
              width: deviceWidth / 1.2,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 35,
            }}
          >
            <Image source={Logo} style={{ height: 30, width: 125 }} />
          </View>
          <View
            style={{
              width: deviceWidth / 3.8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image source={FlagButtonTwo} style={{ height: 20, width: 35 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <SearchField placeholder="Search" styles={styles.SearchField} />
        </View>
      </AppHeader>
      <View style={styles.items}>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <View style={styles.itemsView}>
            <FontAwesome5
              name="clinic-medical"
              size={24}
              style={styles.itemsIcon}
            />
            <Text
              onPress={() => navigation.navigate("NearbyHospital")}
              style={styles.itemsViewText}
            >
              HOSPITAL PRIVE / PUBLIC
            </Text>
          </View>

          <View style={styles.itemsViewReverse}>
            <FontAwesome5
              name="capsules"
              size={23}
              style={styles.itemsIconReverse}
            />
            <Text
              onPress={() => navigation.navigate("PharmacyOrderList")}
              // onPress={Appointments}
              style={styles.itemsViewTextReverse}
            >
              PHARMACIE
            </Text>
          </View>

          <View style={styles.itemsViewReverse}>
            <Fontisto name="doctor" size={24} style={styles.itemsIconReverse} />
            <Text
              onPress={() => navigation.navigate("NearByDoctor")}
              style={styles.itemsViewTextReverse}
            >
              PRISE DE RDV MEDECIN
            </Text>
          </View>

          <View style={styles.itemsView}>
            <FontAwesome5
              name="hand-holding-heart"
              size={24}
              style={styles.itemsIcon}
            />
            <Text
              onPress={() => navigation.navigate("NearbyDonation")}
              style={styles.itemsViewText}
            >
              DONS ONG/ ASSOCIATIONS
            </Text>
          </View>

          <View style={styles.itemsView}>
            <Foundation name="dollar" size={36} style={styles.itemsIcon} />
            <Text
              onPress={() => navigation.navigate("Assurances")}
              style={styles.itemsViewText}
            >
              ASSURANCES
            </Text>
          </View>

          <View style={styles.itemsViewReverse}>
            <FontAwesome
              name="heartbeat"
              size={25}
              style={styles.itemsIconReverse}
            />
            <Text
              onPress={() => navigation.navigate("Epargne")}
              // onPress={Appointments}
              style={styles.itemsViewTextReverse}
            >
              EPARGNE SOSAN
            </Text>
          </View>
        </View>

        <DarkGradient styles={styles.Button}>
          <Text>
            <PaymentPayAs />
          </Text>
        </DarkGradient>

        <ReverseDarkGradient styles={styles.Button}>
          <Text>
            <PaymentPayAsForm style={{ color: baseColors.lightTextColor }}>
              <Text style={{ color: baseColors.lightTextColor }}>Pay</Text>
            </PaymentPayAsForm>
          </Text>
        </ReverseDarkGradient>
      </View>

      <Image
        source={BottomImage}
        style={{ height: 155, width: 480, resizeMode: "contain" }}
      />
    </View>
  );
}

export default Feed;
