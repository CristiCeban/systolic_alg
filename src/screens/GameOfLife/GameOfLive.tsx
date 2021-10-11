import React, { useCallback, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import produce from "immer";
import { useStyles } from "./styles";
import { Spacer } from "@backpacker/primitives";
import { useTheme } from "../../theme";

const numRows = 46;
const numCols = 26;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const REFRESH_RATE = 100;

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }

  return rows;
};

const GameOfLive = (): React.ReactElement => {
  const [grid, setGrid] = useState<Array<Array<number>>>(() =>
    generateEmptyGrid()
  );
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const pressRandom = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.8 ? 1 : 0))
      );
    }
    setGrid(rows);
  };

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((prev) => {
      return produce(prev, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += prev[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (prev[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, REFRESH_RATE);
  }, []);

  const onPressStart = () => {
    setRunning((prev) => !prev);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  };

  const onClickClear = () => {
    setGrid(() => generateEmptyGrid());
  };

  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={onPressStart}>
          <Text>{running ? "stop" : "start"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={pressRandom}>
          <Text>random</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onClickClear}>
          <Text>clear</Text>
        </TouchableOpacity>
      </View>

      <Spacer height={10} />
      <View style={styles.gridContainer}>
        {grid.map((rows, i) => (
          <View key={i.toString()} style={styles.row}>
            {rows.map((col, k) => (
              <TouchableOpacity
                key={`${i}-${k}`}
                style={{
                  ...styles.cell,
                  backgroundColor: grid[i][k]
                    ? theme.colors.item3
                    : theme.colors.item4,
                }}
                onPress={() => {
                  const newGrid = produce(grid, (gridCopy) => {
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;
                  });
                  setGrid(newGrid);
                }}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default GameOfLive;
