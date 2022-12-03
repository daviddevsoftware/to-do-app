// Native libraries
import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    ViewStyle,
    KeyboardTypeOptions} from "react-native";

// Styles
import { colors } from "../utilities/styles";

// External libraries (React Native)
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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

const Input = ({ title, placeHolder, onChangeText, value, editable, keyboardType, style: overratedStyle }: ScreenProps) => {
    var component: TextInput | null = null;

    useEffect(() => {
    }, [])

    return (
        <KeyboardAwareScrollView
            extraScrollHeight={20}
            style={[ styles.container] }
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}>
            <View style={[styles.container, { paddingHorizontal: 20 }]}>
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
        </KeyboardAwareScrollView>
        

    );
};
export default Input;

const styles = StyleSheet.create({

    container: {
        flex: 1,
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
        paddingLeft: 20,
        color: "#000",
        width: '100%',
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