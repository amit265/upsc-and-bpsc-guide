import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  title: string
}
const Current = (props: Props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  )
}

export default Current