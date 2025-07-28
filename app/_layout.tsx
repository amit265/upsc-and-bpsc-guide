import colors from "@/constants/colors";
import { useFonts } from "expo-font";

import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {

  const [fontsLoaded, fontError] = useFonts({
    "poppins": require("../assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "poppins-semiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "quicksand": require("../assets/fonts/Quicksand-Regular.ttf"),
    "quicksand-semiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "quicksand-bold": require("../assets/fonts/Quicksand-Bold.ttf"),

  })


  if (fontError) {
    console.error("Error loading fonts:", fontError);
    return null; // or show fallback UI
  }
  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.BACKGROUND} barStyle="dark-content" hidden={false} />

      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
