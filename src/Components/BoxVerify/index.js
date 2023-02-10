import React from 'react'
import { View } from 'react-native'
import baseColors from '../../Constant/color'

const Boxes = () => {
  return (
    <View>
      <View style={{
         border: "1px solid",
         borderColor: baseColors.sucessTextColor,
         height: 90,
         width: 60,
         borderWidth: 1,
         borderRadius: 6,
      }}>
        {/* <TextInput 
        placeholder={placeholder}
    />*/}
      </View> 
    </View>
  )
}

export default Boxes;