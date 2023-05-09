import React from 'react';
import { View, Text, Button } from 'react-native';

function T1({navigation}) {
    return (
        <View>
            <Text>Test1</Text>

            <Button title="Click here" onPress={() => navigation.navigate("Test2", {message: "Hello World"})}/>
        </View>
    );
}

export default T1;