import { View, Text } from 'react-native'
import React from 'react'

interface Props {
    title: string
  }
const Mains = (props: Props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  )
}

export default Mains