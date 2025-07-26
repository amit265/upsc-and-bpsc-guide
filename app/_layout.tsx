import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#CBE7F7" barStyle="dark-content" hidden={false} />

      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
