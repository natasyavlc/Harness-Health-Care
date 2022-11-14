import React from 'react';
import SignIn from '../Screen/Auth/SignIn';
import SignUp from '../Screen/Auth/SignUp';
import AuthScreen from '../Screen/Auth/AuthScreen';
import SplashScreen from '../Screen/SplashScreen/index';
import GettingStart from '../Screen/GettingStart/index';
import ForgotPassword from '../Screen/ForgotPassword/index';
import MainStack from '../Route/BottomTabs/Index';
import DetailAppointment from '../Screen/Appointment/DetailAppointment';
import SessionFinished from '../Screen/Appointment/SessionFinished';
import LabTest from '../Screen/Appointment/LabTest';
import MedicalRecords from '../Screen/MedicalRecords';
import FamilyHistory from '../Screen/MedicalRecords/FamilyHistory';
import SurgicalHistory from '../Screen/MedicalRecords/SurgicalHistory';
import AccidentHistory from '../Screen/MedicalRecords/AccidentHistory';
import DiagnosisHistory from '../Screen/MedicalRecords/DiagnosisHistory';
import MedicationHistory from '../Screen/MedicalRecords/MedicationHistory';
import AllergiesHistory from '../Screen/MedicalRecords/AllergiesHistory';
import ChildhoodDisease from '../Screen/MedicalRecords/ChildhoodDisease';
import MedicalProblem from '../Screen/MedicalRecords/MedicalProblem';
import DentalTreatments from '../Screen/MedicalRecords/DentalTreatments';
import BloodTransfusion from '../Screen/MedicalRecords/BloodTransfusion';
import PrescribedDrugs from '../Screen/MedicalRecords/PrescribedDrugs';
import ImmunizationsAllergies from '../Screen/MedicalRecords/ImmunizationsAllergies';
import GenderRelated from '../Screen/MedicalRecords/GenderRelated';
import ImmunizationsHistory from '../Screen/MedicalRecords/ImmunizationsHistory';
import HealthHabit from '../Screen/MedicalRecords/HealthHabit';
import Edit_Profile from '../Screen/Profile/form_edit_profile';
import BookStep1 from '../Screen/BookAppoit/BookStep1';
import BookStep2 from '../Screen/BookAppoit/BookStep2';
import Complaint from '../Screen/BookAppoit/Complaint';
import BookProcess from '../Screen/BookAppoit/BookProcess';
import InputCode from '../Screen/ForgotPassword/InputCode';
import ResetPassword from '../Screen/ForgotPassword/ResetPassword';
import ResetPasswordSuccessful from '../Screen/ForgotPassword/ResetPasswordSuccessful';
import DoctorList from '../Screen/Home/DoctorList';
import DoctorDetails from '../Screen/Home/Doctor_list_detail';
import PatientReview from '../Screen/Patient/PatientReview';
import WriteReviews from '../Screen/Patient/WriteReviews';


