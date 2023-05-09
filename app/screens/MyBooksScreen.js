import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppCard from '../components/AppCard';
import DataManager from '../config/DataManager';
import AppText from '../components/AppText';

const getBooks = () => {
    let globalData = DataManager.getInstance();
    let user = globalData.getUserID();
    return globalData.getBooks(user);
}

function MyBooksScreen(props) {
    const bookList = getBooks();

    return (
        <AppScreen style={styles.container}>
            <FlatList
                data={bookList}
                keyExtractor={book => book.bookid.toString()}
                renderItem= {({item}) => 
                    <AppCard
                        title={item.title}
                        subtitle={item.subtitle}
                        category={item.category}
                        image={item.image}
                        />
                    }
                 ItemSeparatorComponent={<View style={styles.separator}/>}
                />        
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.otherColor,
        flex: 1
    },
    separator: {
        width: "100%",
        height: 2,
        backgroundColor: AppColors.secondaryColor,
        marginBottom: 25
    }
})
export default MyBooksScreen;