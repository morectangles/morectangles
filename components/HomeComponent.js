import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Button, TouchableHighlight } from 'react-native';
import Square from './SquareComponent';
import * as Animatable from 'react-native-animatable';


function ButtonFunc() {
    return <Button title='Hello' onPress={() => navigation.navigate('Game')} />
}

function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>{`Welcome to Morectangles!`}</Text>
            <Text>{`Would you like to play?\n`}</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Game')} >
                <Square />
            </TouchableHighlight>
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