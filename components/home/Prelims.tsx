import React from 'react'
import { Text, View } from 'react-native'

interface Props {
    title: string
}
const Prelims = (props: Props) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )
}

export default Prelims