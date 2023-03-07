import React from 'react'
import {Text, View, style} from 'react-native'
import baseColors from '../../../../Constant/color'
import WorkingDetail from '../../../Auth/Details/WorkingDetail'
import { useNavigation } from '@react-navigation/native'

function WorkingDetailAgenda() {
  const Navigation = useNavigation();
  return (
    <WorkingDetail>
    <Text style={{
    color: baseColors.lightTextColor,
    fontWeight: "bold",
    fontSize:20
    }}
    onPress={() => {
        Navigation.goBack("Agenda");
      }}
    >index</Text>
    </WorkingDetail>
  )
}

export default WorkingDetailAgenda