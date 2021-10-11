import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useStyles } from "./styles";
import { Spacer } from "@backpacker/primitives";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import { useTheme } from "../../theme";
import Logger from "../../services/logger";
import { useInterval } from "../../hooks/timer";
import { useCA } from "../../hooks/useCA";

const REFRESH_RATE = 500;

const ElementaryCaScreen = (): React.ReactElement => {
  const [ruleset, setRuleset] = useState<string>("30");
  const { generations, step, currentStep, restart } = useCA(
    150,
    300,
    Number(ruleset)
  );
  const styles = useStyles();
  const { theme } = useTheme();
  const clb = () => step();
  useInterval(clb, REFRESH_RATE);

  const _generations = generations?.map((generation, i) => {
    const genIndex = currentStep - generations.length + i;

    const cells = generation?.map((value, i) => (
      <View
        key={i.toString()}
        style={value ? styles.cellActive : styles.cellInactive}
      />
    ));

    return (
      <View style={styles.rowCenter} key={genIndex}>
        {cells}
      </View>
    );
  });

  const onChangeRuleset = (ruleset: string) => {
    try {
      const numRuleset = Number(ruleset);
      restart();
      if (numRuleset < 0) {
        setRuleset("0");
        return;
      }
      if (numRuleset > 255) {
        setRuleset("255");
        return;
      }
      setRuleset(ruleset);
    } catch (e) {
      Logger.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={"Enter Ruleset"}
        keyboardType={"numeric"}
        value={ruleset}
        onChangeText={onChangeRuleset}
      />
      <Spacer height={theme.spacerUnit} />
      <View style={styles.row}>
        <Text>{`ruleset ${ruleset}`}</Text>
        <Text>{`generation ${currentStep}`}</Text>
      </View>

      <Spacer height={theme.spacerUnit * 2} />

      <ReactNativeZoomableView>
        <View style={styles.generationContainer}>{_generations}</View>
      </ReactNativeZoomableView>
    </View>
  );
};

export default ElementaryCaScreen;
