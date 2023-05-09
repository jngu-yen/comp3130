import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import AppIcon from './AppIcon';


function AppPickerItem({onPress, label, icon, backgroundColor}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AppIcon
                name = {icon}
                iconColor='white'
                backgroundColor={backgroundColor}
            />
            
            <AppText>
                {label}
            </AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "33%",
        justifyContent: "center",
        alignItems: "center",
        
    }
    
})
export default AppPickerItem;