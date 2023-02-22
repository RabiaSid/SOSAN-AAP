import React from "react";
import SignIn from "../../Screens/Common/SignIn/index";
import SignUp from "../../Screens/Common/SignUp/index";
import PersonalDetail from "../../Screens/Auth/Details/PersonalDetail/index";
import CommonDetail from "../../Screens/Auth/Details/CommonDetail/index";
import Verification from "../../Screens/Common/Verification/index";
import Services from "../../Screens/Common/Services/index";
import AppHome from "../../Screens/Common/AppHome/index";
import Agenda from "../../Screens/Common/FeedSection/Agenda/index";
import Appointment from "../../Screens/Auth/Appointments/Appointment";
import AppointmentRequest from "../../Screens/Auth/Appointments/AppointmentRequest";
import CancelledAppointment from "../../Screens/Auth/Appointments/CancelledAppointment/index";
import Earning from "../../Screens/Saving/Earning/index";
import Publicity from "../../Screens/Common/FeedSection/Publicity/index";
import ChangePassword from "../../Screens/Auth/ChangePassword/index";
import HelpCenter from "../../Screens/Auth/HelpCenter/index";
import TermsAndConditions  from "../../Screens/Auth/TermsAndConditions/index";
import TabBottomNavigation from "../TabBottomNavigation/index";
import Epargne from "../../Screens/Saving/Epargne";
import CreatePost from "../../Screens/Auth/Post/CreatePost/index";
import PostDetail from "../../Screens/Auth/Details/PostDetail/index";
import PaymentSuccessFull from "../../Screens/Auth/Payment/PaymentSuccessFull/index"
import UserAppHome from "../../Screens/User/AppHome/index"
import UserSignIn from "../../Screens/User/SignIn";
import Faq from "../../Screens/Auth/FAQ/index";
import Privacy from "../../Screens/Auth/Privacy/index"
import UserTabBottomNavigation from "../UserTabBottomNavigation";
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
          <MainStack.Screen name="Earning" component={Earning}/>
          <MainStack.Screen name="Appointment" component={Appointment}/>
          <MainStack.Screen name="AppointmentRequest" component={AppointmentRequest}/>
          <MainStack.Screen name="CancelledAppointment" component={CancelledAppointment}/>
          <MainStack.Screen name="Publicity" component={Publicity}/>
          <MainStack.Screen name="ChangePassword" component={ChangePassword}/>
          <MainStack.Screen name="HelpCenter" component={HelpCenter}/>
          <MainStack.Screen name="TermsAndConditions" component={TermsAndConditions}/>
          <MainStack.Screen name="Epargne" component={Epargne}/>
          <MainStack.Screen name="CreatePost" component={CreatePost} />
          <MainStack.Screen name="PostDetail" component={PostDetail} />
          <MainStack.Screen name="UserAppHome" component={UserAppHome} />
          <MainStack.Screen name="UserSignIn" component={UserSignIn} />
          <MainStack.Screen name="Faq" component={Faq} />
          <MainStack.Screen name="Privacy" component={Privacy} />
          <MainStack.Screen name="PaymentSuccessFull" component={PaymentSuccessFull} />
          <MainStack.Screen name="Tabs" component={TabBottomNavigation} />
          <MainStack.Screen name="UserTabs" component={UserTabBottomNavigation} />
          
        </MainStack.Navigator>
      
    
  );
};

export default StackNavigation;
