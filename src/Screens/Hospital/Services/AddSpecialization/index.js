import React from "react";
import { Text, View, ScrollView, Image,Dimensions, TouchableOpacity } from "react-native";
import { styles } from "./style";
import InputField from "../../../../Components/InputField";
import SelectDropdown from "../../../../Components/SelectDropdown";
import Button from "../../../../Components/Buttons";
import AppHeader from "../../../../Components/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import { DummyPerson } from "../../../../Assets/images";
import { useNavigation } from "@react-navigation/native";
import Schedule from "../../../../Components/Schedule";


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AddSpecializationHospital() {
  const navigation = useNavigation();
  return (
    
    <View style={styles.screenContainer}>
      
      <AppHeader
        styles={styles.headerContainer}
      >
        <View style={{ flexDirection: "row", alignItems:'center', paddingVertical:15 , }}>
          <View style={{ width: deviceWidth / 6,flexDirection:'row', justifyContent:'flex-start' }}>
            <TouchableOpacity
             onPress={()=>{navigation.goBack('')}}>
            <Ionicons name="chevron-back-sharp" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ width: deviceWidth / 1.5,flexDirection:'row', justifyContent:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>Add Specialization</Text>
          </View>
          
        </View>
      </AppHeader>
      <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.formText}>Specialization Name</Text>
        <InputField
          placeholder="Your Email"
          styles={styles.InputField}
        ></InputField>
        
        <Schedule />
        
          <Button
            styles={styles.Button}
            onPress={()=>{navigation.goBack('')}}
          >
            <Text style={styles.ButtonText}>Done</Text>
          </Button>
        
        
      </ScrollView>
      
      </View>
    </View>
  );
}

export default AddSpecializationHospital;
