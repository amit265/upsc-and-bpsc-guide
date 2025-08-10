import menuData from "@/assets/data/menu.json";
import dailyNews from "@/assets/data/current/daily_news.json";
import { getPrelimsCurrentAffairs } from "@/utils/getPrelimsCurrentAffairs";

import artCulture from "@/assets/data/prelims/art-culture.json";
import currentAffairs from "@/assets/data/prelims/current-affairs.json";
import economy from "@/assets/data/prelims/economy.json";
import environment from "@/assets/data/prelims/environment.json";
import geography from "@/assets/data/prelims/geography.json";
import history from "@/assets/data/prelims/history.json";
import polity from "@/assets/data/prelims/polity.json";
import books from "@/assets/data/prelims/pre-books.json";
import notes from "@/assets/data/prelims/pre-revision.json";
import pyq from "@/assets/data/prelims/pyq.json";
import sciTech from "@/assets/data/prelims/sci-tech.json";
import syllabus from "@/assets/data/prelims/syllabus.json";
import Articles from "@/components/home/Articles";
import SafeScreen from "@/components/safescreen";
import { currentDataContext } from "@/context/context";
import { useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
const prelimsCurrentAffairs = getPrelimsCurrentAffairs(dailyNews);


const topicDataMap = {
  "polity": polity,
  "history": history,
  "geography": geography,
  "economy": economy,
  "sci-tech": sciTech,
  "environment": environment,
  "art-culture": artCulture,
  "notes": notes,
  "pyq": pyq,
  "syllabus": syllabus,
  "books": books,
  "current-affairs": prelimsCurrentAffairs,


};

const Index = () => {
  const { setCurrentData } = useContext(currentDataContext);

  const { topicId, subtopicId } = useLocalSearchParams();
  console.log("useLocalSearchParams: from subtopic", useLocalSearchParams());

  const subtopicData = menuData.find(item => item?.id === topicId)?.subtopics?.find(sub => sub.id === subtopicId);

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

