import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { useContext } from "react";
import { SideContext } from "../components/XOSideProvider";

export default function BoardScreen({
  navigation,
}: RootStackScreenProps<"Board">) {
  const sideContext = useContext(SideContext);
  return (
    <View style={styles.container}>
      <Text>You are playing {sideContext?.side}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
