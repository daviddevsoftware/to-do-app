// Native Libraries
import React, { useEffect, useState } from 'react';
import { Animated, Platform, Text } from 'react-native';
import { StyleSheet, View } from 'react-native';

// Libraries
import CheckBox from '@react-native-community/checkbox';

// Store
import { completeTask, revertTask, TaskData } from '../../../store/tasks';
import { useDispatch } from 'react-redux';

// Interfaces
interface ComponentProps {
    item: TaskData,
    index: number,
    isCompleted?: boolean,
}

const TaskItem = ({ item, index }: ComponentProps) => { 

    // Data
    const data: any[] = [];

    // State
    const [toggleCheckBox, setToggleCheckBox] = useState(item.completed)
    const dispatch = useDispatch();

    // Animated
    const opacity = new Animated.Value(0);
    useEffect(() => {
        // Opacity
        setTimeout(() => {
            Animated.timing(opacity, {
                toValue: 1,
                duration : 600,
                delay: 100,
                useNativeDriver: false,
            }).start();
        }, 50)
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

    return (
        <Animated.View key={`${item.id}-${index}`} style={[styles.container, {opacity: opacity}]}>
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