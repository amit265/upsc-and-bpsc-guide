import Current from '@/components/home/Current';
import Extra from '@/components/home/Extra';
import Header from '@/components/home/Header';
import Mains from '@/components/home/Mains';
import Prelims from '@/components/home/Prelims';
import SafeScreen from '@/components/safescreen';
import menuData from "@/constants/menu.json";
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
const HomeScreen = () => {

  console.log("mwnudrata", menuData);



  return (
    <SafeScreen>
              <Header title="UPSC" />

      <ScrollView showsVerticalScrollIndicator = {false}>

        {/* main body */}

        <View style={{ flex: 1, }}>

          <Current data={menuData[0]} />
          <Prelims data={menuData[1]} />
          <Mains data={menuData[2]} />
          <Extra data={menuData[3]} />

        </View>
      </ScrollView>

    </SafeScreen>);
};

export default HomeScreen;
