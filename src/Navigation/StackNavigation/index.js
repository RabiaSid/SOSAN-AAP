import React from "react";
import SignIn from "../../Screens/Common/SignIn/index";
import SignUp from "../../Screens/Common/SignUp/index";
import PersonalDetail from "../../Screens/Auth/Details/PersonalDetail/index";
import CommonDetail from "../../Screens/Auth/Details/CommonDetail/index";
import Verification from "../../Screens/Common/Verification/index";
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
import StuffDetailHospital from "../../Screens/Hospital/StuffDetailHospital/index"
import StuffDetailPharmacy from "../../Screens/Pharmacy/StuffDetailPharmacy/index"
import AssociationDetailHospital from "../../Screens/Hospital/AssociationDetailHospital/index"
import AssociationDetailPharmacy from "../../Screens/Pharmacy/AssociationDetailPharmacy/index"
import AddServicesPharmacy from "../../Screens/Pharmacy/AddServices";
import AddServicesHospital from "../../Screens/Hospital/AddServices";
import WorkingDetailPharmacy from "../../Screens/Pharmacy/WorkingDetailPharmacy/index"
import WorkingDetailHospital from "../../Screens/Hospital/WorkingDetailHospital/index"
import AddANewDoctorPharmacy from "../../Screens/Pharmacy/AddANewDoctorPharmacy/index"
import AddANewDoctorHospital from '../../Screens/Hospital/AddANewDoctorHospital/index'
import HospitalityAppHome from "../../Screens/Hospital/AppHome";
import PharmacyAppHome from "../../Screens/Pharmacy/AppHome";
import AgendaDrugRequest from "../../Screens/Pharmacy/Agenda/DrugRequest/index"
import DoctorDetailHospital from "../../Screens/Hospital/DoctorDetailHospital";
import DoctorDetailPharmacy from "../../Screens/Pharmacy/DoctorDetailPharmacy";
import AgendaSendBill from "../../Screens/Pharmacy/Agenda/SendBill";
import AvailableDrugsPharmacy from "../../Screens/Pharmacy/Drugs/AvailableDrugs";
import AvailableDrugsDetail from "../../Screens/Pharmacy/Drugs/AvailableDrugsDetail";
import AddDrugsDetailPharmacy from "../../Screens/Pharmacy/Drugs/AddDrugsDetail";
import RequestANewMedicineDetail from "../../Screens/Pharmacy/Drugs/RequestANewMedicineDetail";
import CurrentCampaignPharmacy from "../../Screens/Pharmacy/Publicity/CurrentCampaign";
import SetCampaignPharmacy from "../../Screens/Pharmacy/Publicity/SetCampaign";
import OverViewHospitality from "../../Screens/Hospital/Overview";
import AgendaAppointmentHospital from "../../Screens/Hospital/Agenda/AgendaAppointment";
import AgendaAppointmentDetailPharmacy from "../../Screens/Hospital/Agenda/AgendaAppointmentDetail";
import TestAppointmentDetailPharmacy from "../../Screens/Hospital/Agenda/TestAppointmentDetail";
import SpecialistAndDiagnosticsHospital from "../../Screens/Hospital/Services/SpecialistAndDiagnostics";
import DentistsHospital from "../../Screens/Hospital/Services/Dentists";
import AddSpecializationHospital from "../../Screens/Hospital/Services/AddSpecialization";
import UltraSoundHospital from "../../Screens/Hospital/Services/UltraSound";
import ProfileDetailHopital from "../../Screens/Hospital/ProfileDetailHopital";
import CreatePostHospital from "../../Screens/Hospital/Publicity/CreatePost";
import PersonalDetailDoctor from "../../Screens/Doctor/PersonalDetail";
import AssociationDetailDonation from "../../Screens/Donation/AssociationDetail";
import AssociationDetailDoctor from "../../Screens/Doctor/AssociationDetail";

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
          <MainStack.Screen name="StuffDetailHospital" component={StuffDetailHospital} />
          <MainStack.Screen name="StuffDetailPharmacy" component={StuffDetailPharmacy} />
          <MainStack.Screen name="AssociationDetailHospital" component={AssociationDetailHospital} />
          <MainStack.Screen name="AssociationDetailPharmacy" component={AssociationDetailPharmacy} />
          <MainStack.Screen name="AddServicesPharmacy" component={AddServicesPharmacy} />
          <MainStack.Screen name="AddServicesHospital" component={AddServicesHospital} />
          <MainStack.Screen name="WorkingDetailPharmacy" component={WorkingDetailPharmacy} />
          <MainStack.Screen name="WorkingDetailHospital" component={WorkingDetailHospital} />
          <MainStack.Screen name="AddANewDoctorPharmacy" component={AddANewDoctorPharmacy} />
          <MainStack.Screen name="AddANewDoctorHospital" component={AddANewDoctorHospital} />
          <MainStack.Screen name="HospitalityAppHome" component={HospitalityAppHome} />
          <MainStack.Screen name="PharmacyAppHome" component={PharmacyAppHome} />
          <MainStack.Screen name="AgendaDrugRequest" component={AgendaDrugRequest} />
          <MainStack.Screen name="DoctorDetailHospital" component={DoctorDetailHospital} />
          <MainStack.Screen name="DoctorDetailPharmacy" component={DoctorDetailPharmacy} />
          <MainStack.Screen name="AgendaSendBill" component={AgendaSendBill} />
          <MainStack.Screen name="AvailableDrugsPharmacy" component={AvailableDrugsPharmacy} />
          <MainStack.Screen name="AvailableDrugsDetail" component={AvailableDrugsDetail} />
          <MainStack.Screen name="AddDrugsDetailPharmacy" component={AddDrugsDetailPharmacy} />
          <MainStack.Screen name="RequestANewMedicineDetail" component={RequestANewMedicineDetail} />
          <MainStack.Screen name="CurrentCampaignPharmacy" component={CurrentCampaignPharmacy} />
          <MainStack.Screen name="SetCampaignPharmacy" component={SetCampaignPharmacy} />
          <MainStack.Screen name="OverViewHospitality" component={OverViewHospitality} />
          <MainStack.Screen name="AgendaAppointmentHospital" component={AgendaAppointmentHospital} />
          <MainStack.Screen name="AgendaAppointmentDetailPharmacy" component={AgendaAppointmentDetailPharmacy} />
          <MainStack.Screen name="TestAppointmentDetailPharmacy" component={TestAppointmentDetailPharmacy} />
          <MainStack.Screen name="SpecialistAndDiagnosticsHospital" component={SpecialistAndDiagnosticsHospital} />
          <MainStack.Screen name="DentistsHospital" component={DentistsHospital} />
          <MainStack.Screen name="AddSpecializationHospital" component={AddSpecializationHospital} />
          <MainStack.Screen name="UltraSoundHospital" component={UltraSoundHospital} />
          <MainStack.Screen name="ProfileDetailHopital" component={ProfileDetailHopital} />
          <MainStack.Screen name="CreatePostHospital" component={CreatePostHospital} />
          <MainStack.Screen name="PersonalDetailDoctor" component={PersonalDetailDoctor} />
          <MainStack.Screen name="AssociationDetailDonation" component={AssociationDetailDonation} />
          <MainStack.Screen name="AssociationDetailDoctor" component={AssociationDetailDoctor} />

          <MainStack.Screen name="PharmacyTabBottomNavigation" component={PharmacyTabBottomNavigation} />
          <MainStack.Screen name="HospitalityTabBottomNavigation" component={HospitalityTabBottomNavigation} />
          <MainStack.Screen name="Tabs" component={TabBottomNavigation} />
          <MainStack.Screen name="UserTabs" component={UserTabBottomNavigation} />
          
        </MainStack.Navigator>
      
    
  );
};

export default StackNavigation;
