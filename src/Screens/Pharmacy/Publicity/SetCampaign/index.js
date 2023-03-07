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
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { DummyPerson } from "../../../../Assets/images";
import { useNavigation } from "@react-navigation/native";
import baseColors from "../../../../Constant/color";
import { SelectList } from "react-native-dropdown-select-list";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SetCampaignPharmacy() {
  const Navigation = useNavigation();
  const [selected, setSelected] = React.useState([]);

  const data = [
    { key: "1", value: "ml" },
    { key: "2", value: "mg" },
  ];

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
              width: deviceWidth / 4,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Navigation.goBack("");
              }}
            >
              <Ionicons name="chevron-back-sharp" size={30} style={{color:baseColors.lightTextColor }} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: deviceWidth / 2,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18, color:baseColors.lightTextColor }}>Set Champaign</Text>
          </View>
        </View>
      </AppHeader>
      
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.imageStyle}>
              <Image style={styles.image} source={DummyPerson} />
            </View>
            <Text style={styles.formText}>Institude Name</Text>
            <InputField
              placeholder="Your Email"
              styles={styles.InputField}
            ></InputField>

            <Text style={styles.formText}>Institude Name</Text>
            <InputField
              placeholder="Type Here"
              multiline={true}
              numberOfLines={6}
              styles={styles.InputFieldAbout}
            ></InputField>

            <Text style={styles.formText}>Institude Name</Text>
            <InputField
              placeholder="Your Email"
              styles={styles.InputField}
            ></InputField>

            <Text style={styles.formText}>Institude Name</Text>
            <InputField
              placeholder="Your Email"
              styles={styles.InputField}
            ></InputField>

            <Text style={styles.formText}>Institude Name</Text>
            <InputField
              placeholder="Your Email"
              styles={styles.InputField}
            ></InputField>
          </View>

          <Button
            styles={styles.Button}
            onPress={() => {
              Navigation.goBack("");
            }}
          >
            <Text style={styles.ButtonText}>Start Campaign</Text>
          </Button>
        </ScrollView>
      
    </View>
  );
}

export default SetCampaignPharmacy;
