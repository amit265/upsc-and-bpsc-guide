import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';


type Props = {}

const EditorialAnalysis = (props: Props) => {
    // console.log("DailyArticles component rendered with data:", props.data);
    const { data } = props;
    const router = useRouter();

    // console.log("data from category", data);


    const renderItem = React.useCallback(({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => {
            router.push({
                pathname: `/current/subTopic/${item?.id}`, params: {
                    title: item?.title,
                    summary: encodeURIComponent(item.summary),
                }
            })
        }}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.source}>Source: {item.source}</Text>
            <Text style={styles.tags}>Tags: {item.tags.join(', ')}</Text>
        </TouchableOpacity>
    ), []);


    if (!data || data.length === 0) {
        return null; // or a placeholder component
    }
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={5}
        />

    )
}

export default React.memo(EditorialAnalysis);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    listContent: {
        paddingBottom: 16,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 10,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,

        shadowRadius: 1.41,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: 10,
        marginVertical: 5,

    },
    date: {
        fontSize: 14,
        color: '#888',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 4,
    },
    summary: {
        fontSize: 16,
        color: '#333',
    },
    source: {
        fontSize: 14,
        color: '#555',
    },
    tags: {
        fontSize: 14,
        color: '#555',
    },
});

