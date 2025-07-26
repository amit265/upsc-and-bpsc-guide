import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
    <View>
      <Text style={{textAlign: "center", fontSize:25}}>{title}</Text>

      {!menuVisible && (
        <TouchableOpacity
          onPress={() => setMenuVisible(true)}
          style={{ position: 'absolute', right: 10, top: 10 }}>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;