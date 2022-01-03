import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

const Contacts = () => {

    return (

        <View>
            <Text>Hi from Contacts</Text>
        </View>
    );
};

const ContactDetail = () => {

    return (

        <View>
            <Text>Hi from ContactDetails</Text>
        </View>
    );
};

const CreateContact = () => {

    return (

        <View>
            <Text>Hi from CreateContact</Text>
        </View>
    );
};

const Settings = () => {

    return (

        <View>
            <Text>Hi from CreateContact</Text>
        </View>
    );
};

const HomeNavigator = () => {

    const HomeStack = createStackNavigator();

    return (

        <HomeStack.Navigator initialRouteName="Contacts">
            <HomeStack.Screen name="Contacts" component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name="Contact Detail" component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name="Create Contact" component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;