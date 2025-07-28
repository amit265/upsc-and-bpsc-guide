import colors from '@/constants/colors';
import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Platform, StatusBar } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.headerContainer}>
      <Entypo name="user" size={24} color="black" />

      <Text style={styles.title}>{title}</Text>

      {!menuVisible ? (
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // keep space consistent
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    backgroundColor: 'white', // replace red with your theme
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderColor: colors.BACKGROUND,
    borderRadius: 8,
    paddingVertical: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: "quicksand-bold",
    color: colors.BLACK || '#333',
    textAlign: 'center',
    flex: 1,
  },
});
