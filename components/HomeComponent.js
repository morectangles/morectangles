import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import Square from './SquareComponent';
import * as Animatable from 'react-native-animatable';

function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Text onPress={() => navigation.navigate('Game')} >{`Welcome to Morectangles!`}</Text>
            <Text onPress={() => navigation.navigate('Game')} >{`Would you like to play?\n`}</Text>
            <Square onPress={() => navigation.navigate('Game')} />
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SquareView: {
        width: 120,
        height: 120,
    }
})

export default Home;