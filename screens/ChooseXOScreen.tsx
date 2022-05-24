import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function ChooseXOScreen({
  navigation,
}: RootTabScreenProps<"Game">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your side</Text>
      <View style={styles.xoContainer}>
        <View style={[styles.column, styles.marginRight]}>
          <Text style={styles.side}>X</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.side}>O</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  xoContainer: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "black",
    backgroundColor: "white",
    fontWeight: "bold",
    marginTop: 100,
  },
  side: {
    fontSize: 100,
    color: "black",
    fontWeight: "bold",
  },
  column: {
    backgroundColor: "#f4f4f4",
    width: "40%",
    alignItems: "center",
  },
  marginRight: {
    marginRight: 30,
  },
});
