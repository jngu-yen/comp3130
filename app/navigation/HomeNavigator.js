import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import MyAuthorsScreen from '../screens/MyAuthorsScreen'



const AppStack = createStackNavigator();

const HomeNavigator = () => (
    <AppStack.Navigator 
        screenOptions={
            {
                headerShown: false,
                presentation:'modal'
            }
        }
    >
        <AppStack.Screen 
            name="Home" 
            component={HomeScreen} 
        />
        <AppStack.Screen 
            name="MyBooks" 
            component={MyBooksScreen} 
        />
        <AppStack.Screen 
            name="MyAuthors" 
            component={MyAuthorsScreen} 
        />
    </AppStack.Navigator>
)

export default HomeNavigator