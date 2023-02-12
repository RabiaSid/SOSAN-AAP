import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import AppHeader from "../../../Components/AppHeader";
import baseColors from "../../../Constant/color";
import { Ionicons } from '@expo/vector-icons';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Profile() {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        styles={styles.headerContainer}
      >
        <View style={{ flexDirection: "row", alignItems:'center', paddingVertical:5 }}>
          <View style={{ width: deviceWidth / 3,flexDirection:'row', justifyContent:'flex-start' }}>
            <TouchableOpacity>
            <Ionicons name="chevron-back-sharp" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ width: deviceWidth / 3,flexDirection:'row', justifyContent:'center' }}>
            <Text style={{fontWeight:'bold'}}>Personal Detail</Text>
          </View>
          
        </View>
      </AppHeader>
      <Text>Profile!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
	headerContainer:{
        backgroundColor: baseColors.lightColor, 
        height: 50, 
        marginTop: 35, 
        width: deviceWidth/1
    },
    header:{
        
    },
   
})

export default Profile;
