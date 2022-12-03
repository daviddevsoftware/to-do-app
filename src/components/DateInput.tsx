// Native libraries
import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    ViewStyle,
    TouchableNativeFeedback
} from "react-native";

// Styles
import { colors } from "../utilities/styles";

// External libraries
import DatePicker from 'react-native-date-picker'

// Props
type ScreenProps = {
    placeHolder?: string,
    title: string,
    value?: string,
    onChangeText?: ((text: string) => void) | undefined,
    style?: ViewStyle,
    inputRef?: Function,
    mode?: "date" | "time" | "datetime" | undefined,
};

/**
 * DateInput
 * @param placeHolder: Placeholder of the input
 * @param title: Title of the input
 * @param value: Value of the input
 * @param onChangeText: Function to handle the change of the input
 * @param style: Style of the input
 * @param inputRef: Reference of the input
 * @param mode: Mode of the input
 */
const DateInput = ({ title, placeHolder, onChangeText, value, style: overratedStyle, mode = 'date' }: ScreenProps) => {
    var component: any = null;

    const [date, setDate] = useState<Date>(value ? new Date(value) : new Date())
    const [dateString, setDateString] = useState('');
    const [open, setOpen] = useState(false)

    useEffect(() => {
    }, [])

    const handleChange = (date: Date) => {
        setOpen(false)
        setDate(date)
        if(mode == 'date') setDateString(date.toISOString().slice(0, 10));
        if(mode == 'time') {
            let hours = date.getHours();
            let dateString = date.toTimeString().slice(0, 5);
            dateString += ' ' + (hours > 12 ? 'Pm' : 'Am');
            setDateString(dateString);
        }
        if(onChangeText) onChangeText(date.toDateString())
    }

    return (
        <View style={[styles.container]}>
            {/* Title */}
            <View style={[styles.containerTitle]}>
                <Text style={styles.title}>{title}</Text>
            </View>

            {/* Input */}
            <View style={[styles.containerInput, overratedStyle]}>
                <TouchableNativeFeedback onPress={() => setOpen(true)}>
                    <View style={[styles.containerTouchable]}>
                        <Text style={[styles.label, dateString ? { color: 'black' } : {}]}>{ dateString || placeHolder }</Text>
                        <DatePicker
                            modal
                            style={[styles.dateInput]}
                            open={open}
                            date={date}
                            mode={mode}
                            title={placeHolder}
                            onConfirm={handleChange}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                    </View>
                </TouchableNativeFeedback>
                
            </View>
        </View>
        
    );
};
export default DateInput;

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

    animatedStyle: {
        top: 5,
        left: 5,
        position: 'absolute',
        borderRadius: 90,
        zIndex: 10000,
        justifyContent: "center",
    },

});