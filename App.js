import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
// import {MaterialCommunityIcons} from '@expo/vector-icons';

// import AppColors from './app/config/AppColors';
// import AppText from './app/components/AppText';
// import AppButton from './app/components/AppButton';
// import AppScreen from './app/components/AppScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import TestScreen from './app/screens/TestScreen';
import AuthNavigator from './app/navigation/AuthNavigator';

import HomeScreen from './app/screens/HomeScreen';
import MyBooksScreen from './app/screens/MyBooksScreen';
import MyAuthorsScreen from './app/screens/MyAuthorsScreen';
import NewBookScreen from './app/screens/NewBookScreen';
import TabNavigator from './app/navigation/TabNavigator';
import TestNavigator from './app/navigation/TestNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
