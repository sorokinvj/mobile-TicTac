import { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { SideContext } from "../components/XOSideProvider";
import { RootStackScreenProps } from "../types";

export default function ChooseXOScreen({
  navigation,
}: RootStackScreenProps<"ChooseXO">) {
  const context = useContext(SideContext);
  const choose = (side: "X" | "O") => {
    context?.chooseSide(side);
    navigation.navigate("Board");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your side</Text>
      <View style={styles.xoContainer}>
        <View style={[styles.column, styles.marginRight]}>
          <TouchableOpacity onPress={() => choose("X")}>
            <Text style={styles.side}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => choose("O")}>
            <Text style={styles.side}>O</Text>
          </TouchableOpacity>
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
