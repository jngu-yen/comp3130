import React, { useState } from 'react';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppPicker from '../components/AppPicker';
import AppTextinput from '../components/AppTextinput';
import AppButton from '../components/AppButton';

const categories = [
    {
        label: "Adventure",
        value: 1,
        icon: "airplane-takeoff",
        backgroundColor: "red"
    },
    {
        label: "Thriller",
        value: 2,
        icon: "ghost",
        backgroundColor: "blue"
    },
    {
        label: "Fiction",
        value: 3,
        icon: "flash",
        backgroundColor: "green"
    }
];


function NewBookScreen(props) {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");

    
    return (
        <AppScreen style={{backgroundColor:AppColors.otherColor}}>
            <AppTextinput
                icon="book-open-page-variant"
                placeholder="Book Title"
                value={title}
                onChangeText={(userInput) => setTitle(userInput)}
                />

            <AppTextinput
                icon="calendar-month"
                placeholder="Book Read on"
                onChangeText={(userInput) => setSubtitle(userInput)}
                />
            
            <AppPicker
                selectedItem = {category}
                onSelectItem = {item => setCategory(item)}
                data={categories} 
                icon="apps"
                placeholder="Categories"
                numColumns={3}/>

            <AppButton
                title = "Add Book"
                onPress = {() => console.log(title, subtitle, category.label)}
                />
        </AppScreen>
    );
}

export default NewBookScreen;