// Native Libraries
import React, { useEffect, useState } from 'react';
import { Animated, Platform, Text } from 'react-native';
import { StyleSheet } from 'react-native';

// Libraries
import CheckBox from '@react-native-community/checkbox';

// Store
import { completeTask, revertTask, TaskData } from '../../../store/tasks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';

// Interfaces
interface ComponentProps {
    item: TaskData,
    index: number,
    isCompleted?: boolean,
}

const TaskItem = ({ item, index }: ComponentProps) => { 

    // State
    const [toggleCheckBox, setToggleCheckBox] = useState(item.completed)
    const { tasks } = useSelector((state: RootState) => state.TaskData);
    const dispatch = useDispatch();

    // Animated
    const opacity = new Animated.Value(item.is_new ? 1: 0);
    useEffect(() => {
        // Opacity
        if(!item.is_new) Animated.timing(opacity, {
            toValue: 1,
            duration : 600,
            delay: 50,
            useNativeDriver: true,
        }).start();
    }, [])

    const handleSetToggle = () => {
        // Complete Task
        if(toggleCheckBox) dispatch(completeTask({ index }))

        // Revert Task
        if(!toggleCheckBox) dispatch(revertTask({ index }))
    }

    const handleSetAndroid = (value: boolean) => {
        // Complete Task
        if(value) dispatch(completeTask({ index }))

        // Revert Task
        if(!value) dispatch(revertTask({ index }))

        // Set
        setToggleCheckBox(value)
    }

    const animStyle = { opacity: Platform.OS === 'ios' ? opacity : 1 };

    return (
        <Animated.View key={`${item.id}-${index}`} style={[styles.container, animStyle]}>
            <CheckBox
                value={toggleCheckBox}
                onValueChange={(newValue) => {
                    if(Platform.OS === 'android') handleSetAndroid(newValue)
                    if(Platform.OS === 'ios') setToggleCheckBox(newValue)
                }}
                onAnimationDidStop={() => handleSetToggle()}
                style={[styles.checkbox]}
            />
            <Text style={[styles.label]}>{item.title}</Text>
        </Animated.View>
    );
};

// Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
    },
    label: {
        marginLeft: 20,
        fontSize: 17,
        fontWeight: '300'
    },
    checkbox: {
        marginLeft: 5
    }
});

export default TaskItem;