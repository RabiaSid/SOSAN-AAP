import React from 'react'
import { 
    View, 
    Text,
    Button 
} from 'react-native'
import {useNavigation} from "@react-navigation/native"

function SignUp() {
 const Navigation = useNavigation ()
  return (
    <View>
        <Text>Signup</Text>
        <Button onPress={() => {Navigation.navigate("SignIn")}}></Button>
    </View>
  )
}

export default SignUp