import React from 'react';
import {
  View,
  Text,
  ImageBackground
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {styles} from './style.js';
import baseColors from '../../../Constant/color';
import Button from '../../Buttons'
import  {bluebtn} from "../../../Assets/images/index";
import { useNavigation } from "@react-navigation/native";
const ScheduledCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.CardStyling}>
      <View style={{flexDirection:'row' , justifyContent:'space-between', alignItems:'center' ,marginHorizontal: 30}}>
      <Text style={styles.title}>{data?.title}</Text>
      <Button
            styles={styles.LoginBtn}
            onPress={() => {
              navigation.navigate("AppointmentDetail");
            }}>
            <Text style={styles.LoginTextSty}>Mark as complete</Text>
          </Button>
      </View>
      
    <View style={styles.item} key={data?.id}>
      <View style={styles.TitleHead}>
        <View style={styles.ItemDisc}><FontAwesome5 name="calendar-week" size={14} style={{ color: baseColors.primaryColor, paddingRight: 6 }} /><Text style={styles.discp}>{data?.dateDay}</Text></View>
        <View style={styles.ItemDisc}><Ionicons name="time" size={14} style={{ color: baseColors.sucessColor , paddingRight: 6}} /><Text style={styles.discp}>{data?.time}</Text></View>
        <View style={styles.ItemDisc}><Entypo name="location" size={14} style={{ color: baseColors.dangerTextColor , paddingRight: 6 }} /><Text style={styles.discp}>{data?.location}</Text></View>
        </View>
    </View>
    <View style={{flexDirection:'row' , justifyContent:'space-between', alignItems:'center' ,marginHorizontal: 30}}>
    <ImageBackground source={bluebtn} resizeMode="cover" style={styles.img}><Text style={{color: '#fff' , paddingStart: 5}}>History</Text></ImageBackground>
    <Button
            styles={styles.NextBtn}
            onPress={() => {
              navigation.goBack("AppointmentDetail");
            }}>
            <Text style={styles.LoginTextSty}>Laparoscopic</Text>
          </Button>
    </View>
  </View>
  )
}

export default ScheduledCard