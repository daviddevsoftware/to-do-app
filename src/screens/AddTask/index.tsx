// Native Libraries
import React, { useContext } from 'react';
import { Dimensions, SectionList, Text, TouchableNativeFeedback } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Global Styles
import { colors, generalStyles } from '../../utilities/styles';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { CommonActions } from '@react-navigation/native';


const AddTaskScreen = ({ navigation }: any) => { 

    const goBack = () => {
        navigation.dispatch(CommonActions.goBack());
    }

    return (
        <View style={[generalStyles.screen]}>
            <SafeAreaView style={[ styles.container ]}>
                <View style={[ styles.container ]}>
                    {/* Header */}
                    <View style={[ styles.header ]}>
                        
                        {/* Back */}
                        <View style={[ styles.containerIcon ]}>
                            <TouchableNativeFeedback onPress={goBack}>
                                <View style={[ styles.containerIcon ]}>
                                    <Icon name="chevron-left" size={20} color="gray" />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                            
                        {/* Title */}
                        <Text style={[ styles.title ]}>To-Do App</Text>

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
        alignItems: 'center',
        paddingLeft: 20
    },
    content: {
        flex: 6,
    },

    // Title
    title: {
        fontSize: 25,
        fontWeight: '300',
        marginLeft: 20
    },

    containerIcon: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default AddTaskScreen;