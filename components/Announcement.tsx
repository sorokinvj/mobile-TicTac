import React from "react";
import { Text, View } from "../components/Themed";
import { StyleSheet } from "react-native";
import { Button } from "./Button";

interface Props {
  currentMove: string;
  result: string;
  setSquaresArray: (squaresArray: string[]) => void;
  setResult: (result: string) => void;
  setCurrentMove: (currentMove: string) => void;
}

const Announcement: React.FC<Props> = ({
  currentMove,
  result,
  setSquaresArray,
  setResult,
  setCurrentMove,
}) => {
  function replayGame() {
    setResult("unknown");
    setSquaresArray(Array(9).fill(null));
    setCurrentMove("x");
  }

  if (result === "unknown") {
    return (
      <View style={styles.status}>
        <Text>{currentMove} to move.</Text>
      </View>
    );
  }

  return (
    <div className="expanded">
      {result}
      <Button
        onPress={replayGame}
        buttonStyle={styles.replayButton}
        title="replay"
      />
      <View style={styles.gameOver}>
        {result !== "draw" ? <Text>TADAM</Text> : null}
      </View>
    </div>
  );
};

const styles = StyleSheet.create({
  status: {
    textAlign: "center",
    backgroundColor: "#fffa99",
    width: 600,
    height: 30,
    lineHeight: 30,
  },
  gameOver: {
    backgroundColor: "#fffa99",
    paddingTop: 120,
    width: 600,
    height: 510,
    textAlign: "center",
    alignContent: "center",
    flex: 1,
  },
  replayButton: {
    backgroundColor: "transparent",
    margin: "0 auto",
  },
  replayButtonTextL: {
    fontSize: "1.3rem",
    textDecoration: "underline",
  },
});

export default Announcement;
