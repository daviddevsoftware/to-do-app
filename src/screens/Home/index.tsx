// Native Libraries
import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, View } from 'react-native';

// Global Styles
import { colors } from '../../utilities/styles';

const HomeScreen = (props: any) => {

    return (
        <View style={[ styles.container ]}>
            {/* Header */}
            <View style={[ styles.header ]}>

            </View>

            {/* Content */}
            <View style={[ styles.content ]}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 5,
        borderColor: 'green'
    },
    header: {
        flex: 1,
        borderWidth: 5,
        borderColor: 'blue'
    },
    content: {
        flex: 6,
        borderWidth: 5,
        borderColor: 'red'
    }
});

export default HomeScreen;