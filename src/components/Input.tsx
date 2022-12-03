/**
 * @author: Carlos Enrique Duarte Ortiz <carlosduarte.1@hotmail.com>
 */

// React Native libraries
import React, { useEffect, useState, useRef, useMemo } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Animated,
    ViewStyle,
    KeyboardTypeOptions,
    Platform,
    Easing
} from "react-native";

// Custom Styles
import { colors } from "../utilities/styles";

// External libraries (React Native)
import DatePicker from 'react-native-date-picker'

// Interfaces
type ScreenProps = {
    placeHolder?: string,
    title: string,
    value?: string,
    onChangeText?: ((text: string) => void) | undefined,
    style?: ViewStyle,
    keyboardType?: KeyboardTypeOptions,
    inputRef?: Function,
    editable?: boolean,
};

/**
 * Input
 * @param title: Title of the input
 * @param placeHolder: Placeholder of the input
 * @param onChangeText: Function to handle the change of the input
 * @param value: Value of the input
 * @param editable: Boolean to handle if the input is editable or not
 * @param keyboardType: Type of the keyboard
 * @param style: Custom style of the input
 */
const Input = ({ title, placeHolder, onChangeText, value, editable = true, keyboardType, style: overratedStyle }: ScreenProps) => {
    var component: any = null;

    // useEffect(() => {
    // }, [])

    return (
        <View style={[styles.container]}>
            {/* Title */}
            <View style={[styles.containerTitle]}>
                <Text style={styles.title}>{title}</Text>
            </View>

            {/* Input */}
            <View style={[styles.containerInput]}>
                <TextInput
                    ref={ref => {
                        component = ref;
                    }}
                    style={[styles.input, overratedStyle]}
                    value={value}
                    placeholder={placeHolder}
                    placeholderTextColor={colors.grayLabel}
                    onChangeText={onChangeText}
                    editable={editable}
                    keyboardType={keyboardType}
                    blurOnSubmit
                />
            </View>
        </View>

    );
};

// Export the component
export default Input;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        maxHeight: 105,
    },

    containerTitle: {
        marginTop: 10,
        height: 20,
        justifyContent: 'flex-end'
    },

    containerInput: {
        marginBottom: 15,
        marginTop: 10,
        borderRadius: 6,
        width: "100%",
        alignSelf: "center",
        flexDirection: 'row',
        height: 55,
        backgroundColor: colors.gray
    },

    icon: {
        width: 40,
        justifyContent: "center",
        alignItems: "center",
    },

    input: {
        fontSize: 15,
        height: '100%',
        fontWeight: '600',
        paddingLeft: 20,
        color: "#000",
        width: '100%',
    },

    dateInput: {
        height: 55,
        width: '100%',
        borderWidth: 1,
        marginBottom: 0,
        backgroundColor: 'transparent',
    },

    title: {
        fontSize: 15,
        color: 'black',
        fontWeight: '600',
    },

    label: {
        fontSize: 15,
        color: 'black',
        fontWeight: '600',
    },

    animatedStyle: {
        top: 5,
        left: 5,
        position: 'absolute',
        borderRadius: 90,
        zIndex: 10000,
        justifyContent: "center",
    },

});
