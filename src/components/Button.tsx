// Native Libraries
import React, { useEffect } from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

// Store
import { colors } from '../utilities/styles';

// Interfaces
interface ComponentProps {
    text: string;
    onPress?: ((event: GestureResponderEvent) => void)
}

const Button = ({ text, onPress }: ComponentProps) => {
    return (
        <View style={[styles.container]}>
            <TouchableNativeFeedback style={[{ width: '100%', height: '100%' }]} onPress={onPress}>
                <View style={[styles.container]}>
                    <Text style={[styles.title]}>{text}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10, 
        backgroundColor: colors.green, 
        maxHeight: 50,
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    // Title
    title: {
        fontSize: 17,
        fontWeight: '400',
        color: 'white'
    },
});

export default Button;