import React from "react";
import {

  Text,
  Dimensions

} from "react-native";
import baseColors from "../../../Constant/color";

import ModalDropdown from "react-native-modal-dropdown";
import LinearBackground from "../../Gradient/LinearBackground/index";


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function index() {
    
  
  let data = [
    {label: 'Choose', value: '0'},
     {label: '1 foo', value: '1'}, 
     {label: '2 foo', value: '2'}, 
     {label: '3 foos', value: '3'}, 
     {label: '4 foos', value: '4'}, 
     {label: '5 foos', value: '5'}, 
     {label: '6 foos', value: '6'}, 
     {label: '7 foos', value: '7'}, 
     {label: '8 foos', value: '8'}, 
     {label: '9 foos', value: '9'}, 
     {label: '10 foos', value: '10'}, 
     ];

  const setItem = value => {
    // console.log("you touched option: " + value.value);
  }
 

  const renderDropDownList = (rowData) => {
    return (
      <LinearBackground style={{ width:100, }}>
        <Text style={{color: baseColors.lightColor, fontSize: 15, textAlign:'center'}}>{rowData.label}</Text> 
      </LinearBackground>
    );
  }

    const renderButtonText = (rowData) => {
      const {label, value} = rowData;
      return `${label}`;
    };
  return (
    <ModalDropdown 
            options={data}
            renderRow={(rowData) => renderDropDownList(rowData)}
            renderButtonText={(rowData) => renderButtonText(rowData)}
            style={{ color: baseColors.secondaryTextColor }}
            dropdownStyle={{backgroundColor:'white',  width:120 , elevation:4}}
            defaultValue={'Place'}
            defaultTextStyle={{color: baseColors.secondaryTextColor}}
            onSelect={(idx, value) => setItem(value)
            }
            />
  )
}

export default index