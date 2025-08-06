import colors from "@/constants/colors";
import { useFonts } from "expo-font";

import { getUserData, setUserData } from "@/services/userStorage";
import { Stack } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { userDetailsContext, currentDataContext } from "../context/context";

export default function RootLayout() {

  const [fontsLoaded, fontError] = useFonts({
    "poppins": require("../assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "poppins-semiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "quicksand": require("../assets/fonts/Quicksand-Regular.ttf"),
    "quicksand-semiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "quicksand-bold": require("../assets/fonts/Quicksand-Bold.ttf"),

  })

  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const [userData, setUserDataState] = useState(null);

  const userDetailsValue = useMemo(() => ({ userData, setUserDataState }), [userData])
  const currentDataValue = useMemo(() => ({ currentData, setCurrentData }), [currentData]);



  // Load user data initially
  useEffect(() => {
    const load = async () => {
      const data = await getUserData();

      setUserDataState(data);
      setLoading(false);
    };
    load();
  }, [update]);

  // Update AsyncStorage + context state
  const updateUser = async (updateFn) => {
    const updated = updateFn({ ...userData });
    await setUserData(updated);
    setUserDataState(updated);
  };

  const value = {
    userData,
    loading,
    updateUser,
    // Example methods you can call from anywhere
    gainXP: async (xp) => {
      await updateUser((data) => {
        if (!data.level) {
          data.level = {
            xp: 0,
            currentLevel: 1,
            nextLevelXP: 100, // Starting point for Level 1
          };
        }

        const xpTable = [0, 100, 200, 400, 700, 1000, 1400, 1800, 2200, 2600]; // index = currentLevel

        if (data.level.currentLevel >= 10) {
          data.level.xp = Math.min(data.level.xp + xp, data.level.nextLevelXP);
          return data;
        }

        data.level.xp += xp;

        while (
          data.level.currentLevel < 10 &&
          data.level.xp >= data.level.nextLevelXP
        ) {
          data.level.xp -= data.level.nextLevelXP;
          data.level.currentLevel += 1;
          data.level.nextLevelXP = xpTable[data.level.currentLevel] || 0;
        }

        return data;
      });
    }
    ,


    updateCourse: async (course, updates) => {
      await updateUser((data) => {
        if (!data.progress) {
          data.progress = {};
        }
        if (!data.progress[course]) {
          data.progress[course] = {
            attemptedQuizzes: [],
            flashcardsViewed: [],
            flashcardsLoved: [],
            completed: false,
            percentage: 0,
          };
        }

        data.progress[course] = {
          ...data.progress[course],
          ...updates,
        };

        return data;
      });
    }

  };

  if (fontError) {
    console.error("Error loading fonts:", fontError);
    return null; // or show fallback UI
  }
  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <currentDataContext.Provider value={currentDataValue}>
        <userDetailsContext.Provider value={value}>
          <StatusBar backgroundColor={colors.BACKGROUND} barStyle="dark-content" hidden={false} />

          <Stack screenOptions={{ headerShown: false }} />
        </userDetailsContext.Provider>
      </currentDataContext.Provider>

    </SafeAreaProvider>
  );
}
