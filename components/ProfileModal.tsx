import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { availableImages } from "../constants/constants";
import { userDetailsContext } from "../context/context";
import Button from "./shared/Button";

const ProfileModal = ({ setShowModal }) => {
  const [selectedImage, setSelectedImage] = useState(availableImages[0]);
  const { userData, updateUser } = useContext(userDetailsContext);
  const [error, setError] = useState("");
  const [username, setUsername] = useState(userData?.profile.name || "");
  const router = useRouter();

  const handleUsernameChange = (text) => {
    const trimmed = text.trim();
    if (trimmed.length > 15) {
      setError("Username can't be more than 15 characters.");
      return;
    }
    const regex = /^[a-zA-Z0-9_]*$/;
    if (!regex.test(trimmed)) {
      setError("Only letters, numbers, and underscores allowed.");
    } else {
      setError("");
    }
    setUsername(trimmed);
  };

  const saveData = () => {
    if (!username || username === "user") {
      setError("Change username");
      return;
    }

    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];

    updateUser((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        avatar: selectedImage.name,
        name: username,
        createdAt: formattedDate,
        firstTime: false,
      },
    }));

    setShowModal(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.wrapper}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Let's set up your profile ✨</Text>

        <Image source={selectedImage.source} style={styles.avatarPreview} />

        <Text style={styles.label}>Select an Avatar:</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.avatarScroll}
        >
          {availableImages.map((img, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedImage(img)}
              style={styles.avatarOption}
            >
              <Image
                source={img.source}
                style={[
                  styles.avatarImage,
                  selectedImage === img && styles.avatarSelected,
                ]}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value={username}
            onChangeText={handleUsernameChange}
            maxLength={15}
            placeholder="Enter your name"
            style={styles.input}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>

        <Button text={"Continue"} onPress={saveData} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  avatarPreview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  avatarScroll: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 32,
  },
  avatarOption: {
    marginHorizontal: 6,
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  avatarSelected: {
    borderWidth: 2,
    borderColor: "#4F46E5",
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 13,
    marginTop: 6,
  },
});
