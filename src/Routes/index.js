import React from 'react'
import SignIn from "../Screens/SignIn/index"
import SignUp from "../Screens/SignUp/index"
import PersonalDetail from "../Screens/Details/PersonalDetail/index"
import CommonDetail from "../Screens/Details/CommonDetail/index"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const RoutesView = () => {
  return (
<>
<NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PersonalDetail" component={PersonalDetail} />
        <Stack.Screen name="CommonDetail" component={CommonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
</>
  )
}

export default RoutesView