import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
           squareColorValue: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.animateViewColor();
    }
    

    animateViewColor() {
        Animated.loop([
            Animated.timing(this.state.squareColorValue, {
                toValue: 1,
                duration: 5000
            })
        ]).start();
    }

    render() {
        const bgColor = this.state.squareColorValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['blue', 'yellow', 'red']
        });
          
        return (
            <View style={styles.container}>
                <Text>{`Welcome to Morectangles!`}</Text>
                <Text>{`Would you like to play?\n`}</Text>
                <Animatable.View style={{padding: 50, backgroundColor: bgColor}} onPress={() => navigate('Game')} />
            </View>
        )
    }
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