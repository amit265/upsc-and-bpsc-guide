import colors from '@/constants/colors';
import { Entypo, Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Modal, Pressable } from 'react-native';

const Header = ({ selectedExam, setSelectedExam }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const exams = ["UPSC", "BPSC"];

  return (
    <>
      <View style={styles.headerContainer}>
        <Entypo name="user" size={24} color={colors.BLACK} />

        {/* Center title + dropdown arrow */}
        <TouchableOpacity
          style={styles.titleWrapper}
          onPress={() => setDropdownVisible(true)}
          activeOpacity={0.7}
        >
          <Text style={styles.title}>{selectedExam}</Text>
          <Ionicons name="arrow-down" size={20} color={colors.BLACK} style={{alignItems: "center", justifyContent: "center", marginTop: 5}}/>
        </TouchableOpacity>

        {!menuVisible ? (
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Entypo name="dots-three-vertical" size={20} color={colors.BLACK} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24 }} /> // keep space consistent
        )}
      </View>

      {/* Dropdown Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={dropdownVisible}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setDropdownVisible(false)}>
          <View style={styles.dropdown}>
            {exams.map((exam) => (
              <TouchableOpacity
                key={exam}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedExam(exam);
                  setDropdownVisible(false);
                }}
              >
                <Text style={styles.dropdownText}>{exam}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    backgroundColor: colors.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 56
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 6,
    overflow: 'hidden',
    gap: 10,
    elevation:1,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: 1 },
    borderRadius: 8,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: '#ddd'
   

  },
  title: {
    fontSize: 20,
    fontFamily: "quicksand-bold",
    color: colors.BLACK,
    marginRight: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    marginTop: 50
  },
  dropdown: {
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    width: 150,
    elevation: 5,
    paddingVertical: 8
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  dropdownText: {
    fontSize: 16,
    color: colors.BLACK
  }
});
