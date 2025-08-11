import colors from '@/constants/colors';
import { Entypo, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ selectedExam, setSelectedExam }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const exams = ["UPSC", "BPSC"];

  return (
    <>
      <View style={styles.headerContainer}>
        {/* <Entypo name="user" size={24} color={colors.BLACK} /> */}
        <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
          <Image
            source={require('@/assets/images/icon_circle.png')}
            style={{ width: 40, height: 40 }}
          />

        </View>
        {/* Center title + dropdown arrow */}
        <TouchableOpacity
          style={styles.titleWrapper}
          onPress={() => setDropdownVisible(true)}
          activeOpacity={0.7}
        >
          <Text style={styles.title}>{selectedExam}</Text>
          <Ionicons name="arrow-down" size={20} color={colors.BLACK} style={{ alignItems: "center", justifyContent: "center", marginTop: 5 }} />
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
    gap: 10,
    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: 1 },
    borderRadius: 8,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: '#eee'


  },
  title: {
    fontSize: 20,
    fontFamily: "quicksand-bold",
    color: colors.BLACK,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    marginTop: 56
  },
  dropdown: {
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    width: 120,
    elevation: 1,
    paddingVertical: 8,
    marginLeft: 20
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
