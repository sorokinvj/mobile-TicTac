import React, { useEffect } from "react";
import { View, Text } from "../components/Themed";
import { StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  setSquaresArray: (squaresArray: (string | null)[]) => void;
  setResult: (result: string) => void;
  squaresArray: (string | null)[];
  result: string;
  currentMove: string;
}

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const GameField: React.FC<Props> = ({
  setSquaresArray,
  setResult,
  squaresArray,
  currentMove,
  result,
}) => {
  useEffect(() => {
    const result = checkResult(squaresArray);
    if (result !== "unknown") {
      setResult(result);
    }
  }, [squaresArray]);

  function handleSquareClick(key: number) {
    if (squaresArray[key] || result !== "unknown") {
      return;
    }
    const updatedState = squaresArray.map((squareValue, index) => {
      if (index === key) {
        return currentMove;
      }
      return squareValue;
    });
    setSquaresArray(updatedState);
  }

  function checkResult(squaresArray: (string | null)[]): string {
    WINNING_COMBINATIONS.forEach((combination) => {
      if (
        squaresArray[combination[0]] === "x" &&
        squaresArray[combination[1]] === "x" &&
        squaresArray[combination[2]] === "x"
      ) {
        return "x wins";
      } else if (
        squaresArray[combination[0]] === "o" &&
        squaresArray[combination[1]] === "o" &&
        squaresArray[combination[2]] === "o"
      ) {
        return "o wins";
      }
      if (!squaresArray.includes(null)) {
        return "draw";
      }
    });
    return "unknown";
  }

  return (
    <View style={styles.squaresWrapper}>
      {squaresArray.map((_, index: number) => (
        <View style={styles.square} key={index}>
          <TouchableOpacity
            onPress={() => handleSquareClick(index)}
            style={styles.squareTouchable}
          >
            <Text style={styles.sqText}>{squaresArray[index]}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  squaresWrapper: {
    display: "flex",
    width: "100%",
    height: "100%",

    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  square: {
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "33%",
    height: "33%",
  },
  squareTouchable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  sqText: {
    fontSize: 100,
    fontWeight: "bold",
  },
});

export default GameField;
