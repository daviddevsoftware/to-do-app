// Native libraries
import React from 'react';
import {
    StyleSheet,
} from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './src/screens/Home/index';
import AddTaskScreen from './src/screens/AddTask';

// Store
import { Provider } from 'react-redux';
import store from './src/store/index';

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
