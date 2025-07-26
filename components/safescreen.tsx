import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeScreen({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    paddingTop: 16,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
  },
});
