// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import FoodDetails from '../FoodDetails';



const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
  
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="FoodDetails"  options={{headerShown:false}} component={FoodDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;