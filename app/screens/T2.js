import React from 'react';
import { View, Text } from 'react-native';

function T2({route}) {
    return (
        <View>
            <Text>Test2</Text>
            <Text>{route.params.message}</Text>
        </View>
    );
}

export default T2;