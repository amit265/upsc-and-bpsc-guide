import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import SafeScreen from '@/components/safescreen';

const SubTopics = () => {
    const { title,  summary } = useLocalSearchParams();

    return (
        <SafeScreen>
            <Text style={styles.title}>{title || 'No Title'}</Text>

            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.card}>
                    {summary
                        ? summary.split('\n\n').map((para, index) => (
                            <Text key={index} style={styles.summary}>
                                {para.trim()}
                            </Text>
                        ))
                        : <Text style={styles.summary}>No summary available.</Text>}
                </View>
            </ScrollView>
        </SafeScreen>
    );
};

export default SubTopics;


const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 20,
        fontFamily: "quicksand-bold",
        color: '#1a1a1a',
        textAlign: "auto",
        paddingVertical: 10,
        paddingHorizontal: 20


    },
 
    summary: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
        textAlign: 'justify',
        marginBottom: 12,
        fontFamily: "quicksand-semibold",
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
});
