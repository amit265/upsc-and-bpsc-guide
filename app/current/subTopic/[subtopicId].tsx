import { useLocalSearchParams } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import Markdown from "react-native-markdown-display";

const SubTopics = () => {
    const { title, summary: encodedSummary } = useLocalSearchParams();
    const summary = typeof encodedSummary === 'string' ? decodeURIComponent(encodedSummary) : '';

    console.log("uselocalsearchparams", useLocalSearchParams());

    const scrollY = useRef(new Animated.Value(0)).current;
    const [contentHeight, setContentHeight] = useState(1);
    const [scrollViewHeight, setScrollViewHeight] = useState(1);

    const safeScrollProgress =
        contentHeight > scrollViewHeight
            ? Animated.divide(scrollY, contentHeight - scrollViewHeight)
            : new Animated.Value(0);


    const markdownStyles = {
        body: {
            color: '#1e293b', // slate-800
            fontSize: 16,
            lineHeight: 24,
        },
        heading1: {
            fontSize: 24,
            fontFamily: "quicksand-bold",
            marginBottom: 12,
            color: '#0f172a', // slate-900
        },
        heading2: {
            fontSize: 20,
            marginBottom: 10,
            fontFamily: "quicksand-bold",

            color: '#1e293b',
        },
        heading3: {
            fontSize: 18,
            marginBottom: 8,
            color: '#334155',
            fontFamily: "quicksand-semibold",

        },
        paragraph: {
            marginBottom: 10,
            fontFamily: "quicksand",

        },
        strong: {
            fontWeight: 'bold',
            color: '#0f172a',
        },
        em: {
            fontStyle: 'italic',
            color: '#334155',
        },
        bullet_list: {
            marginBottom: 10,
        },
        list_item: {
            flexDirection: 'row',
            marginBottom: 6,
        },
        list_item_text: {
            flex: 1,
            fontSize: 16,
            color: '#1e293b',
        },
        blockquote: {
            backgroundColor: '#f1f5f9',
            padding: 10,
            borderLeftWidth: 4,
            borderLeftColor: '#94a3b8',
            marginVertical: 10,
        },
        code_inline: {
            backgroundColor: '#e2e8f0',
            paddingHorizontal: 6,
            paddingVertical: 2,
            borderRadius: 4,
            fontFamily: 'monospace',
            color: '#ef4444',
        },
        code_block: {
            backgroundColor: '#f1f5f9',
            padding: 10,
            borderRadius: 6,
            fontFamily: 'poppins',
            color: '#1e293b',
        },
    };


    if (!title || !summary) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>No Title or Summary Provided</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>{title || 'No Title'}</Text>

            <Animated.View
                style={{
                    
                    height: 4,
                    width: safeScrollProgress.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", "100%"],
                        extrapolate: "clamp",
                    }),
                    backgroundColor: "#16a34a",
                    zIndex: 10,
                }}
            />

            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}
                onContentSizeChange={(w, h) => setContentHeight(h)}
                onLayout={(e) => setScrollViewHeight(e.nativeEvent.layout.height)}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}>

                <Markdown style={markdownStyles}>
                    {String(summary)}
                </Markdown>
            </ScrollView>
        </View>
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
    sectionTitle: {
        fontSize: 18,
        fontFamily: "quicksand-bold",
        marginBottom: 10,
        color: '#222',
    },




});

