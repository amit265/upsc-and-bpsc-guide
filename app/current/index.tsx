import dailyNews from "@/assets/data/daily_news.json";
import editorialData from "@/assets/data/editorial_analysis.json";
import menuData from "@/assets/data/menu.json";
import DailyArticles from "@/components/home/DailyArticles";
import EditorialAnalysis from "@/components/home/EditorialAnalysis";
import SafeScreen from "@/components/safescreen";
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
  const { topicId, subtopicId } = useLocalSearchParams();
  const subtopicData = menuData.find(item => item?.id === topicId)?.subtopics?.find(sub => sub.id === subtopicId);
  const newsData = Object.entries(dailyNews).flatMap(([date, articles]) =>
    articles.map(article => ({
      ...article,
      date,
      key: `${date}-${article.title}`, // unique key
    }))
  );


  // console.log("newsData:", newsData);

  if (!topicId || !subtopicId) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Topic or Subtopic not found</Text>
      </View>
    );
  }

  if (!subtopicData) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Subtopic not found</Text>
      </View>
    );
  }


  return (
    <SafeScreen>
      <Text style={styles.header}>{subtopicData.title}</Text>
      {subtopicId === newsData[0].topic && <DailyArticles data={newsData} />}
      {subtopicId === editorialData[0].topic && <EditorialAnalysis data={editorialData} />}





    </SafeScreen>

  );
};

export default Index;

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

