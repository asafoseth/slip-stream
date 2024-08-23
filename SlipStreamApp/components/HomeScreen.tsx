// components/HomeScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, FAB } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootDrawerParamList } from '../types/types'; // Import the types

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootDrawerParamList>>();

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => navigation.navigate('Form')}>
        Go to Form
      </Button>
      {/* Additional Buttons and FAB */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
