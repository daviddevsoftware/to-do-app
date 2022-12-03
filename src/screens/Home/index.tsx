// Native Libraries
import React, { useEffect } from 'react';
import { SectionList, Text, TouchableNativeFeedback } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Global Styles
import { generalStyles } from '../../utilities/styles';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// Navigation
import { CommonActions } from '@react-navigation/native';

// Store
import { useDispatch } from 'react-redux';
import { addTask, TaskData } from '../../store/tasks';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';

// Components
import TaskItem from './components/TaskItem';
import Button from '../../components/Button';

// Interfaces
interface SectionTasks {
    title: string;
    data: TaskData[];
}

const HomeScreen = ({ navigation }: any) => {

    // Task Data
    const { tasks, completedTasks } = useSelector((state: RootState) => state.TaskData);
    const data: SectionTasks[] = [
        {
            title: 'Completed tasks',
            data: completedTasks,
        },
        {
            title: 'Pending tasks',
            data: tasks,
        },
    ];

    const dispatch = useDispatch();
        
    useEffect(() => {

        // dispatch(clearTask({}))

        // addLocalTast('Design team meeting');
        // addLocalTast('Making Wireframes');
        // addLocalTast('Create UI Elements');
        // addLocalTast('Meeting with Murman Khvadadze');

    }, [])

    const addLocalTast = (title: string) => {
        dispatch(addTask({
            title: title,
            dead_line: new Date(),
            start_time: '10:00',
            end_time: '11:00',
            remind: '10 minutes',
            repeat: 'weekly',
            completed: false,
        }));
    }

   const goToNewTask = () => {
        const navigateAction = CommonActions.navigate({
            name: 'AddTask',
            params: {}
        });
        navigation.dispatch(navigateAction);
    }

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
                        
                        {/* Sections of tasks */}
                        <SectionList
                            sections={data}
                            stickySectionHeadersEnabled={false}
                            keyExtractor={(item, index) => `${item.id}-${index}`}
                            renderItem={({ item, index }) => <TaskItem item={item} index={index}/>}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={[styles.title, { marginVertical: 20 }]}>{title}</Text>
                            )}
                        />

                        {/* Button */}
                        <Button text='Add a task' onPress={goToNewTask}/>

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
        paddingHorizontal: 30,
        paddingVertical: 30
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
    },
    scrollView: {
        paddingHorizontal: 30,
    },
});

export default HomeScreen;