import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { getAvatarImage, levels } from "../constants/constants";

export default function UserCard({ userData, setShowModal }) {
  const profile = userData?.profile;
  const level =
    levels[userData?.level?.currentLevel - 1]?.title || "Curious Kitten";

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image
          source={getAvatarImage(profile?.avatar)}
          style={styles.avatar}
        />

        <View style={styles.details}>
          <View style={styles.infoGroup}>
            <Text style={styles.value}>{profile?.name || "user"}</Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>UPSC & BPSC Aspirant</Text>

          </View>

          {/* <View style={styles.infoGroup}>
            <Text style={styles.label}>Level:</Text>
            <Text style={styles.value}>{level}</Text>
          </View> */}
        </View>

        <Pressable style={styles.editButton} onPress={() => setShowModal(true)}>
          <Feather name="edit-3" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  row: {
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    gap: 10
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  infoGroup: {
    marginBottom: 12,
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    

  },
  label: {
    fontSize: 14,
    fontFamily: "quicksand-bold",
    color: "#333",
  },
  value: {
    fontSize: 16,
    fontFamily: "quicksand-bold",
    color: "#555",
  },
  editButton: {
    position: "absolute",
    top: 12,
    right: 12,
    padding: 8,
  },
});
