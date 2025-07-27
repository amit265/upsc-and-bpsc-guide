import React from 'react'
import { Text, View } from 'react-native'
import CategoryCard from './CategoryCard';


const Prelims = (data) => {
    const {title, subtopics} = data?.data;

    return (
        <View style={{ padding: 10, borderWidth: 1, margin: 5 }}>
       
          <Text style={{ fontSize: 25, fontWeight: 'bold', paddingBottom: 20 }}>{title}</Text>
         
         <CategoryCard data={subtopics}/>
        </View>
      )
}

export default Prelims