import React from 'react'
import {View, Text, Dimensions, FlatList, StyleSheet} from "react-native"
import { DoctorData } from '../../Config';
import DoctorStuffCard from '../Cards/DoctorStuffCard'



const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function StuffDoctor() {
  return (
    <View style={styles.View}>
        
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start', width:deviceWidth/1-10, paddingVertical:10}}>
        <Text style={{fontSize:16, fontWeight:'bold',textAlign:'left', paddingLeft:5}}>Doctor</Text>
        </View>
        <View style={styles.StuffCard}>
           <FlatList 
           data={DoctorData}
            numColumns={3}
           renderItem={({ item }) => <DoctorStuffCard data={item}  
           />}

           />

        </View>
        
    </View>
  )
}
const styles = StyleSheet.create({
 View:{
    flexDirection: "column",
    width: deviceWidth / 1 ,
    justifyContent:'center',
    alignItems: "center",
 },
 
 StuffCard:{
    flexDirection:'row',
    width: deviceWidth / 1 -5 ,
    justifyContent:'space-between',
 },
 

})
export default StuffDoctor