import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import Square from './SquareComponent';
import * as Animatable from 'react-native-animatable';

class Game extends Component {


    render() {
        return (
            <View>
                <Text>
                    Boop de Boop
                </Text>
                <Square />
            </View>
        );
    }

}

export default Game;