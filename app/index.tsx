import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text
        onPress={() => router.push("(tabs)/home")}
        style={{ color: "blue", marginTop: 20 }}
        >go to home</Text>
    </View>
  );
}
