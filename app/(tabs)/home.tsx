import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import SafeScreen from '@/components/safescreen';
import Header from '@/components/home/Header';
import menuData from "@/assets/data/menu.json";

import Current from '@/components/home/Current';
import Extra from '@/components/home/Extra';
import Mains from '@/components/home/Mains';
import Prelims from '@/components/home/Prelims';

const componentMap = { Current, Prelims, Mains, Extra };

const HomeScreen = () => {
  const [selectedExam, setSelectedExam] = useState("UPSC");

  return (
    <SafeScreen>
      <Header selectedExam={selectedExam} setSelectedExam={setSelectedExam} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          {menuData[selectedExam].map((section, index) => {
            const SectionComponent = componentMap[section.component];
            return <SectionComponent key={index} data={section} selectedExam={selectedExam}/>;
          })}
        </View>
      </ScrollView>
    </SafeScreen>
  );
};

export default HomeScreen;
