import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppListItem from '../components/AppListItem';
import AppIcon from '../components/AppIcon';


const data = [
    {
        id: 1,
        name: "My Books",
        icon: <AppIcon 
                name="book-open-variant" 
                size={50} iconColor={AppColors.otherColor} 
                backgroundColor={AppColors.primaryColor}
                />,
        navigation: "MyBooks"
    },
    {
        id: 2,
        name: "My Authors",
        icon: <AppIcon 
                name="account-tie" 
                size={50} iconColor={AppColors.otherColor}
                backgroundColor={AppColors.primaryColor}
                />,
        navigation: "MyAuthors"
    },
]



function HomeScreen({navigation, route}) {
    return (
        <AppScreen style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons 
                    name="library"
                    size={60}
                    color={AppColors.primaryColor}/>
            </View>
            <View style={styles.profileContainer}>
                <AppListItem image={route.params.paramImage} title={route.params.paramName} subtitle={route.params.paramEmail} />
            </View>
            <View style={styles.linksContainer}>
                <FlatList
                    data = {data}
                    keyExtractor= {menuItem => menuItem.id.toString()}
                    renderItem={({item}) => 
                        <AppListItem
                            title={item.name}
                            IconComponent={item.icon}
                            onPress={() => navigation.navigate(item.navigation)}
                        />
                    }
                    ItemSeparatorComponent={
                        <View style={styles.separator}/>
                    }
                />
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.otherColor,
        marginTop: 0,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    profileContainer: {
        marginTop: 50,
        backgroundColor: AppColors.otherColorLite,
        height: 90,
        justifyContent: 'center'
    },
    linksContainer: {
        marginVertical: 75,
        backgroundColor: AppColors.otherColorLite,
        paddingLeft: 10,
        paddingRight: 10,
        height: 150
    },
    separator: {
        width: "100%",
        height: 2,
        backgroundColor: AppColors.secondaryColor,
    }
})

export default HomeScreen;