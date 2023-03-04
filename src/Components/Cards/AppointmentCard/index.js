import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {styles} from './style.js';
import baseColors from '../../../Constant/color';
// import AppointmentCancelModal from '../../../Components/Cards/';
import { useNavigation } from '@react-navigation/native';

const AppointmentCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.CardStyling}>
            <View style={styles.item} key={data?.id}>
              <Image source={data?.image} style={styles.img} />
              <View style={styles.TitleHead}>
                <Text style={styles.title}>{data?.title}</Text>
                <View style={styles.ItemDisc}><Entypo name="location" size={14} style={{ color: baseColors.dangerTextColor , paddingRight: 6 }} /><Text style={styles.discp}>{data?.location}</Text></View>
                <View style={styles.ItemDisc}><FontAwesome5 name="calendar-week" size={14} style={{ color: baseColors.primaryColor, paddingRight: 6 }} /><Text style={styles.discp}>{data?.dateDay}</Text></View>
                <View style={styles.ItemDisc}><Ionicons name="time" size={14} style={{ color: baseColors.sucessColor , paddingRight: 6}} /><Text style={styles.discp}>{data?.time}</Text></View>
              </View>
              <View style={styles.iconsSty}>
             <FontAwesome5 onPress={() => {
                navigation.navigate("AppointmentDetail");
              }} name="house-user" size={24} style={{ color: baseColors.sucessColor , paddingTop: 10}}/>
             {/* <AppointmentCancelModal/> */}
              </View>
            </View>
          </View>
  );
};
export default AppointmentCard;