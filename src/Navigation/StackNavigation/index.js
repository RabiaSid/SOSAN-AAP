import React from "react";
import SignIn from "../../Screens/Common/SignIn/index";
import SignUp from "../../Screens/Common/SignUp/index";
import PersonalDetail from "../../Screens/Common/Details/PersonalDetail/index";
import CommonDetail from "../../Screens/Common/Details/CommonDetail/index";
import Verification from "../../Screens/Common/Verification/index";
import Services from "../../Screens/Common/Services/index";
import AppHome from "../../Screens/Common/AppHome/index";
import Agenda from "../../Screens/Common/FeedSection/Agenda/index";
import TabBottomNavigation from "../TabBottomNavigation/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainStack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    
      
        <MainStack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen name="SignIn" component={SignIn} />
          <MainStack.Screen name="SignUp" component={SignUp} />
          <MainStack.Screen name="PersonalDetail" component={PersonalDetail} />
          <MainStack.Screen name="CommonDetail" component={CommonDetail} />
          <MainStack.Screen name="Verification" component={Verification} />
          <MainStack.Screen name="Services" component={Services} />
          <MainStack.Screen name="AppHome" component={AppHome} />
          <MainStack.Screen name="Agenda" component={Agenda}/>
          <MainStack.Screen name="Tabs" component={TabBottomNavigation} />
        </MainStack.Navigator>
      
    
  );
};

export default StackNavigation;
