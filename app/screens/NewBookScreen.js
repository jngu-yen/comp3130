import React, { useState } from 'react';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppPicker from '../components/AppPicker';
import AppTextinput from '../components/AppTextinput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';
import * as ImagePicker from 'expo-image-picker'
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppIcon from '../components/AppIcon';


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


function NewBookScreen({navigation}) {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [subTitleError, setSubTitleError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState("");

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        } else {
          alert('You did not select any image.');
        }
      };

    const doErrorCheck = () => {
        console.log(title, subtitle, category.label)
        setTitleError(title.length > 0 ? "" : "Please Enter Book Title");
        setSubTitleError(subtitle.length > 0 ? "" : "Get Fucked");
        setCategoryError(category ? "":"Pick something beech")
        setImageError(image ? "" : "pick brooo");
        return (title.length > 0 && subtitle.length > 0 && category);
    }

    const addBook = () => {
        let globalData = DataManager.getInstance();
        let user = globalData.getUserID();

        const books = globalData.getBooks(user);
        const bookID = books.length+1;
        const newBook = {
            title: title,
            subtitle: subtitle,
            category: category.label,
            bookid: bookID,
            userid: user,
            image: image
        }

        console.log(newBook);
        globalData.addBook(newBook);
    }

    return (
        <AppScreen style={{backgroundColor:AppColors.otherColor}}>
            <AppTextinput
                icon="book-open-page-variant"
                placeholder="Book Title"
                value={title}
                onChangeText={(userInput) => setTitle(userInput)}
                />

            {titleError.length > 0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{titleError}</AppText> : <></>}

            <AppTextinput
                icon="calendar-month"
                placeholder="Book Read on"
                onChangeText={(userInput) => setSubtitle(userInput)}
                />
            
            {subTitleError.length > 0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{subTitleError}</AppText> : <></>}

            <AppPicker
                selectedItem = {category}
                onSelectItem = {item => setCategory(item)}
                data={categories} 
                icon="apps"
                placeholder="Categories"
                numColumns={3}/>

            {categoryError.length > 0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{categoryError}</AppText> : <></>}
            
            <TouchableOpacity 
                style={styles.imageButton}
                onPress={pickImageAsync}
                >
                <AppIcon 
                    name="camera" 
                    size={80}
                    iconColor={AppColors.otherColor}
                    backgroundColor={AppColors.primaryColor}
                    />
                {image && <Image 
                    source={{uri:image}}
                    style = {styles.image}
                    />}
            </TouchableOpacity>

            {imageError.length > 0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{imageError}</AppText> : <></>}


            <AppButton
                title = "Add Book"
                onPress = {() => {
                        if(doErrorCheck()){
                            addBook();
                            navigation.navigate("MyBooks");
                        }
                    }
                }
                />
            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    imageButton:{
        justifyContent: "center",
        alignItems:"center",
        flexDirection: "row"
    },
    image: {
        height: 80,
        width: 80,
        marginLeft: 20,
    },
})

export default NewBookScreen;