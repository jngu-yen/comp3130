import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function AppTextinput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={22}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0eb',
        flexDirection: 'row',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
    },
    textInput: {
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Cochin",
        marginLeft: 10,
    }
    
})
export default AppTextinput;