import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const TabsLayout = () => {
    return (
        <View style={styles.container}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#007bff",
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                    },
                    tabBarIconStyle: {
                        marginTop: 5,
                    },
                    tabBarItemStyle: {
                        paddingVertical: 5,
                        borderRadius: 10,
                    },
                    tabBarStyle: {
                        paddingTop: 8,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        height: 60,
                        elevation: 5,
                        marginHorizontal: 10,
                        marginBottom: 10,
                    },

                    tabBarInactiveTintColor: "#6c757d",

                }}
            >
                <Tabs.Screen name="home" options={{ title: 'Home' }} />
                <Tabs.Screen name="planner" options={{ title: 'Planner' }} />
                <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
                <Tabs.Screen name="forum" options={{ title: 'Forum' }} />
                <Tabs.Screen name="tests" options={{ title: 'Tests' }} />
            </Tabs>


        </View>
    );
};

export default TabsLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingTop: 20,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 20,
    },
});
