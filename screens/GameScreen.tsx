import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Button } from "../components/Button";

export default function GameScreen({ navigation }: RootTabScreenProps<"Game">) {
  const startNewGame = () => {
    navigation.navigate('ChooseXO')
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Game</Text>
      <Button
        buttonStyle={styles.button}
        onPress={startNewGame}
        title="Start"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: -200,
  },
  button: {
    marginTop: 50,
    backgroundColor: "blue",
    borderRadius: 40,
  },
});
