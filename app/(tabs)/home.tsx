import Current from '@/components/home/Current';
import Extra from '@/components/home/Extra';
import Header from '@/components/home/Header';
import Mains from '@/components/home/Mains';
import Prelims from '@/components/home/Prelims';
import SafeScreen from '@/components/safescreen';
import menuData from "@/constants/menu.json";
import React from 'react';
import { StyleSheet, View } from 'react-native';
const HomeScreen = () => {

  menuData.menu.forEach((item) => {
    console.log("title", item.title);
  });



  return (
    <SafeScreen>
      <Header title="UPSC" />

      {/* main body */}

      <View style={{ flex: 1, }}>

        <Current title="Current Affairs" />
        <Prelims title="Prelims" />
        <Mains title="Mains" />
        <Extra title="Extra" />

      </View>


    </SafeScreen>);
};

export default HomeScreen;

const styles = StyleSheet.create({

  text: {
    fontSize: 20,
  },
});
