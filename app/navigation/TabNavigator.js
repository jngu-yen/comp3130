import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyBooksScreen from '../screens/MyBooksScreen';
import NewBookScreen from '../screens/NewBookScreen';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import HomeNavigator from './HomeNavigator';

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator
        screenOptions = {
            {
                headerShown: false,
                tabBarActiveBackgroundColor:AppColors.primaryColor, 
                tabBarActiveTintColor: AppColors.otherColor
            }
        }
    >
        <AppTab.Screen 
            name="Home"
            component={HomeNavigator}
            options={
                {tabBarIcon: () => <AppIcon
                                        size={30}
                                        name="home"
                                        backgroundColor={AppColors.otherColor}
                                    />
                }
            }
        />
        <AppTab.Screen
            name="NewBooks"
            component={NewBookScreen}
            options={
                {tabBarIcon: () => <AppIcon
                                        size={30}
                                        name="plus-circle"
                                        backgroundColor={AppColors.otherColor}
                                    />
                }
            }
        />
        <AppTab.Screen
            name="MyBooks"
            component={MyBooksScreen}
            options={
                {tabBarIcon: () => <AppIcon
                                        size={30}
                                        name="book-open-variant"
                                        backgroundColor={AppColors.otherColor}
                                    />
                }
            }
        />
    </AppTab.Navigator>
)

export default TabNavigator;