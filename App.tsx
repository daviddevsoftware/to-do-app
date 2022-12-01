// Native libraries
import React, { useEffect } from 'react';
import {
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
} from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './src/screens/Home/index';
import AddTaskScreen from './src/screens/AddTask';

// Store
import { Provider, useDispatch } from 'react-redux';
import store from './src/store/index';
import { addTask } from './src/store/tasks';

// Stacks
const PrincipalStack = createStackNavigator()

const App = () => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <PrincipalStack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
                    {/* Home */}
                    <PrincipalStack.Screen name="Home" component={HomeScreen} />

                    {/* Add Task */}
                    <PrincipalStack.Screen name="AddTask" component={AddTaskScreen} />
                </PrincipalStack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

const styles = StyleSheet.create({
});

export default App;
