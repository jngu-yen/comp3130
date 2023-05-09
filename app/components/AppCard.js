import React from 'react';
import { View,Image, StyleSheet } from 'react-native';
import AppColors from '../config/AppColors';
import AppText from './AppText';

function AppCard({category, title, subtitle, image}) {
    return (
        <View style={styles.container}>
            {isFinite(image)? <Image style={styles.image} source={image}/> : <Image style={styles.image} source={{uri: image}}/>}
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
            <AppText style={styles.subtitle}>{category}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.otherColorLite,
        borderRadius: 20,
        overflow:"hidden",
        paddingBottom: 10,
        marginBottom: 25,
    },
    image: {
        height: 200,
        width: "100%",
    },
    title: {
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
    }
})

export default AppCard;