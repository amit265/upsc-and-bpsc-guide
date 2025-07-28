import { useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { availableImages } from "../constants/constants";
import { userDetailsContext } from "../context/context";
import Button from "./shared/Button";

const ProfileModal = ({ setShowModal }) => {
  const [selectedImage, setSelectedImage] = useState(availableImages[0]);
  const { userData, updateUser } = useContext(userDetailsContext);

  const [error, setError] = useState("");

  const [username, setUsername] = useState(userData?.profile.name);
  const router = useRouter();

  

  const handleUsernameChange = (text) => {
    const trimmed = text.trim();

    // Check for length
    if (trimmed.length > 15) {
      setError("Username can't be more than 15 characters.");
      return;
    }

    // Check for allowed characters (letters, numbers, underscores only)
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

    // router.replace("/(tabs)/profile");
    setShowModal(false);
  };

  return (
    <View className="items-center mt-4">
      <View className="p-4 pb-8">
        <Text className="text-xl font-nunito-bold text-center mb-6">
          Let’s set up your profile ✨
        </Text>
      </View>
      <Image
        source={selectedImage.source}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 12 }}
      />

      <Text className="text-lg font-nunito mb-2">
        Select an Avatar:
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {availableImages.map((img, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedImage(img)}
            style={{ marginHorizontal: 6 }}
          >
            <Image
              source={img.source}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                borderWidth: selectedImage === img ? 2 : 0,
                borderColor: selectedImage === img ? "#4F46E5" : "transparent",
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="w-full mb-6" style={{ marginBottom: 20, marginTop: 50 }}>
        <Text className="text-base font-nunito mb-2">Username</Text>
        <TextInput
          value={username}
          onChangeText={handleUsernameChange}
          maxLength={15}
          placeholder="Enter your name"
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white font-nunito"
        />
        {error ? (
          <Text className="text-red-500 text-sm mt-2">{error}</Text>
        ) : null}
      </View>

      <Button text={"Continue"} onPress={saveData} />
    </View>
  );
};

export default ProfileModal;
