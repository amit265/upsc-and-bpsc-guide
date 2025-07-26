import SafeScreen from "@/components/safescreen";
import { useRouter } from "expo-router";
import { Text } from "react-native";

export default function Index() {

  const router = useRouter();
  return (
    <SafeScreen>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text
        onPress={() => router.push("/home")}
        style={{ color: "blue", marginTop: 20 }}
      >go to home</Text>
    </SafeScreen>
  );
}
