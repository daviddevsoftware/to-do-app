// Native Libraries
import React, { useEffect } from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableNativeFeedback, View, ViewStyle } from 'react-native';

// Store
import { useDispatch } from 'react-redux';
import { colors } from '../utilities/styles';

// Interfaces
interface ComponentProps {
    text: string;
    style?: ViewStyle,
    onPress?: ((event: GestureResponderEvent) => void)
}

/**
 * Button
 * @param text: Text to show in the button
 * @param style: Style of principal container
 * @param onPress: Function to execute when the button is pressed
 */
const Button = ({ text, onPress, style }: ComponentProps) => {
    return (
        <View style={[styles.container, style]}>
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