import React, { Component } from 'react';
import Home from './HomeComponent';
import Game from './GameComponent';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

function RootStack() {
    return(
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{gestureEnabled: true}}>
            <Stack.Screen  
                name='Home'
                component={Home} />
            <Stack.Screen  
                name='Game'
                component={Game}
            />
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName='Home' >
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
} 

function Main() {
  
    return (
        <MyDrawer />
    );

}



export default Main;