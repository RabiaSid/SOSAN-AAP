import React, { useState } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import AppHeader from "../../AppHeader/index";
import { Ionicons } from "@expo/vector-icons";
import baseColors from "../../../Constant/color";
import ImageCarousel from "../../Carousel/index";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SelectPlan({ children }) {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text onPress={toggleModal}>{children}</Text>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        backdropOpacity={0.3}
        style={{
          margin: 0,
        }}
      >
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
                <TouchableOpacity onPress={() => Navigation.goBack("")}>
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
                  style={{
                    fontWeight: "bold",
                    color: baseColors.lightTextColor,
                  }}
                >
                  Select Plan
                </Text>
              </View>
            </View>
          </AppHeader>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.screenMiddle}>
              <View style={styles.container}>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    marginTop: 30,
                    height: deviceHeight / 1.7,
                  }}
                >
                  <ImageCarousel />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flexDirection: "column",
  },
  headerContainer: {
    backgroundColor: baseColors.sucessColor,
    height: 60,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 8,
    marginBottom: 3,
  },

  screenMiddle: {
    width: deviceWidth / 1,
    height: deviceHeight / 1,
    flexDirection: "column",
  },
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  title: {
    color: "white",
    marginTop: 40,
    marginBottom: 5,
  },
});

export default SelectPlan;
