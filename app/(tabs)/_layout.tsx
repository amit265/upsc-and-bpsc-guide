import SafeScreen from "@/components/safescreen";
import {
    AntDesign,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';
const TabsLayout = () => {
    return (
        <SafeScreen>
            <Tabs
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: "#007bff",
                    tabBarShowLabel: false,

                    tabBarStyle: {
                        paddingTop: 8,
                        color: "black",
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
                    tabBarIcon: ({ color, size }) => {
                        switch (route.name) {
                            case "home":
                                return <AntDesign name="home" size={28} color={color} />;
                            case "tests":
                                return <AntDesign name="questioncircleo" size={28} color={color} />;
                            case "planner":
                                return (
                                    <MaterialCommunityIcons
                                        name="clock-outline"
                                        size={28}
                                        color={color}
                                    />
                                );
                            case "forum":
                                return (
                                    <MaterialCommunityIcons
                                        name="forum-outline"
                                        size={28}
                                        color={color}
                                    />);
                            case "profile":
                                return (
                                    <Ionicons
                                        name="person-circle-outline"
                                        size={28}
                                        color={color}
                                    />
                                );
                            default:
                                return <AntDesign name="question" size={28} color={color} />;
                        }
                    },
                })}
            >
                <Tabs.Screen name="home" options={{ title: 'Home' }} />
                <Tabs.Screen name="tests" options={{ title: 'Tests' }} />
                <Tabs.Screen name="planner" options={{ title: 'Planner' }} />
                <Tabs.Screen name="forum" options={{ title: 'Forum' }} />
                <Tabs.Screen name="profile" options={{ title: 'Profile' }} />

            </Tabs>


        </SafeScreen>
    );
};

export default TabsLayout;

