import { View, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';


const Current = (data) => {

  const {title, subtopics} = data?.data;

  console.log("propshgdhg", subtopics);
  
  return (
    <View style={{ padding: 10, borderWidth: 1, margin: 5 }}>
   
      <Text style={{ fontSize: 25, fontWeight: 'bold', paddingBottom: 20 }}>{title}</Text>
     
     <CategoryCard data={subtopics}/>
    </View>
  )
}

export default Current