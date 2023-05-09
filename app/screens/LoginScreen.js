import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Formik } from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native'


import AppTextinput from '../components/AppTextinput';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';

const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).max(8).label("Password"),
    }
);

const users = [
    {
        ID: "user1",
        Name: "Mr. Bean",
        Email: "user1@email.com",
        Password: "pass1",
        image: require('../assets/bean.png')

    },
    {
        ID: "user2",
        Name: "Chu Hai",
        Email: "user2@email.com",
        Password: "pass2",
        image: require('../assets/mrNiceGuy.png')
    },
    {
        ID: "user3",
        Name: "Samson",
        Email: "user3@email.com",
        Password: "pass3",
        image: require('../assets/samson.png')
    }
];

const validateUser = ({email, password}) => {
    return (
        users.filter(
            (user) => user.Email === email && user.Password === password
        ).length > 0
    );
};

const getUser = ({email}) => {
    return users.find((user) => user.Email === email);
}


const createUser = ({email}) => {
    let globalData = DataManager.getInstance();
    let userID = getUser({email}).ID;
    globalData.setUserID(userID);
}

function LoginScreen({navigation}) {



    return (
        <AppScreen style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons 
                    name="library"
                    size={60}
                    color={AppColors.primaryColor}/>
            </View>

            <Formik
                initialValues={{email:'', password:'',}}
                onSubmit = {(values, {resetForm})=> {
                    if(validateUser(values)){
                        console.log(getUser(values));
                        resetForm();
                        createUser(values);
                        navigation.navigate("Home", {
                            screen: "Home",
                            params: {
                                screen:"Home",
                                params: {
                                    paramEmail: values.email,
                                    paramName: getUser(values).Name,
                                    paramImage: getUser(values).image,
                                },
                            }
                        }
                        );
                    }else{
                        resetForm();
                        alert("Invalid Credentials!");
                    }
                }}
                validationSchema={schema}
            >
                
            {({values, handleChange, handleSubmit, errors, setFieldTouched, touched})=> (
                <>
                <View style={styles.textInputContainer}>
                <AppTextinput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    icon="email"
                    placeholder="Email Address"
                    value={values.email}
                    onChangeText = {handleChange("email")}
                    onBlur = {() => setFieldTouched("email")}
                    />
                {touched.email && <AppText style={{color:"red"}}>{errors.email}</AppText>}
                <AppTextinput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    secureTextEntry={true}
                    placeholder="Password"
                    value={values.password}
                    onChangeText = {handleChange("password")}
                    onBlur = {() => setFieldTouched("password")}
                    />
                {touched.password && <AppText style={{color:"red"}}>{errors.password}</AppText>}
                </View>
                <AppButton title="Login" onPress={handleSubmit}/>
                </>

            )}



            </Formik>
            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.otherColor,
        padding: 25,
        marginTop: 0,
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

export default LoginScreen;