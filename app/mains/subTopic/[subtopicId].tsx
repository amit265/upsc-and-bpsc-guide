import SafeScreen from '@/components/safescreen';
import { currentDataContext } from '@/context/context';
import { looksLikeMarkdown } from '@/services/lookslikemarkdown';
import React, { useContext, useRef, useState } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import Markdown from "react-native-markdown-display";


const SubTopics = () => {
    const { currentData } = useContext(currentDataContext);
    console.log("currentData from context:", currentData);

    const { title, summary, question, hints, answer, tags, difficulty } = currentData || {};

    console.log("currentData:", currentData);


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
            fontFamily: 'poppins',
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


    if (!title) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>No Title</Text>
            </View>
        );
    }

    return (
        <SafeScreen>
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

                {/* <View>

                    {question && <Text style={styles.sectionTitle}>Questions</Text>}





                    {looksLikeMarkdown(question) ? (
                        <Markdown style={markdownStyles}>
                            {question}
                        </Markdown>
                    ) : (
                        <Text style={styles.summary}>{question}</Text>
                    )}

                    {hints && <Text style={styles.sectionTitle}>Hints</Text>}
                    {looksLikeMarkdown(hints) ? (
                        <Markdown style={markdownStyles}>
                            {hints}
                        </Markdown>
                    ) : (
                        <Text style={styles.summary}>{hints}</Text>
                    )}
                    {answer && <Text style={styles.sectionTitle}>Answer</Text>}
                    {looksLikeMarkdown(answer) ? (
                        <Markdown style={markdownStyles}>
                            {answer}
                        </Markdown>
                    ) : (
                        <Text style={styles.summary}>{answer}</Text>
                    )}
                    {tags && <Text style={styles.sectionTitle}>Tags</Text>}
                    {looksLikeMarkdown(tags) ? (
                        <Markdown style={markdownStyles}>
                            {tags}
                        </Markdown>
                    ) : (
                        <Text style={styles.summary}>{tags}</Text>
                    )}
                    {difficulty && <Text style={styles.sectionTitle}>Difficulty</Text>}
                    {looksLikeMarkdown(difficulty) ? (
                        <Markdown style={markdownStyles}>
                            {difficulty}
                        </Markdown>
                    ) : (
                        <Text style={styles.summary}>{difficulty}</Text>
                    )}


                </View> */}

                {
                    looksLikeMarkdown(summary) ? (
                        <Markdown style={markdownStyles}>
                            {summary}
                        </Markdown>
                    ) : (

                        <Text style={styles.summary}>{summary}</Text>
                    )
                }



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
        textAlign: "left",
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#f0f0f0",



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

