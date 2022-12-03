/*
    This component is a selector, it is used to select an option from a list of options.
    The options are passed as an array of objects.
    The keys that are passed are the keys that are used to display the option and the value of the option.
    This component is used in the form of a text input, it is necessary to pass the onChange function to be able to change the value of the input.
*/

// Native libraries
import React, { useEffect, useState, useRef, useMemo } from "react";
import {
    View, StyleSheet, Text, ViewStyle, TouchableNativeFeedback
} from "react-native";

// Styles
import { colors } from "../utilities/styles";

// External libraries
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";

// Props
type ScreenProps = {
    placeHolder?: string,
    title: string,
    titleModal: string,
    value?: string,
    onChange?: ((text: string) => void) | undefined, 
    options: any[], 
    keyShowed: string,
    keyValue: string, 
    style?: ViewStyle, 
    editable?: boolean, 
};

/**
 * Selector
 * @param placeHolder: Placeholder of the input
 * @param title: Title of the input
 * @param titleModal: Title of the modal 
 * @param value: Value of the input
 * @param onChange: Function that is executed when the value of the input is changed
 * @param options: Array of options that are displayed in the selector
 * @param keyShowed: Key of the option that is displayed in the selector
 * @param keyValue: Key of the option that is the value of the input
 * @param style: Style of the input
 * @param editable: If the input is editable or not
 */
const Selector = ({ title, titleModal, placeHolder, onChange, options, value: defaultValue, editable = true, keyShowed, keyValue, style: overratedStyle }: ScreenProps) => {
    const actionSheetRef = useRef<ActionSheetRef>(null);

    const [value, setValue] = useState<any>(defaultValue)
    const [valueString, setValueString] = useState('');

    useEffect(() => {
    }, [])

    const handleChange = (index: number) => {

        if(options.length > index) {
            setValue(options[index][keyValue])
            setValueString(options[index][keyShowed])
            if(onChange) onChange(options[index][keyValue])
        }

        actionSheetRef.current?.hide();
    }

    const handleOpen = (value: boolean) => {
        if(value) {
            actionSheetRef.current?.show();
        } else {
            actionSheetRef.current?.hide();
        }
    }

    return (
        <View style={[styles.container]}>
            {/* Title */}
            <View style={[styles.containerTitle]}>
                <Text style={styles.title}>{title}</Text>
            </View>

            {/* Input */}
            <View style={[styles.containerInput, overratedStyle]}>
                <TouchableNativeFeedback onPress={() => handleOpen(true)}>
                    <View style={[styles.containerTouchable]}>
                        {/* Placeholder */}
                        <Text style={[styles.label, valueString ? { color: 'black' } : {}]}>{ valueString || placeHolder }</Text>
                        
                        {/* Action Selector */}
                        <ActionSheet ref={actionSheetRef}>
                            <View style={[styles.containerAction]}>
                                {/* Title Modal */}
                                <Text style={[styles.titleOptionItem]}>{titleModal}</Text>
                                
                                {/* Options */}
                                {
                                    options.map((item: any, index: number) => {
                                        return (
                                            <View key={`${index}-${item[keyValue]}`} style={[{ width: '100%' }]}>
                                                <TouchableNativeFeedback onPress={() => handleChange(index)}>
                                                    <View style={[styles.containerOptionItem]}>
                                                        <Text style={[styles.labelOptionItem]}>{item[keyShowed]}</Text>
                                                    </View>
                                                </TouchableNativeFeedback>
                                            </View>
                                        );
                                    })
                                }
                            </View>
                        </ActionSheet>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
        
    );
};
export default Selector;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        maxHeight: 105,
    },

    containerAction: {
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 50,
    },

    containerOptionItem: {
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 1,
        elevation: 5,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%', 
        height: 30,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginBottom: 10,
    },

    containerTitle: {
        marginTop: 10,
        height: 20,
        justifyContent: 'flex-end'
    },

    titleOptionItem: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '300',
        justifyContent: 'flex-end'
    },

    containerInput: {
        marginBottom: 15,
        marginTop: 10,
        borderRadius: 6,
        width: "100%",
        alignItems: "center",
        flexDirection: 'row',
        height: 55,
        backgroundColor: colors.gray
    },

    containerTouchable: { 
        width: '100%', 
        height: '100%', 
        borderRadius: 6, 
        justifyContent: 'center' 
    },

    icon: {
        width: 40,
        justifyContent: "center",
        alignItems: "center",
    },

    input: {
        fontSize: 15,
        height: '100%',
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
        fontWeight: '600',
        paddingLeft: 20,
        color: colors.grayLabel
    },

    labelOptionItem: {
        fontSize: 17,
        color: 'black',
        fontWeight: '300',
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
