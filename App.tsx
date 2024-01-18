import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screens/Login';
import WelcomeScreen from './Screens/Welcome';
import SignUpScreen from './Screens/SignUp';
import RegisterScreen from './Screens/Register';
import BusRegisterScreen from './Screens/BusRegister';
import AnaSayfa from './Screens/AnaSayfa';
import Detail from './Screens/Detail';
import ReservationAct from './Screens/ReservationAct';
import BusinessHome from './Screens/BusinessHome';
import CusRes from './Screens/CusRes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="BusRegister" component={BusRegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AnaSayfa" component={AnaSayfa} options={{headerShown:false}}/>
        <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}}/>
        <Stack.Screen name="ReservationAct" component={ReservationAct} options={{headerShown:false}}/>
        <Stack.Screen name="BusinessHome" component={BusinessHome} options={{headerShown:false}}/>
        <Stack.Screen name="CusRes" component={CusRes} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
