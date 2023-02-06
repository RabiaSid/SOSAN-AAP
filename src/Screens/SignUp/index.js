import React from 'react'
import { View, Text, Dimensions} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import InputField from "../../Components/InputField";
import  Button  from '../../Components/Buttons'
import {useNavigation} from "@react-navigation/native"
import { styles } from './style';
import baseColors from '../../Constant/color'
import CheckBox from '../../Components/checkButton' 
import ModalTester from '../../Components/Modal';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SignUp() {
 
 const Navigation = useNavigation ()

//  const [value, setvalue] = useState('')

//  useEffect(()=>{
//   setvalue(value)
//   console.log(value)
//  },[])
  return (
    
//       <LinearGradient
//       colors={['red', 'yellow', 'green' ]}
//       style={styles.screenContainer}
//       start={{ x: 0, y: 0.5 }}
//       end={{ x: 1, y: 0.5 }}
// >
<View style={styles.screenContainer}>
      <View style={styles.screenBackground}>
        <View style={styles.screenMiddle}>
        <Text style={styles.Text}>create a new account</Text>
        <Text style={styles.formText}>Enter  Email</Text>
        <InputField placeholder="abc@gmail.com"
        styles={{height: 40,
          margin: 12,
          borderColor: baseColors.sucessColor,
          borderWidth: 1,
          borderRadius: 50,
          padding: 10,}}
        ></InputField>
        <Text style={styles.formText}>Enter Username</Text>
        <InputField placeholder="Your Username"
        styles={{height: 40,
          margin: 12,
          borderColor: baseColors.sucessColor,
          borderWidth: 1,
          borderRadius: 50,
          padding: 10,}}
        ></InputField>
        <Text style={styles.formText}>Enter PhoneNumber</Text>
        <InputField placeholder="0092331524568"
        styles={{height: 40,
          margin: 12,
          borderColor: baseColors.sucessColor,
          borderWidth: 1,
          borderRadius: 50,
          padding: 10,}}
        ></InputField>
        <Text style={styles.formText}>Enter Password</Text>
        <InputField placeholder="*************" secureTextEntry={true}
        styles={{height: 40,
          margin: 12,
          borderColor: baseColors.sucessColor,
          borderWidth: 1,
          borderRadius: 50,
          padding: 10,}}
        ></InputField>
        <Text style={styles.Textleft}> What are You? </Text>
        <View style={{
          flexDirection: "row",
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingHorizontal: 30
          
        }}>
          <CheckBox /><Text>Individual</Text>
          <CheckBox 
          /><ModalTester />
          
        </View>
        
        <View style={{
          flexDirection: "row",
          alignItems: 'center'
        }}>
        <CheckBox /><Text>i agree with the terms and agreements</Text>
        </View>


        <View style={{
          flexDirection: "row",
          justifyContent: 'space-evenly',
          paddingTop:30,
          
        }}>
        
        <Button
            styles={{
            elevation: 8,
            backgroundColor: baseColors.secondaryColor,
            borderRadius: 50,
            paddingVertical: 10,
            paddingHorizontal: 12, 
            width:150,
            justifyContent: 'center',
            alignItems: 'center'
            }}
            onPress={() => {
              Navigation.navigate("SignIn");
            }}
          >
            <Text 
            style={{
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}>Signup</Text>
            
            
          </Button>
          
        <Button
            styles={{
            elevation: 8,
            backgroundColor: baseColors.primaryColor,
            borderRadius: 50,
            paddingVertical: 10,
            paddingHorizontal: 12, 
            width:150,
            justifyContent: 'center',
            alignItems: 'center'
            }}
            onPress={() => {
              Navigation.navigate("SignIn");
            }}
          >
            <Text 
            style={{
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}>Signup</Text>
            
          </Button>
          </View>

          </View>
          </View>
          </View>
          // </LinearGradient>
    
  )
}


export default SignUp


