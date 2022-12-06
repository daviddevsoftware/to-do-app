// Native Libraries
import React, { useContext, useState } from 'react';
import { Dimensions, SectionList, Text, TouchableNativeFeedback } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions } from '@react-navigation/native';

// Global Styles
import { colors, generalStyles } from '../../utilities/styles';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// Components
import Input from '../../components/Input';
import DateInput from '../../components/DateInput';
import Selector from '../../components/Selector';
import Button from '../../components/Button';

// Store
import { addTask, TaskData } from '../../store/tasks';
import { useDispatch } from 'react-redux';

const DefaultTaksData: TaskData = {
    id: -1,
    title: '',
    dead_line:  new Date(),
    start_time: '',
    end_time: '',
    remind: '',
    repeat: '',
    completed: false,
    is_new: true,
}

const OptionReminders = [
    { value: '10-minutes', label: '10 minutes early' },
    { value: '20-minutes', label: '20 minutes early' },
    { value: '30-minutes', label: '30 minutes early' },
    { value: '45-minutes', label: '45 minutes early' },
    { value: '60-minutes', label: '60 minutes early' },
    { value: '3-hours', label: '3 hours early' },
    { value: '6-hours', label: '6 hours early' },
    { value: '12-hours', label: '12 hours early' },
    { value: '24-hours', label: '24 hours early' },
];

const OptionRepeats = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: '3-months', label: 'Every 3 months' },
    { value: '6-months', label: 'Every 6 months' },
    { value: '9-months', label: 'Every 9 months' },
    { value: '12-months', label: 'Every 12 months' },
];

const AddTaskScreen = ({ navigation }: any) => { 

    // State
    const [newTask, setNewTask] = useState<TaskData>(DefaultTaksData)

    const dispatch = useDispatch();

    const handleAddNewTask = () => {
        dispatch(addTask(newTask))
        goBack();
    }

    const handleNewTaskChange = (value: any, prop: keyof TaskData) => {
        setNewTask({
            ...newTask,
            [prop]: value
        })
    }

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
                        <Text style={[ styles.title ]}>Add task</Text>

                    </View>

                    {/* Content */}
                    <View style={[ styles.content ]}>

                        {/* Title */}
                        <Input 
                            title={'Title'}
                            placeHolder={'Describe your title...'}
                            onChangeText={(text: string) => handleNewTaskChange(text, 'title')}
                        />

                        {/* Deadline */}
                        <DateInput 
                            title={'Deadline'}
                            placeHolder={'Select your date...'}
                            onChangeText={(text: string) => handleNewTaskChange(text, 'dead_line')}
                        />

                        {/* Section */}
                        <View style={{ flexDirection: 'row' }}>
                            {/* Start time */}
                            <DateInput 
                                title={'Start time'}
                                placeHolder={'00:00 Am'}
                                mode={'time'}
                                onChangeText={(text: string) => handleNewTaskChange(text, 'start_time')}
                            />

                            {/* End time */}
                            <DateInput 
                                title={'End time'}
                                placeHolder={'00:00 Pm'}
                                mode={'time'}
                                onChangeText={(text: string) => handleNewTaskChange(text, 'end_time')}
                            />
                        </View>

                        {/* Remind */}
                        <Selector 
                            title={'Remind'}
                            titleModal={'Select a reminder option'}
                            placeHolder={'Select reminder'}
                            onChange={(value: any) => handleNewTaskChange(value, 'end_time')}
                            options={OptionReminders}
                            keyShowed={'label'}
                            keyValue={'value'}
                        />

                        {/* Repeat */}
                        <Selector 
                            title={'Repeat'}
                            titleModal={'Select a repeat option'}
                            placeHolder={'Select repeat'}
                            onChange={(value: any) => handleNewTaskChange(value, 'repeat')}
                            options={OptionRepeats}
                            keyShowed={'label'}
                            keyValue={'value'}
                        />

                        <View style={{ marginTop: 40, paddingHorizontal: 20 }} >
                            <Button text='Create a task' onPress={handleAddNewTask}/>
                        </View>
                        

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
        paddingVertical: 20,
        paddingHorizontal: 10,
    },

    // Title
    title: {
        fontSize: 25,
        fontWeight: '400',
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