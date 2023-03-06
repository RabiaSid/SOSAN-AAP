import React from "react";
import SignIn from "../../Screens/Common/SignIn/index";
import SignUp from "../../Screens/Common/SignUp/index";
import PersonalDetail from "../../Screens/Auth/Details/PersonalDetail/index";
import CommonDetail from "../../Screens/Auth/Details/CommonDetail/index";
import Verification from "../../Screens/Common/Verification/index";
// import Services from "../../Screens/Common/AddServices/index";
import AppHome from "../../Screens/Common/AppHome/index";
import Agenda from "../../Screens/Common/Agenda/Agenda/index";
import Appointment from "../../Screens/Auth/Appointments/Appointment";
import AppointmentRequest from "../../Screens/Auth/Appointments/AppointmentRequest";
import CancelledAppointment from "../../Screens/Auth/Appointments/CancelledAppointment/index";
import Earning from "../../Screens/Saving/Earning/index";
import ChangePassword from "../../Screens/Auth/ChangePassword/index";
import HelpCenter from "../../Screens/Auth/HelpCenter/index";
import TermsAndConditions  from "../../Screens/Auth/TermsAndConditions/index";
import Epargne from "../../Screens/Saving/Epargne/index";
import CreatePost from "../../Screens/Auth/Post/CreatePost/index";
import PostDetail from "../../Screens/Auth/Details/PostDetail/index";
import AuthDetail from "../../Screens/Auth/Details/AuthDetail";
import PaymentSuccessFull from "../../Screens/Auth/Payment/PaymentSuccessFull/index"
import UserAppHome from "../../Screens/User/AppHome/index"
import UserSignIn from "../../Screens/User/SignIn";
import Faq from "../../Screens/Auth/FAQ/index";
import Privacy from "../../Screens/Auth/Privacy/index"
import Invite from "../../Screens/User/Invite/index"
import PharmacyOrderList from "../../Screens/Pharmacy/OrderList/index";
import SearchDrug from "../../Screens/Pharmacy/SearchDrug/index";
import AddDrug from "../../Screens/Pharmacy/AddDrug/index";
import NearbyPharmacy from "../../Screens/Pharmacy/NearbyPharmacy/index";
import AttachmentPharmacy from "../../Screens/Pharmacy/AttachmentPharmacy/index";
import MedicationPharmacy from "../../Screens/Pharmacy/MedicationPharmacy/index";
import Payment from "../../Screens/Auth/Payment/Payment/index";
import NearbyHospital from "../../Screens/Hospital/NearByHospital/index";
import HospitalDoctor from "../../Screens/Hospital/HospitalDoctor/index";
import AppointmentDoctor from "../../Screens/Hospital/AppointmentDoctor/index"
import NearByDoctor from "../../Screens/Doctor/NearByDoctor/index"
import Availability from "../../Screens/Doctor/Availability/index"
import NearbyDonation from "../../Screens/Donation/NearByDonation/index"
import AddDonation from "../../Screens/Donation/AddDonation/index"
import SelectDateAppointment from "../../Screens/Hospital/SelectDateAppointment/index"
import ProtecteeDetail from "../../Screens/Auth/Details/ProtecteeDetail"
import AvailabilityPharmacy from "../../Screens/Pharmacy/AvailabilityPharmacy/index"
import Conversation from "../../Screens/Common/Conversation";
import AppointmentDetail from "../../Screens/Auth/Details/AppointmentDetail/index";
import Assurances from '../../Screens/AssurancesAndInsurance/OrderList/index';
import AssurancePaymentDone from "../../Screens/AssurancesAndInsurance/AssurancePaymentDone/index"
import AvaialblePlan from '../../Screens/AssurancesAndInsurance/AvaialblePlan/index';
import AssurancesAbout from '../../Screens/AssurancesAndInsurance/AssuranceAbout/index'
import MedicalHistory from "../../Screens/AssurancesAndInsurance/MedicalHistory/index"
import PaymentDone  from '../../Screens/Auth/Payment/PaymentDone';
import WorkingDetailAgenda from '../../Screens/Common/Agenda/WorkingDetailAgenda/index'
import SkipDetailsHospital from "../../Screens/Hospital/SkipDetailsHospital/index"
import SkipDetailsPharmacy from "../../Screens/Pharmacy/SkipDetailsPharmacy/index"
import SkipAppointments from "../../Screens/Auth/Skip/SkipAppointments";
import RegisteredDetailHospital from "../../Screens/Hospital/RegisteredDetailHospital/index"
import RegisteredDetailPharmacy from "../../Screens/Pharmacy/RegisteredDetailPharmacy/index"
import AddServicesPharmacy from "../../Screens/Pharmacy/AddServices";
import AddServicesHospital from "../../Screens/Hospital/AddServices";
import WorkingDetailPharmacy from "../../Screens/Pharmacy/WorkingDetailPharmacy/index"
import WorkingDetailHospital from "../../Screens/Hospital/WorkingDetailHospital/index"
import AddANewDoctorPharmacy from "../../Screens/Pharmacy/AddANewDoctorPharmacy/index"
import AddANewDoctorHospital from '../../Screens/Hospital/AddANewDoctorHospital/index'
import HospitalityAppHome from "../../Screens/Hospital/AppHome";
import PharmacyAppHome from "../../Screens/Pharmacy/AppHome";
import AgendaDrugRequest from "../../Screens/Pharmacy/Agenda/DrugRequest/index"

