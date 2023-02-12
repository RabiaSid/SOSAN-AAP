import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { styles } from "./style";
import InputField from "../../../Components/InputField";
import SelectDropdown from "../../../Components/SelectDropdown";
import Button from "../../../Components/Buttons";
import { useNavigation } from "@react-navigation/native";

function PersonalDetail() {
  const Navigation = useNavigation();
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screen}>
        <Text style={styles.Text}>Personal Detail</Text>

        <View style={styles.imageStyle}>
          <Image
            style={styles.image}
            source={require("../../../Assets/images/Dummy-Person.png")}
          />
        </View>

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
        <SelectDropdown />
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
          <Button
            styles={styles.Button}
            onPress={() => {
              Navigation.navigate("SignIn");
            }}
          >
            <Text style={styles.ButtonText}>Login</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default PersonalDetail;
