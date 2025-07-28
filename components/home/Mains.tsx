import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryCard from './CategoryCard';

const Mains = ({ data }) => {
  const { title, subtopics } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <CategoryCard data={subtopics} />
    </View>
  );
};

export default Mains;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    elevation: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'quicksand-bold',
    paddingBottom: 10,
    color: '#333',
  },
});