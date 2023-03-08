import React from "react";
import { Text, View, ScrollView, Image,Dimensions, TouchableOpacity } from "react-native";
import { styles } from "./style";
import InputField from "../../../Components/InputField";
import SelectDropdown from "../../../Components/SelectDropdown";
import Button from "../../../Components/Buttons";
import AppHeader from "../../../Components/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import { DummyPerson } from "../../../Assets/images";
import { useNavigation } from "@react-navigation/native";


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function  PersonalDetailDoctor() {
  const Navigation = useNavigation();
  return (
    
    <View style={styles.screenContainer}>
      
      <AppHeader
        styles={styles.headerContainer}
      >
        <View style={{ flexDirection: "row", alignItems:'center', paddingVertical:5 }}>
          <View style={{ width: deviceWidth / 3,flexDirection:'row', justifyContent:'flex-start' }}>
            <TouchableOpacity
             onPress={() => {
              Navigation.goBack('UserAppHome');
            }}>
            <Ionicons name="chevron-back-sharp" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ width: deviceWidth / 3,flexDirection:'row', justifyContent:'center' }}>
            <Text style={{fontWeight:'bold'}}>Personal Detail</Text>
          </View>
          
        </View>
      </AppHeader>
      <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
       
        <View style={styles.imageStyle}>
          <Image
            style={styles.image}
            source={DummyPerson}
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
        
          <Button
            styles={styles.Button}
            onPress={() => {
                     Navigation.navigate("AssociationDetailDoctor");
                  }}
          >
            <Text styles={styles.ButtonText}>Login</Text>
          </Button>
        
        
      </ScrollView>
      
      </View>
    </View>
  );
}

export default  PersonalDetailDoctor;




