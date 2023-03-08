import React from "react";
import { ScrollView } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import InputField from "../../../Components/InputField";
import Schedule from "../../../Components/Schedule";
import Button from "../../../Components/Buttons";
import { Entypo } from "@expo/vector-icons";
import baseColors from "../../../Constant/color";
import Map from "../../../Components/Map";
import Gallary from "../../../Components/Gallery";
import InformationOkay from "../../../Components/Modal/InformationOkay";

function AssociationDetailDoctor() {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text style={styles.Text}>Company Details</Text>
        <Text style={styles.formText}>Institution Name</Text>
        <InputField
          placeholder="Institution Name"
          styles={styles.InputStyling}
        />
        <Text style={styles.formText}>Set Location </Text>
        <InputField
          placeholder="Heart International Hospital Islamabad"
          styles={styles.InputStyling}
        />
        <View style={styles.lightTextView}>
          <Text style={styles.lightText}>--MARK HERE--</Text>
        </View>
        <View style={styles.locationView}>
          <Text style={{ fontWeight: "bold" }}>
            <Entypo
              name="location-pin"
              size={20}
              style={{ color: baseColors.sucessColor }}
            />
            2 Rue Charles Vigurie, 31300 Toulous, France
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <TouchableOpacity
              style={{
                elevation: 8,
                backgroundColor: baseColors.primaryColor,
                borderRadius: 5,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                height: 22,
                marginVertical: 20,
              }}
            >
              <Text
                style={{
                  color: baseColors.lightTextColor,
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                Get Direction
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={{
                elevation: 8,
                backgroundColor: baseColors.primaryColor,
                borderRadius: 5,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                height: 22,
                marginVertical: 20,
              }}
            >
              <Text
                style={{
                  color: baseColors.lightTextColor,
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                Share Location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Map />
        <Text style={styles.formText}>Phone</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Website (if any)</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>About</Text>
        <InputField
          placeholder="Type Here"
          multiline={true}
          numberOfLines={6}
          styles={styles.AboutSty}
        />
        {/* <View>
          <Schedule>Availibility</Schedule>
        </View> */}
        <Gallary />
        <Text style={styles.TextPrimary}>Owner Detail</Text>
        <Text style={styles.formText}>Owner Nmae</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Education Background</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>About</Text>
        <InputField
          placeholder="Type Here"
          multiline={true}
          numberOfLines={6}
          styles={styles.AboutSty}
        />

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Button styles={styles.LoginBtn}>
            <InformationOkay onPress={toggleModal} isVisible={isModalVisible}>
              <Text
                style={{
                  color: baseColors.lightTextColor,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Continue
              </Text>
            </InformationOkay>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default AssociationDetailDoctor;
