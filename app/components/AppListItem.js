import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import AppText from './AppText';
import AppColors from '../config/AppColors';

function AppListItem({image, title, subtitle, IconComponent, onPress, onSwipeLeft}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={onSwipeLeft}>
                <TouchableHighlight onPress={onPress} underlayColor={AppColors.otherColorLite}>
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image source={image} style={styles.image}/>}
                        <View style={styles.textContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            {subtitle && <AppText>{subtitle}</AppText>}
                        </View>    
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
    },
    image: {
        height: 75,
        width: 75,
        borderRadius: 37,
        marginLeft: 10,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})
export default AppListItem;