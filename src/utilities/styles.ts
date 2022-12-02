import { StyleSheet } from "react-native";

// * Colors *
const white = '#FFF';
const green = '#00c466';

export const colors = {
    
    background: white,
    green: green,
};

// * Styles *
export const generalStyles = StyleSheet.create({
    screen: { 
        width: '100%', 
        height: '100%', 
        backgroundColor: colors.background,
    },
});
