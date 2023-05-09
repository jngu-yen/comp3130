import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from './TabNavigator';

const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator screenOptions={{headerShown:false}}>
        <AppStack.Screen name="Welcome" component={WelcomeScreen}/>
        <AppStack.Screen name="Login" component={LoginScreen} options={{title: 'Login Screen'}}/>
        <AppStack.Screen name="Register" component={RegisterScreen}/>
        <AppStack.Screen name="Home" component={TabNavigator}/>
    </AppStack.Navigator>
)

export default AuthNavigator