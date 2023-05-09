import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import T1 from '../screens/T1';
import T2 from '../screens/T2';




const AppStack = createStackNavigator();

const TestNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Test1" component={T1}/>
        <AppStack.Screen name="Test2" component={T2}/>
    </AppStack.Navigator>
)

export default TestNavigator