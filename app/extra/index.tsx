import governmentSchemes from "@/assets/data/current/government_schemes.json";
import amendments from "@/assets/data/extra/amendments.json";
import bills from "@/assets/data/extra/bills-and-acts.json";
import budget from "@/assets/data/extra/budget.json";
import committees from "@/assets/data/extra/committees-commissions.json";
import constitution from "@/assets/data/extra/constitution.json";
import economicSurvey from "@/assets/data/extra/economic-survey.json";
import judgments from "@/assets/data/extra/judgments.json";
import misc from "@/assets/data/extra/misc-resources.json";
import ncert from "@/assets/data/extra/ncert.json";
import reports from "@/assets/data/extra/reports.json";
import yojana from "@/assets/data/extra/yojana.json";
import menuData from "@/assets/data/menu.json";
import Articles from "@/components/home/Articles";
import SafeScreen from "@/components/safescreen";
import { currentDataContext } from "@/context/context";
import { useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const topicDataMap = {
  "constitution": constitution,
  "ncert": ncert,
  "yojana": yojana,
  "economic-survey": economicSurvey,
  "budget": budget,
  "schemes": governmentSchemes,
  "reports": reports,
  "amendments": amendments,
  "bills": bills,
  "judgments": judgments,
  "committees": committees,
  "misc": misc,



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

