import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import React, { useContext } from "react";
import { SideContext } from "../components/XOSideProvider";
import Announcement from "../components/Announcement";
import GameField from "../components/GameField";

export default function BoardScreen({
  navigation,
}: RootStackScreenProps<"Board">) {
  const sideContext = useContext(SideContext);
  const [squaresArray, setSquaresArray] = React.useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = React.useState("x");
  const [result, setResult] = React.useState("unknown");

  if (!sideContext?.side) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Announcement
        result={result}
        currentMove={sideContext?.side}
        setSquaresArray={setSquaresArray}
        setResult={setResult}
        setCurrentMove={setCurrentMove}
      />
      <GameField
        setSquaresArray={setSquaresArray}
        setResult={setResult}
        squaresArray={squaresArray}
        currentMove={sideContext?.side}
        result={result}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "50%",
    marginTop: 100,
    flexDirection: "column",
  },
});
