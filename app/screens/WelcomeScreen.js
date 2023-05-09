import React from 'react';
import { StyleSheet, ImageBackground, Platform, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText'
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';

const blurRadiusValue = Platform.OS === 'android' ? 5.5 : 0.7;

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <ImageBackground
                source = {require("../assets/cool-iphone-HD-background.jpg")}
                style = {styles.background}
                blurRadius={blurRadiusValue}>
            
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons 
                    name="library"
                    size={60}
                    color={AppColors.primaryColor}/>
                <AppText style={styles.title}> Whaddup Beech </AppText>
            </View>
            
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={ () => navigation.navigate("Login")}/>
                <AppButton title="Register" color="secondaryColor" onPress={ () => navigation.navigate("Register")}/>
            </View>
            </ImageBackground>
        </AppScreen>        
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
    },
    welcomeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    title: {
        color: AppColors.primaryColor 
    },
    buttonContainer: {
        marginTop: 350,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 150,
        alignSelf: 'flex-end',
        width: '50%'
    }
})

export default WelcomeScreen;