import React, { Component } from 'react';
import { Animated } from 'react-native';

class Square extends Component {

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
        Animated.loop(
            Animated.timing(this.state.squareColorValue, {
                toValue: 1,
                duration: 5000
            })
        ).start();
    }

    render() {
        const bgColor = this.state.squareColorValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['blue', 'yellow', 'red']
        });
          
        return <Animated.View style={{padding: 50, backgroundColor: bgColor}} onPress={() => navigation.navigate('Game')} />

    }
}


export default Square;