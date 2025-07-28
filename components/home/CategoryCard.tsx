import colors from '@/constants/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width / 4 - 16;

const tileColors = [
  '#4F8EF7', // Blue
  '#34A853', // Green
  '#F9AB00', // Amber
  '#F28B82', // Soft Red
  '#A142F4', // Purple
  '#03BFCB', // Cyan
  '#F67C1C', // Orange
  '#DB4437', // Red
  '#FFB74D', // Light Orange
  '#81C784', // Light Green
];

const getColorFromTitle = (title) => {

  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % tileColors.length;
  return tileColors[index];
};





const CategoryCard = ({ data }) => {
  const category = data?.subtopics || [];
  const router = useRouter();
  // console.log("CategoryCard data:", data); // Debugging log to check the data structure


  // Educational color palette




  return (
    <View style={styles.container}>
      {category.map((item) => (
        <View key={item?.id} style={styles.card}>
          <TouchableOpacity onPress={() => { router.push({ pathname: `/${data?.id}`, params: { subtopicId: item?.id, topicId: data?.id } }) }} style={[styles.iconTile, { backgroundColor: getColorFromTitle(item?.title) }]}>
            <Text style={styles.iconText}>
              {item?.title
                .split(' ')
                .map(word => word[0])
                .join('')
                .toUpperCase()
                .slice(0, 4)}
            </Text>
          </TouchableOpacity>
          <Text style={styles.title} numberOfLines={2}>{item?.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 8,
    gap: 8,
    justifyContent: "space-evenly"
  },
  card: {
    width: CARD_WIDTH,
    alignItems: 'center',
    marginVertical: 12,

  },
  iconTile: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  iconText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.PRIMARY || '#333',
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
    fontFamily: 'quicksand-bold',
    color: colors.BLACK || '#333',
  },
});