import PharmacyTabBottomNavigation from "../PharmacyTabBottomNavigation";
import HospitalityTabBottomNavigation from "../HospitalityTabBottomNavigation";
import TabBottomNavigation from "../TabBottomNavigation/index";
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
          {/* <MainStack.Screen name="Services" component={Services} /> */}
          <MainStack.Screen name="AppHome" component={AppHome} />
          <MainStack.Screen name="Agenda" component={Agenda}/>
          <MainStack.Screen name="Earning" component={Earning}/>
          <MainStack.Screen name="Appointment" component={Appointment}/>
          <MainStack.Screen name="AppointmentRequest" component={AppointmentRequest}/>
          <MainStack.Screen name="CancelledAppointment" component={CancelledAppointment}/>
          <MainStack.Screen name="ChangePassword" component={ChangePassword}/>
          <MainStack.Screen name="HelpCenter" component={HelpCenter}/>
          <MainStack.Screen name="TermsAndConditions" component={TermsAndConditions}/>
          <MainStack.Screen name="Epargne" component={Epargne}/>
          <MainStack.Screen name="CreatePost" component={CreatePost} />
          <MainStack.Screen name="PostDetail" component={PostDetail} />
          <MainStack.Screen name="AuthDetail" component={AuthDetail} />
          <MainStack.Screen name="UserAppHome" component={UserAppHome} />
          <MainStack.Screen name="UserSignIn" component={UserSignIn} />
          <MainStack.Screen name="Faq" component={Faq} />
          <MainStack.Screen name="Invite" component={Invite} />
          <MainStack.Screen name="Privacy" component={Privacy} />
          <MainStack.Screen name="PaymentSuccessFull" component={PaymentSuccessFull} />
          <MainStack.Screen name="PharmacyOrderList" component={PharmacyOrderList} />
          <MainStack.Screen name="SearchDrug" component={SearchDrug} />
          <MainStack.Screen name="AddDrug" component={AddDrug} />
          <MainStack.Screen name="NearbyPharmacy" component={NearbyPharmacy} />
          <MainStack.Screen name="AttachmentPharmacy" component={AttachmentPharmacy} />
          <MainStack.Screen name="MedicationPharmacy" component={MedicationPharmacy} />
          <MainStack.Screen name="Payment" component={Payment} />
          <MainStack.Screen name="NearbyHospital" component={NearbyHospital} />
          <MainStack.Screen name="HospitalDoctor" component={HospitalDoctor} />
          <MainStack.Screen name="AppointmentDoctor" component={AppointmentDoctor} />
          <MainStack.Screen name="NearByDoctor" component={NearByDoctor} />
          <MainStack.Screen name="Availability" component={Availability} />
          <MainStack.Screen name="NearbyDonation" component={NearbyDonation} />
          <MainStack.Screen name="AddDonation" component={AddDonation} />
          <MainStack.Screen name="SelectDateAppointment" component={SelectDateAppointment} />
          <MainStack.Screen name="ProtecteeDetail" component={ProtecteeDetail} />
          <MainStack.Screen name="AvailabilityPharmacy" component={AvailabilityPharmacy} />
          <MainStack.Screen name="Conversation" component={Conversation} />
          <MainStack.Screen name="AppointmentDetail" component={AppointmentDetail} />
          <MainStack.Screen name="Assurances" component={Assurances} />
          <MainStack.Screen name="AssurancePaymentDone" component={AssurancePaymentDone} />
          <MainStack.Screen name="AvaialblePlan" component={AvaialblePlan} />
          <MainStack.Screen name="AssurancesAbout" component={AssurancesAbout} />
          <MainStack.Screen name="MedicalHistory" component={MedicalHistory} />
          <MainStack.Screen name="PaymentDone" component={PaymentDone} />
          <MainStack.Screen name="WorkingDetailAgenda" component={WorkingDetailAgenda} />
          <MainStack.Screen name="SkipDetailsHospital" component={SkipDetailsHospital} />
          <MainStack.Screen name="SkipDetailsPharmacy" component={SkipDetailsPharmacy} />
          <MainStack.Screen name="SkipAppointments" component={SkipAppointments} />
          <MainStack.Screen name="RegisteredDetailHospital" component={RegisteredDetailHospital} />
          <MainStack.Screen name="RegisteredDetailPharmacy" component={RegisteredDetailPharmacy} />
          <MainStack.Screen name="AddServicesPharmacy" component={AddServicesPharmacy} />
          <MainStack.Screen name="AddServicesHospital" component={AddServicesHospital} />
          <MainStack.Screen name="WorkingDetailPharmacy" component={WorkingDetailPharmacy} />
          <MainStack.Screen name="WorkingDetailHospital" component={WorkingDetailHospital} />
          <MainStack.Screen name="AddANewDoctorPharmacy" component={AddANewDoctorPharmacy} />
          <MainStack.Screen name="AddANewDoctorHospital" component={AddANewDoctorHospital} />
          <MainStack.Screen name="HospitalityAppHome" component={HospitalityAppHome} />
          <MainStack.Screen name="PharmacyAppHome" component={PharmacyAppHome} />
          <MainStack.Screen name="AgendaDrugRequest" component={AgendaDrugRequest} />
          
          <MainStack.Screen name="PharmacyTabBottomNavigation" component={PharmacyTabBottomNavigation} />
          <MainStack.Screen name="HospitalityTabBottomNavigation" component={HospitalityTabBottomNavigation} />
          <MainStack.Screen name="Tabs" component={TabBottomNavigation} />
          <MainStack.Screen name="UserTabs" component={UserTabBottomNavigation} />
          
        </MainStack.Navigator>
      
    
  );
};

export default StackNavigation;
