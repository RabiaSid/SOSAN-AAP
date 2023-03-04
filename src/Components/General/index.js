import React from 'react'
import {View, Text,Image, Dimensions} from 'react-native'
import { GeneralPharmacyTwo } from '../../Assets/images/index';
import baseColors from '../../Constant/color';


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export function General(props) {

  return (

    <View style={{flexDirection:'column' ,width:deviceWidth/1,}}>
        <Image source={GeneralPharmacyTwo} resizeMode={'cover'} style={{width:deviceWidth/1, height:250}}/>
        <View style={{flexDirection:'column' , padding:15}}>
        <Text style={{color:baseColors.sucessTextColor, fontSize:20, paddingVertical:5}}>{props.title}</Text>
        <Text style={{color:baseColors.darkTextColor, fontSize:14, paddingBottom:2 , fontWeight:'bold'}}>St Thomas Hospital, uk</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:baseColors.darkTextColor, fontSize:15, fontWeight:'bold', paddingRight:10}}>Located In:</Text>
        <Text>St Thomas Hospital, uk</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:baseColors.darkTextColor, fontSize:15,fontWeight:'bold', paddingRight:10 }}>Hours:</Text>
        <Text>Open 24 Hours</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:baseColors.darkTextColor, fontSize:15,fontWeight:'bold', paddingRight:10 }}>Phones:</Text>
        <Text>+923 0000 0000</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center',paddingVertical:5}}>
          <Text style={{color:baseColors.primaryTextColor, fontSize:15,fontWeight:'bold' }}>https://www.chu-toulouse.fr</Text>
        </View>

        </View>
        
    </View>
  )
}


