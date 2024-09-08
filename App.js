import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import AppNavigation from './navigation/AppNavigation'; // Adjust the path if necessary
import 'react-native-gesture-handler'; // Ensure this is the first import

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
      {/* Wrap AppNavigation with GestureHandlerRootView */}
      <AppNavigation />
    </GestureHandlerRootView>
  );
}
