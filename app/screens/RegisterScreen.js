import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Formik} from 'formik';

import AppTextinput from '../components/AppTextinput';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';

function RegisterScreen(props) {

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <AppScreen style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons 
                    name="library"
                    size={60}
                    color={AppColors.primaryColor}/>
            </View>

            <Formik>


                
            </Formik>
            <View style={styles.textInputContainer}>
                <AppTextinput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    placeholder="Full Name"
                    onChangeText = { input => setEmail(input)}
                    />
                <AppTextinput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    icon="email"
                    placeholder="Email Address"
                    onChangeText = { input => setEmail(input)}
                    />
                <AppTextinput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText = { input => setPassword(input)}
                    />
            </View>
            <AppButton title="Register" onPress={() => console.log(email, password)}/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.otherColor,
        padding: 25,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    textInputContainer: {
        marginVertical: 75,
    }
})

export default RegisterScreen;