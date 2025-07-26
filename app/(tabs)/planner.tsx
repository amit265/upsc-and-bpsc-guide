import SafeScreen from '@/components/safescreen';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlannerScreen = () => {
  return (
    <SafeScreen>
      <Text style={styles.text}>Welcome to PLanner!</Text>
      </SafeScreen>  );
};

export default PlannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
