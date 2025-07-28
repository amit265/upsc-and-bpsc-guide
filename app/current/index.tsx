import menuData from "@/assets/data/menu.json";
import SafeScreen from "@/components/safescreen";
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Index = () => {
  const { topicId, subtopicId } = useLocalSearchParams();
  const subtopicData = menuData.find(item => item?.id === topicId)?.subtopics?.find(sub => sub.id === subtopicId);

  if (!subtopicData) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Subtopic not found</Text>
      </View>
    );
  }

  const isDated = subtopicData.type === 'dated';

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.header}>{subtopicData.title}</Text>

        <FlatList
          data={subtopicData.entries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              {isDated && <Text style={styles.date}>{item.date}</Text>}
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardContent}>{item.content}</Text>
            </View>
          )}
        />
      </View>
    </SafeScreen>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 4,
  },
  cardContent: {
    fontSize: 16,
    color: '#333',
  },
});
