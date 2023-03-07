import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import AppHeader from "../../../../Components/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import { DummyPerson } from "../../../../Assets/images";
import { useNavigation } from "@react-navigation/native";
import baseColors from "../../../../Constant/color";
import Description from "../../../../Components/Description/index"


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AvailableDrugsDetail() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
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
              width: deviceWidth / 3,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Navigation.goBack("UserAppHome");
              }}
            >
              <Ionicons name="chevron-back-sharp" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: deviceWidth / 3,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Personal Detail</Text>
          </View>
        </View>
      </AppHeader>
      <View style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageStyle}>
            <Image style={styles.image} source={DummyPerson} />
          </View>

          <Text
            style={{
              width: deviceWidth / 1,
              textAlign: "center",
              fontSize: 18,
              fontWeight: "800",
              color: baseColors.sucessTextColor,
            }}
          >
            Panadol
          </Text>
          <View
          style={{
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: "center",
            width: deviceWidth / 1,
          }}>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 20,
              justifyContent: 'space-evenly',
              alignItems: "center",
              width: deviceWidth / 1.5,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                paddingVertical: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{fontSize:15,fontWeight:'600'}}>Catogery :</Text>
              <Text style={{fontSize:15,fontWeight:'600'}}>Dosage :</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                paddingVertical: 15,
                justifyContent: "center",
                alignItems: 'flex-start',
              }}
            >
              <Text>Tablet</Text>
              <Text>300mg, 500mg</Text>
            </View>
          </View>
          </View>
          <Description>
          <Text style={{fontSize:19,fontWeight:'600'}}>Usage</Text>
          </Description>
          
        </ScrollView>
      </View>
    </View>
  );
}

export default AvailableDrugsDetail;
