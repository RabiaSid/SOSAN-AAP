import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import baseColors from "../../../../Constant/color";
import SearchField from "../../../../Components/SearchField";
import DarkGradient from "../../../../Components/Gradient/DarkGradient";
import ReverseDarkGradient from "../../../../Components/Gradient/ReverseDarkGradient";
import { useNavigation } from "@react-navigation/native";
import { Logo,  BottomImage, FlagButtonOne } from "../../../../Assets/images";
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
            <Image
              source={Logo}
              style={{ height: 30, width: 125 }}
            />
          </View>
          <View
            style={{
              width: deviceWidth / 3.8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              
            }}
          >
            <TouchableOpacity
            onPress={()=>navigation.navigate('UserAppHome')}>
              <Image
                source={FlagButtonOne}
                style={{ height: 20, width: 35 }}
              />
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
              // onPress={()=>navigation.navigate('NearbyHospital')}
              style={styles.itemsViewText}
            >
             Agenda
            </Text>
          </View>

          <View style={styles.itemsViewReverse}>
          <FontAwesome5 
          name="capsules" 
          size={23} style={styles.itemsIconReverse} />
            <Text
            //  onPress={()=>navigation.navigate('PharmacyOrderList')}
              // onPress={Appointments}
              style={styles.itemsViewTextReverse}
            >
              Overview
            </Text>
          </View>

          <View style={styles.itemsViewReverse}>
          <Fontisto name="doctor" size={24} style={styles.itemsIconReverse} />
            <Text
              //  onPress={()=>navigation.navigate('NearByDoctor')}
              style={styles.itemsViewTextReverse}
            >
              Publicity
            </Text>
          </View>

          <View style={styles.itemsView}>
          <FontAwesome name="heartbeat" size={25} style={styles.itemsIcon}  />
            <Text
            //  onPress={()=>navigation.navigate('Epargne')}
            style={styles.itemsViewText}
            >
              Earning
            </Text>
            
          </View>

          <View style={styles.itemsView}>
          <FontAwesome name="heartbeat" size={25} style={styles.itemsIconReverse}  />
            <Text
            //  onPress={()=>navigation.navigate('Epargne')}
              style={styles.itemsViewText}
            >
            Services
            </Text>
            
          </View>
        </View>
        
            
          
            
      </View>

      <Image
        source={BottomImage}
        style={{ height: 270, resizeMode: "contain" }}
      />
    </View>
  );
}

export default Feed;
