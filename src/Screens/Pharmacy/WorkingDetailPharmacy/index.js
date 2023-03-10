import React from 'react'
import {Text, View, StyleSheet,ScrollView, Dimensions} from 'react-native'
import baseColors from '../../../Constant/color'
import InputField from '../../../Components/InputField/index'
import MapMarkHere from '../../../Components/MapMarkHere/index'
import Map from '../../../Components/Map/index'
import Button from '../../../Components/Buttons/index'

import { useNavigation } from '@react-navigation/native'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function WorkingDetailPharmacy() {
  const Navigation = useNavigation();
  return (
    <ScrollView style={styles.screenContainer}>
    <View style={styles.screenTop}>
        <Text style={styles.Text}>Working Details</Text>
        <Text style={styles.formText}>Institution Name</Text>
        <InputField placeholder="Institution Name" styles={styles.InputStyling} />
        <Text style={styles.formText}>Institution Address </Text>
        <InputField placeholder="Heart International Hospital Islamabad" styles={styles.InputStyling} />
        <MapMarkHere />
        <Map />
        <Text style={styles.formText}>Institution Phone</Text>
        <InputField placeholder="0215229035" styles={styles.InputStyling} />
        <Text style={styles.formText}>Institution Email</Text>
        <InputField placeholder="Institution Email(if any) " styles={styles.InputStyling} />
        <Button
            styles={styles.Button}
            onPress={() => {
              Navigation.navigate("DoctorDetailPharmacy");
            }}
          >
            <Text styles={styles.ButtonText}>Login</Text>
          </Button>
    </View>
    </ScrollView>
    
  )
}
const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    padding: 20,
    backgroundColor: baseColors.lightColor,
  },
  Text: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
    fontSize:20
  },
  screenTop: {
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 20,
  },
  formText: {
    paddingLeft: 20,
  },
  InputStyling: {
    height: 40,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  Button: {
    elevation: 5,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 30,
    marginVertical:10,
    width: deviceWidth / 1 - 50,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: baseColors.lightColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
})

export default WorkingDetailPharmacy