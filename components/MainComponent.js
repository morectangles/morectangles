import React, { Component } from 'react';
import Home from './HomeComponent';
import Game from './GameComponent';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
          
        return (
            <Home />
        )
    }
}


export default Main;