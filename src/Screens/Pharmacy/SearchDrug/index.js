import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import AppHeader from "../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import { useNavigation } from "@react-navigation/native";
import SearchField from "../../../Components/SearchField/index";
import { Ionicons } from "@expo/vector-icons";
import { AvatarPerson3 } from "../../../Assets/images/index";
import GradientBackground from "../../../Components/Gradient/DarkGradient/index";
import Quantity from "../../../Components/Modal/Quantity";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SearchDrug() {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const Navigation = useNavigation();


  const showModal = () => {
    setShow(true);
}

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
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity
              onPress={() => {
                Navigation.goBack("");
              }}
              >
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={{ color: baseColors.lightTextColor }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
              >
                Add Drug 
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
          paddingHorizontal: 10,
        }}
      >
        <View style={styles.screenMiddle}>
          <View style={styles.items}>
            <Text
              style={styles.ListTitle}
            >
              Drug Name/Formula
            </Text>
          </View>
          <View style={styles.ViewRow}>
            
            <GradientBackground styles={styles.GradientView}>
              <SearchField styles={styles.SearchField} />
              <Quantity onPress={toggleModal} isVisible={isModalVisible}>
              <View style={styles.ListView}>
                <Image source={AvatarPerson3} style={styles.ListImage} />
                <Text style={styles.ListText}>Panadol</Text>
                <Text style={styles.ListText}>Tablet</Text>
                <Text style={styles.ListText}>500 mg</Text>
              </View>
              <View style={styles.ListView}>
                <Image source={AvatarPerson3} style={styles.ListImage} />
                <Text style={styles.ListText}>Panadol</Text>
                <Text style={styles.ListText}>Tablet</Text>
                <Text style={styles.ListText}>500 mg</Text>
              </View>
              <View style={styles.ListView}>
                <Image source={AvatarPerson3} style={styles.ListImage} />
                <Text style={styles.ListText}>Panadol</Text>
                <Text style={styles.ListText}>Tablet</Text>
                <Text style={styles.ListText}>500 mg</Text>
              </View>
              <View style={styles.LastListView}>
                <Image source={AvatarPerson3} style={styles.ListImage} />
                <Text style={styles.ListText}>Panadol</Text>
                <Text style={styles.ListText}>Tablet</Text>
                <Text style={styles.ListText}>500 mg</Text>
              </View>
            </Quantity>
            </GradientBackground>
            {/* <Quantity show={show} /> */}
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default SearchDrug;
