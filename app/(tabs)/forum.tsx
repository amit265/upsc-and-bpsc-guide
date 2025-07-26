import SafeScreen from '@/components/safescreen';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ForumScreen = () => {
  return (
    <SafeScreen>
      <Text style={styles.text}>Welcome to Forum!</Text>
    </SafeScreen>
  );
};

export default ForumScreen;

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
