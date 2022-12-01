// Native libraries
import React, {} from 'react';
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

// Stacks
const PrincipalStack = createStackNavigator()

const App = () => {
    // const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <NavigationContainer>
                <PrincipalStack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
                    {/* Home */}
                    <PrincipalStack.Screen name="Home" component={HomeScreen} />
                </PrincipalStack.Navigator>
            </NavigationContainer>
        </>
        
    );
};

const styles = StyleSheet.create({
});

export default App;
