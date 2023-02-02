import React from 'react'
import Button from '../../Components/Buttons'
import InputField from '../../Components/InputField'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
 } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import baseColors from '../../Constant/color'


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const SignIn = () => {
 const Navigation = useNavigation ()
  return (
   <View style={styles.screenContainer}>

    <View style={styles.screenTop}>
      <Text><Text style={styles.textColorChange}>English</Text> | French</Text>
    </View>

    <View style={styles.screenMiddle}>

    <Image source={require('../../Assets/images/Logo.png')} style={{ height: 100 }}/>
    <Text style={styles.formText}>Enter Your Email</Text>
    <InputField placeholder="Your Email" ></InputField>
    <Text style={styles.formText}>Enter Your Password</Text>
    <InputField placeholder="Password"  secureTextEntry={true}></InputField>

    <View style={styles.Loginbutton}>
      <Button title="signup" size="sm" backgroundColor="#007bff"  onPress={() => {Navigation.navigate("SignUp")}}/>   
    </View>
    </View>
  
   </View>
  )
}
const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1 ,
    width: deviceWidth / 1 ,
    flex: 1,
    flexDirection: 'column', 
    padding: 20,
    backgroundColor: baseColors.lightColor,
  },
  screenTop:{
    flexDirection: 'row', 
    justifyContent: 'flex-end',
    paddingVertical:40,
    
  },
  textColorChange:{
    color: baseColors.sucessTextColor
  },
  screenMiddle:{
    flexDirection: 'column', 
    justifyContent: 'center',
    // paddingVertical:200
  },
  formText:{
    paddingLeft:11,
  },
  Loginbutton:{
    flexDirection: 'column', 
    justifyContent: 'center',
    width: deviceWidth / 2 ,
    margin: "auto"
  }
  
 
 
});

export default SignIn