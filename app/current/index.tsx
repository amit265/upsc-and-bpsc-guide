import dailyNews from "@/assets/data/current/daily_news.json";
import editorialData from "@/assets/data/current/editorial_analysis.json";
import governmentSchemes from "@/assets/data/current/government_schemes.json";
import issuesInNews from "@/assets/data/current/issuesInNews.json";
import vocabulary from "@/assets/data/current/vocabulary.json";
import menuData from "@/assets/data/menu.json";
import Articles from "@/components/home/Articles";
import SafeScreen from "@/components/safescreen";
import { currentDataContext } from "@/context/context";
import { useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const topicDataMap = {
  "daily-articles": dailyNews,
  "editorial": editorialData,
  "schemes": governmentSchemes,
  "issues-in-news": issuesInNews,
  "vocabulary": vocabulary,
  "monthly": dailyNews, // auto-updates each month

};

const Index = () => {
  const { setCurrentData } = useContext(currentDataContext);

  const { topicId, subtopicId, selectedExam } = useLocalSearchParams();
  console.log("useLocalSearchParams: from subtopic", useLocalSearchParams());

  const subtopicData = menuData[selectedExam].find(item => item?.id === topicId)?.subtopics?.find(sub => sub.id === subtopicId);

  // console.log("newsData:", newsData);
  if (!subtopicData) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Subtopic not found</Text>
      </View>
    );
  }

  const data = topicDataMap[subtopicId];

  console.log("data for subtopic:", data);

  if (!data) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>No data for this subtopic</Text>
      </View>
    );
  }

  return (
    <SafeScreen>
      <Text style={styles.header}>{subtopicData.title}</Text>
      <Articles data={data} setCurrentData={setCurrentData} />




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

