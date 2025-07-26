import SafeScreen from '@/components/safescreen';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeScreen>
      <Text style={styles.text}>Welcome sdfdsf Home!</Text>
    </SafeScreen>);
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  text: {
    fontSize: 20,
  },
});
