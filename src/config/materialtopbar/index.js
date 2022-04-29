import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React, { useState } from 'react';
import { ImageBackground, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Background1, Arrow } from '../../components/assets';
import { BlankScreen, BoardingPage, EventPage } from '../../pages';

const MaterialTopBar = ({ navigation }) => {

    const Tab = createMaterialTopTabNavigator()

    return (
        <>
            <ImageBackground source={Background1} resizeMode="cover" style={{ width: "100%", height: 80, justifyContent: 'center' }} imageStyle={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                <View style={{ paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('HomeScreen')}>
                        <Image source={Arrow} style={{ width: 18, height: 18, marginRight: 10 }} />
                    </TouchableWithoutFeedback>
                    <Text style={{ color: '#fff', fontSize: 20 }}>Broadcast</Text>
                </View>
            </ImageBackground>
            <Tab.Navigator screenOptions={{
                tabBarStyle: { backgroundColor: '#fff', elevation: 0, paddingHorizontal: 10, justifyContent: 'center' },
                tabBarIndicatorStyle: { backgroundColor: 'rgba(190, 214, 0, 1)', height: 3, borderRadius: 8 },
            }}>
                <Tab.Screen name="Boarding" component={BoardingPage} />
                <Tab.Screen name="Event" component={EventPage} />
                <Tab.Screen name="Chat" component={BlankScreen} />
            </Tab.Navigator>
        </>
    )
}

export default MaterialTopBar;