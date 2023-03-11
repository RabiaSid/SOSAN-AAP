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
import InputField from "../../../../Components/InputField";
import SelectDropdown from "../../../../Components/SelectDropdown";
import Button from "../../../../Components/Buttons";
import AppHeader from "../../../../Components/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import { DummyPerson } from "../../../../Assets/images";
import { useNavigation } from "@react-navigation/native";
import baseColors from "../../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AddDrugsDetailPharmacy() {
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
                Navigation.goBack("");
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
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Add Drug</Text>
          </View>
        </View>
      </AppHeader>
      <View style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ height: deviceHeight / 1.3 }}>
            <View style={styles.imageStyle}>
              <Image style={styles.image} source={DummyPerson} />
              <View style={styles.ImageButtonView}>
                <Button
                  styles={styles.ImageButtonViewText}
                  onPress={() => {
                    Navigation.navigate("RequestANewMedicineDetail");
                  }}
                >
                  <Text
                    style={{ color: baseColors.lightTextColor, fontSize: 12 }}
                  >
                    Request New Medicine
                  </Text>
                </Button>
              </View>
            </View>

            <Text style={styles.formText}>Institude Name</Text>
            <SelectDropdown />

            <Text style={styles.formText}>About</Text>
            <InputField
              placeholder="Type Here"
              multiline={true}
              numberOfLines={6}
              styles={styles.InputFieldAbout}
            ></InputField>
          </View>

          <Button
            styles={styles.Button}
            onPress={() => {
              Navigation.goBack("");
            }}
          >
            <Text style={styles.ButtonText}>Next</Text>
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddDrugsDetailPharmacy;
