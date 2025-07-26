import SafeScreen from '@/components/safescreen';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TestsScreen = () => {
    return (
        <SafeScreen>
            <Text style={styles.text}>Welcome to Tests!</Text>
        </SafeScreen>);
};

export default TestsScreen;

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
