import colors from '@/constants/colors';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Linking, Modal, Pressable, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ selectedExam, setSelectedExam }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const exams = ["UPSC", "BPSC"];

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Check out this amazing app on the Play Store!\n\nhttps://play.google.com/store/apps/details?id=com.mindcraftlearning.upscandbpscguide",
      });

      if (result.action === Share.sharedAction) {
        console.log("App shared!");
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
          <Ionicons
            name="arrow-down"
            size={20}
            color={colors.BLACK}
            style={{ marginTop: 5 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Entypo name="dots-three-vertical" size={20} color={colors.BLACK} />
        </TouchableOpacity>
      </View>

      {/* Dropdown Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={dropdownVisible}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setDropdownVisible(false)}
        >
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

      {/* Three-dot menu modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable
          style={styles.menuOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.menuContainer}>
            {[
              {
                label: "Share",
                icon: "share",
                action: handleShare,
              },
              {
                label: "Review",
                icon: "star",
                action: () =>
                  Linking.openURL(
                    "https://play.google.com/store/apps/details?id=com.mindcraftlearning.upscandbpscguide"
                  ),
              },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  item.action();
                }}
              >
                <Feather name={item.icon} size={20} color={colors.BLACK} />
                <Text style={styles.menuText}>{item.label}</Text>
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
    height: 56,
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
    borderColor: '#eee',
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
    marginTop: 56,
  },
  dropdown: {
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    width: 120,
    elevation: 1,
    paddingVertical: 8,
    marginLeft: 20,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  dropdownText: {
    fontSize: 16,
    color: colors.BLACK,
    textAlign: "center",
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 56, // aligns below header
    paddingRight: 10,
  },
  menuContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    width: 180,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: 16,
    color: colors.BLACK,
    marginLeft: 12,
  },
});
