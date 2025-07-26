import SafeScreen from '@/components/safescreen';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ProfileScreen = () => {
    return (
        <SafeScreen>
            <Text style={styles.text}>Welcome to Profile!</Text>
        </SafeScreen>);
};

export default ProfileScreen;

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
