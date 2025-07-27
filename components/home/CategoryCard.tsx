import { View, Text } from 'react-native'
import React from 'react'



const CategoryCard = (data) => {

    const category = data?.data;

    console.log("category", category);

    
  return (

    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {category.map((item, index) => (
            <View key={index} style={{ padding: 10, borderWidth: 1, margin: 5, height: 80, width: 80 }}>
            <Text style={{fontSize: 12}}>{item}</Text>
            {/* You can add more details about the category here */}
            </View>
        ))}
    </View>
  )
}

export default CategoryCard