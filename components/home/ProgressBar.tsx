import { useContext } from "react";
import { Text, View } from "react-native";
import { ProgressBar as PaperProgressBar } from "react-native-paper";
import { userDetailsContext } from "../../context/context";
import colors from "../../constants/colors";

export default function ProgressBar() {
  const { userData } = useContext(userDetailsContext);

  const xp = userData?.level?.xp || 0;
  const nextXP = userData?.level?.nextLevelXP || 100;
  const progress = Math.min(xp / nextXP, 1); // clamp to 1

  return (
    <View className="mt-4 p-2 bg-white rounded-xl">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-base font-nunito-semibold text-gray-800 font-bold">
          Level: {userData?.level?.currentLevel || 1}
        </Text>
        <Text className="text-base font-nunito-semibold text-gray-800 font-bold">
          XP: {xp}/{nextXP}
        </Text>
      </View>

      <PaperProgressBar
        progress={progress}
        color= {colors.PRIMARY} // Tailwind's green-500
        style={{ height: 10, borderRadius: 4, backgroundColor: colors.BACKGROUND }}
      />
    </View>
  );
}
