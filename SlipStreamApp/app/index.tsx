import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from '../components/HomeScreen';
import FormScreen from '../components/FormScreen';
import { RootDrawerParamList } from '../types/types'; // Import the types
import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';

AppRegistry.registerComponent(appName, () => App);

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <PaperProvider>

        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Form" component={FormScreen} />
        </Drawer.Navigator>

    </PaperProvider>
  );
}
