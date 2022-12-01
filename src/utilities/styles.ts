import { StyleSheet } from "react-native";

// * Colors *
const white = '#FFF';

export const colors = {
    
    background: white,
};

// * Styles *
export const generalStyles = StyleSheet.create({
    screen: { 
        width: '100%', 
        height: '100%', 
        backgroundColor: colors.background,
    },
});
