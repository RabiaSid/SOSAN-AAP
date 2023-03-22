import React from "react";
import { ScrollView } from "react-native";
import { View, Text, Image, Dimensions } from "react-native";
import Button from "../../Components/Buttons";
import { styles } from "./style";
import InputField from "../../Components/InputField";
import baseColors from "../../Constant/color";
import Schedule from "../../Components/Schedule";
import Gallery from "../../Components/Gallery";
import { MapImage } from "../../Assets/images";
import { useNavigation } from "@react-navigation/native";
import Map from "../../Components/Map";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function LayoutCommonDetail({ children }) {
  const Navigation = useNavigation();
  return (
    <ScrollView
      style={styles.screenContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.screen}>
        <Text style={styles.Text}>Detail</Text>
        <Text style={styles.formText}>Institude Name</Text>
        <InputField
          placeholder="Your Email"
          styles={styles.InputField}
        ></InputField>
        <Text style={styles.formText}>Enter Your location</Text>
        <InputField
          placeholder="location"
          styles={styles.InputField}
        ></InputField>
        <Map />
        <Text style={styles.formText}>Phone</Text>
        <InputField
          placeholder="Type Here"
          styles={styles.InputField}
        ></InputField>
        <Text style={styles.formText}>Website</Text>
        <InputField
          placeholder="Type Here"
          styles={styles.InputField}
        ></InputField>
        <Text style={styles.formText}>About</Text>
        <InputField
          placeholder="Type Here"
          multiline={true}
          numberOfLines={6}
          styles={styles.InputFieldAbout}
        ></InputField>
        <View>
          <Schedule />
        </View>
        <View>
          <Gallery />
        </View>
        <Text style={styles.TextPrimary}>Owner Detail</Text>
        <Text style={styles.formText}>Website</Text>
        <InputField
          placeholder="Type Here"
          styles={styles.InputField}
        ></InputField>
        <Text style={styles.formText}>Website</Text>
        <InputField
          placeholder="Type Here"
          styles={styles.InputField}
        ></InputField>
        <Text style={styles.formText}>About</Text>
        <InputField
          placeholder="Type Here"
          multiline={true}
          numberOfLines={6}
          styles={styles.InputFieldAbout}
        ></InputField>
        <View style={{
          flexDirection:'row',
          justifyContent: "center",
          alignItems: "center",}}>
          <Button
            styles={styles.Button}
          >
            <Text>
            {children}
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default LayoutCommonDetail;
