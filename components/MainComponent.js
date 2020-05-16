import React, { Component } from 'react';
import Home from './HomeComponent';
import Game from './GameComponent';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const GameStack = createStackNavigator();

const HomeStackScreen = () => (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
)

const GameStackScreen = () => (
    <GameStack.Navigator>
        <GameStack.Screen name='Game' component={Game} options={{headerShown: false}} />
    </GameStack.Navigator>
)

const Drawer = createDrawerNavigator();

function Main() {
  
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeStackScreen} />
                <Drawer.Screen name="Game" component={GameStackScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );

}



export default Main;