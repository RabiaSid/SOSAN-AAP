import React from "react";
import SignIn from "../../Screens/SignIn/index";
import SignUp from "../../Screens/SignUp/index";
import PersonalDetail from "../../Screens/Details/PersonalDetail/index";
import CommonDetail from "../../Screens/Details/CommonDetail/index";
import Verification from "../../Screens/Verification/index";
import Services from "../../Screens/Services/index";
import AppHome from "../../Screens/AppHome/index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainStack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
          <MainStack.Screen name="SignIn" component={SignIn} />
          <MainStack.Screen name="SignUp" component={SignUp} />
          <MainStack.Screen name="PersonalDetail" component={PersonalDetail} />
          <MainStack.Screen name="CommonDetail" component={CommonDetail} />
          <MainStack.Screen name="Verification" component={Verification} />
          <MainStack.Screen name="Services" component={Services} />
          <MainStack.Screen name="AppHome" component={AppHome} /> 
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default StackNavigation;
