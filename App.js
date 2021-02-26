import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  
          Text, 
         TouchableWithoutFeedback,
         Image, 
         SafeAreaView, 
         TouchableOpacity, 
         Button, 
         Alert, 
         Platform, 
         View,
         Dimensions } from 'react-native';

import { useDimension,
         useDeviceOrientation
       } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';


export default function App() {
  return <WelcomeScreen />;
  
}


