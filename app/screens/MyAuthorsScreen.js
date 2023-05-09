import React, {useState} from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppListItem from '../components/AppListItem';
import AppIcon from '../components/AppIcon';

const initialAuthors = [
    {
        id: 1,
        name: "Mr. NiceGuy",
        image: require("../assets/mrNiceGuy.png")
    },
    {
        id: 2,
        name: "Mr. NotNiceGuy",
        image: require("../assets/samson.png")
    },
]




function MyAuthorsScreen(props) {

    const[refreshing, setRefreshing] = useState(false);
    const[authors, setAuthors] = useState(initialAuthors);

    const onDelete = (author) => {
       const newAuthors = authors.filter(item => item.id !== author.id);
       setAuthors(newAuthors);
    }

    return (
        <AppScreen style={styles.container}>
            <FlatList
                data = {authors}
                keyExtractor= {author => author.id.toString()}
                refreshing={refreshing}
                onRefresh={() => setAuthors(initialAuthors)}
                renderItem={({item}) => 
                    <AppListItem
                        title={item.name}
                        image={item.image}
                        onPress={() => console.log({item})}
                        onSwipeLeft={() => (
                            <View style={styles.deleteView}>
                                <TouchableOpacity onPress={() => onDelete(item)}>
                                    <AppIcon
                                        name="trash-can"
                                        iconColor={AppColors.otherColor}
                                        backgroundColor={AppColors.primaryColor}
                                        />
                                </TouchableOpacity>
                            </View>)}
                    />
                 }
                ItemSeparatorComponent={ () =>
                    <View style={styles.seperator}/>
                }
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.otherColor,
        flex: 1,
    },
    seperator: {
        width: "100%",
        height: 2,
        backgroundColor: AppColors.secondaryColor,
    },
    deleteView: {
        backgroundColor: AppColors.secondaryColor,
        width: 75,
        justifyContent: "center",
        alignItems: "center",
    }
})
export default MyAuthorsScreen;