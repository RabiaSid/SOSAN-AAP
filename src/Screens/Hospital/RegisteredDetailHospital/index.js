import React from 'react'
import {Text, View, style} from 'react-native'
import baseColors from '../../../Constant/color'
import CommonDetail from '../../Auth/Details/CommonDetail/index'
import { useNavigation } from '@react-navigation/native'

function index() {
  const Navigation = useNavigation();
  return (
    <CommonDetail>
    <Text style={{
    color: baseColors.lightTextColor,
    fontWeight: "bold",
    fontSize:20
    }}
    onPress={() => {
        Navigation.navigate("AddServicesHospital");
      }}
    >Continue</Text>
    </CommonDetail>
  )
}

export default index