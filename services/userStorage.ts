import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@user_data";

// Default structure
const defaultUserData = {
  profile: {
    name: "user",
    avatar: "avatar2.png",
    firstTime: true,
  },
  preferences: {
    darkMode: false,
    sound: true,
  },
  level: {
    currentLevel: 1,
    xp: 0,
    nextLevelXP: 100,
  },
  progress: {
    // courses will be added dynamically: html, css, js, etc.
  },
};



// Get entire user data
export const getUserData = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    // console.log("data from getUserdate", data);

    return data ? JSON.parse(data) : defaultUserData;
  } catch (error) {
    console.error("Error getting user data:", error);
    return defaultUserData;
  }
};

// Set entire user data
export const setUserData = async (data) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error setting user data:", error);
  }
};

// Update a specific key inside user data (deep merge)
export const updateUserData = async (updateFn) => {
  const current = await getUserData();
  const updated = updateFn({ ...current });
  await setUserData(updated);
};

// Add XP and handle level up
export const gainXP = async (earnedXP) => {
  await updateUserData((data) => {
    data.level.xp += earnedXP;

    while (data.level.xp >= data.level.nextLevelXP) {
      data.level.xp -= data.level.nextLevelXP;
      data.level.currentLevel += 1;
      data.level.nextLevelXP += 100; // increase difficulty
    }

    return data;
  });
};

// Update progress in a course
export const updateCourseProgress = async (course, updates) => {
  await updateUserData((data) => {
    if (!data.progress[course]) {
      data.progress[course] = {
        quizzesAttempted: [],
        flashcardsLoved: [],
        completed: false,
        percentage: 0,
        flashcardsViewed: [], // initialize here if no course progress
      };
    }

    data.progress[course] = {
      ...data.progress[course],
      ...updates,
    };
    return data;
  });
};

// Set first time to false
export const markNotFirstTime = async () => {
  await updateUserData((data) => {
    data.profile.firstTime = false;
    return data;
  });
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log("All data cleared from AsyncStorage.");
  } catch (e) {
    console.error("Failed to clear AsyncStorage:", e);
  }
};

export const logAllAsyncStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);

    console.log("📦 AsyncStorage Contents:");
    items.forEach(([key, value]) => {
      // console.log(`🗝️ ${key}:`, JSON.parse(value));
    });
  } catch (e) {
    console.error("Failed to log AsyncStorage:", e);
  }
};
