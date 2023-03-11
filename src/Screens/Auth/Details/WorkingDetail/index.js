import React from "react";
import { ScrollView } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import InputField from "../../../../Components/InputField";
import Schedule from "../../../../Components/Schedule";
import Button from "../../../../Components/Buttons";
import { Entypo } from "@expo/vector-icons";
import CheckBtn from "../../../../Components/CheckButton";
import baseColors from "../../../../Constant/color";
import Map from "../../../../Components/Map";
import MapMarkHere from "../../../../Components/MapMarkHere";

function WorkingDetail({ children }) {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text style={styles.Text}>Working Details</Text>
        <Text style={styles.formText}>Institution Name</Text>
        <InputField
          placeholder="Institution Name"
          styles={styles.InputStyling}
        />
        <Text style={styles.formText}>Institution Address </Text>
        <InputField
          placeholder="Heart International Hospital Islamabad"
          styles={styles.InputStyling}
        />
        <MapMarkHere />
        <Map />
        <Text style={styles.formText}>Institution Phone</Text>
        <InputField placeholder="0215229035" styles={styles.InputStyling} />
        <Text style={styles.formText}>Institution Email</Text>
        <InputField
          placeholder="Institution Email(if any) "
          styles={styles.InputStyling}
        />
        <View style={styles.institutionView}>
          <Text style={styles.institutionText}>Appointment Type</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CheckBtn />
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Clinic Visit
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CheckBtn />
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Tale Communication
            </Text>
          </View>
        </View>
        <View>
          <Schedule>Availibility</Schedule>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginHorizontal: 5,
            }}
          >
            Consultation Fee
          </Text>
          <InputField placeholder="$ 15" styles={styles.WebText}></InputField>
        </View>
        <View style={styles.institutionView}>
          <Text style={styles.institutionText}>Payment Method</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CheckBtn />
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Instant Cash
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CheckBtn />
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Mobile money
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CheckBtn />
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Credit card
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CheckBtn />
            <Text
              style={{
                fontSize: 16,
              }}
            >
              MFS
            </Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Button
            styles={styles.LoginBtn}
            // onPress={() => {
            //   navigation.goBack("Agenda");
            // }}
          >
            {children}
            {/* <Text style={styles.LoginTextSty}>Add</Text> */}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default WorkingDetail;