import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
const Stack = createStackNavigator();
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import RegisterNewPatient from '../Screen/Patient/RegisterNewPatient';
import PatientProfile from '../Screen/Patient/PatientProfile';
import AppointmentDetails from '../Screen/AppointmentDetails/AppointmentDetails';
import FinishedMedications from '../Screen/AppointmentDetails/FinishedMedications';
import FinishedRecommendedLabTests from '../Screen/AppointmentDetails/FinishedRecommendedLabTests';
import FinishedDiagnosis from '../Screen/AppointmentDetails/FinishedDiagnosis';
import FinishedDoctorNotes from '../Screen/AppointmentDetails/FinishedDoctorNotes';
const AppStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        {/* --- ManualUser ---- */}
        <Stack.Screen
          name="GettingStart"
          component={GettingStart}
        />
        {/* --- auth/SignIn/register ---- */}
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        {/* --- Reset Password ---- */}
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          name="InputCode"
          component={InputCode}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
        />
        <Stack.Screen
          name="ResetPasswordSuccessful"
          component={ResetPasswordSuccessful}
        />
        {/* --- BottomTabs ---- */}
        <Stack.Screen
          name="MainStack"
          component={MainStack}
        />
        {/* --- Edit Profile ---- */}
        <Stack.Screen
          name="EditProfile"
          component={Edit_Profile}
        />
        {/* --- APPOINTMENTS ---- */}
        <Stack.Screen
          name="DetailAppointment"
          component={DetailAppointment}
        />
        <Stack.Screen
          name="SessionFinished"
          component={SessionFinished}
        />
        <Stack.Screen
          name="LabTest"
          component={LabTest}
        />
        {/* MEDICAL RECORDS */}
        <Stack.Screen
          name="MedicalRecords"
          component={MedicalRecords}
        />
        <Stack.Screen
          name="FamilyHistory"
          component={FamilyHistory}
        />
        <Stack.Screen
          name="SurgicalHistory"
          component={SurgicalHistory}
        />
        <Stack.Screen
          name="AccidentHistory"
          component={AccidentHistory}
        />
        <Stack.Screen
          name="DiagnosisHistory"
          component={DiagnosisHistory}
        />
        <Stack.Screen
          name="MedicationHistory"
          component={MedicationHistory}
        />
        <Stack.Screen
          name="AllergiesHistory"
          component={AllergiesHistory}
        />
        <Stack.Screen
          name="ChildhoodDisease"
          component={ChildhoodDisease}
        />
        <Stack.Screen
          name="MedicalProblem"
          component={MedicalProblem}
        />
        <Stack.Screen
          name="DentalTreatments"
          component={DentalTreatments}
        />
        <Stack.Screen
          name="BloodTransfusion"
          component={BloodTransfusion}
        />
        <Stack.Screen
          name="PrescribedDrugs"
          component={PrescribedDrugs}
        />
        <Stack.Screen
          name="ImmunizationsAllergies"
          component={ImmunizationsAllergies}
        />
        <Stack.Screen
          name="GenderRelated"
          component={GenderRelated}
        />
        <Stack.Screen
          name="ImmunizationsHistory"
          component={ImmunizationsHistory}
        />
        <Stack.Screen
          name="HealthHabit"
          component={HealthHabit}
        />
        <Stack.Screen
          name="RegisterNewPatient"
          component={RegisterNewPatient}
        />
        <Stack.Screen
          name="PatientProfile"
          component={PatientProfile}
        />
        {/* --- Book an Appointment ---- */}
        <Stack.Screen
          name="BookStep1"
          component={BookStep1}
        />
        <Stack.Screen
          name="BookStep2"
          component={BookStep2}
        />
        <Stack.Screen
          name="Complaint"
          component={Complaint}
        />
        <Stack.Screen
          name="BookProcess"
          component={BookProcess}
        />
        {/* --- Specialist Doctors ---- */}
        <Stack.Screen
          name="DoctorList"
          component={DoctorList}
        />
        <Stack.Screen
          name="DoctorDetails"
          component={DoctorDetails}
        />
        {/* --- Reviews ---- */}

        <Stack.Screen
          name="PatientReview"
          component={PatientReview}
        />
        <Stack.Screen
          name="WriteReviews"
          component={WriteReviews}
        />
        {/* --- appoit finised/details ---- */}
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetails}
        />
        <Stack.Screen
          name="FinishedMedications"
          component={FinishedMedications}
        />
        <Stack.Screen
          name="FinishedRecommendedLabTests"
          component={FinishedRecommendedLabTests}
        />
        <Stack.Screen
          name="FinishedDiagnosis"
          component={FinishedDiagnosis}
        />
        <Stack.Screen
          name="FinishedDoctorNotes"
          component={FinishedDoctorNotes}
        />
      </Stack.Navigator>
    </>
  )
}

export default AppStack;