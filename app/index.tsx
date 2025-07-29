import SafeScreen from "@/components/safescreen";
import colors from "@/constants/colors";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const [seconds, setSeconds] = useState(5);


  useEffect(() => {

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer); // Clear the timer
          return 0; // Stop the countdown
        }
        return prev - 1; // Decrease the countdown
      });

    }, 1000); // Update every second



  }, [])

  useEffect(() => {
    if (seconds === 0) {
      router.replace("/home"); // Redirect to home when countdown reaches 0
    }
  }, [seconds, router]);



  return (
    <SafeScreen>
      <View style={styles.container}>
        {/* Top Section - Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/icon.png")} // Add your image here
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Bottom Section - Text + Buttons */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome to the UPSC & BPSC Guide App</Text>
          <Text style={styles.description}>
            This app is designed to help you prepare for UPSC and BPSC exams with ease.
          </Text>
          <Text style={styles.subText}>
            Explore the app to find resources, quizzes, and more.
          </Text>
          <Text style={styles.subText}>
            Redirecting to Home in {seconds} seconds...
          </Text>



          {/* <Pressable onPress={() => router.push("/profile")} style={styles.button}>
            <Text style={styles.buttonText}>Go to Profile</Text>
          </Pressable> */}

          <Pressable onPress={() => router.replace("/home")} style={styles.button}>
            <Text style={styles.buttonText}>Go to Home</Text>
          </Pressable>
        </View>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.BACKGROUND
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 50,


  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "quicksand-bold",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 6,
    fontFamily: "quicksand-semibold",
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
    fontFamily: "quicksand",

  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
    fontFamily: "quicksand",
    bottom: 0,


  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
