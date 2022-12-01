// Native Libraries
import React, { useContext } from 'react';
import { Dimensions, Text, TouchableNativeFeedback } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Global Styles
import { colors, generalStyles } from '../../utilities/styles';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = (props: any) => {

    return (
        <View style={[generalStyles.screen]}>
            <SafeAreaView style={[ styles.container ]}>
                <View style={[ styles.container ]}>
                    {/* Header */}
                    <View style={[ styles.header ]}>
                        {/* Title */}
                        <View style={[ styles.titleContainer ]}>
                            <Text style={[ styles.title ]}>To-Do App</Text>
                        </View>

                        {/* Actions */}
                        <View style={[ styles.actionsContainer ]}>
                            <View style={[ styles.containerIcon ]}>
                                <TouchableNativeFeedback>
                                    <View style={[ styles.containerIcon ]}>
                                        <Icon name="search" size={20} color="gray" />
                                    </View>
                                </TouchableNativeFeedback>
                            </View>

                            <View style={[ styles.containerIcon ]}>
                                <TouchableNativeFeedback>
                                    <View style={[ styles.containerIcon ]}>
                                        <Icon name="bell-o" size={20} color="gray" />
                                    </View>
                                </TouchableNativeFeedback>
                            </View>

                            <View style={[ styles.containerIcon ]}>
                                <TouchableNativeFeedback>
                                    <View style={[ styles.containerIcon ]}>
                                        <Icon name="bars" size={20} color="gray" />
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>

                    {/* Content */}
                    <View style={[ styles.content ]}>

                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 1,
        elevation: 5,
    },
    content: {
        flex: 6,
    },
    actionsContainer: { 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around',
        paddingRight: 10,
    },

    // Title
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 30,
    },
    title: {
        fontSize: 25,
        fontWeight: '300'
    },

    containerIcon: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;