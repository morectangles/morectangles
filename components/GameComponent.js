import React, { useRef } from 'react';
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback, TouchableOpacity, PanResponder } from 'react-native';
import Square from './SquareComponent';
import * as Animatable from 'react-native-animatable';

function Game() {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
        ]),
    })
    ).current;

    pan.setValue({ x:0, y:0})
/*
    componentWillMount() {
        this.coordinates = { x:0, y:0 };
        this.state.pan.addListener((value) => this.coordinates = value);
    
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y }, 
                ]); 
            this.state.pan.setValue({ x:0, y:0})
            
            onPanResponderRelease: (e, gesture) => {
                Animated.spring(this.state.pan, {
                  toValue: { x: 0, y: 0 },
                  friction: 5
                }).start();
            } 
        // adjusting delta value
            
        });

    }
*/


        return (
            <View style={styles.container}>
                <Text>
                    Boop de Boop
                </Text>
                <Animated.View style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }]
                    }}
                    {...panResponder.panHandlers}
                    >
                        <Square />
                </Animated.View>
            </View>
        );
    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Game;