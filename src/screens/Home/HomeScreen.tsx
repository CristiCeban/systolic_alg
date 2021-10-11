import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useStyles } from "./styles";
import { Spacer } from "@backpacker/primitives";
import { useTheme } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = (): React.ReactElement => {
  const styles = useStyles();
  const { theme } = useTheme();
  const navigation = useNavigation();
  const onPressElementaryCa = () =>
    navigation.navigate({ name: "ElementaryCa" });
  const onPressGameOfLife = () => navigation.navigate({ name: "GameOfLife" });
  return (
    <SafeAreaView style={styles.container}>
      <Spacer height={theme.spacerUnit} />
      <TouchableOpacity style={styles.button} onPress={onPressElementaryCa}>
        <Text style={styles.text}>Elementary Ca</Text>
      </TouchableOpacity>
      <Spacer height={theme.spacerUnit} />
      <TouchableOpacity style={styles.button} onPress={onPressGameOfLife}>
        <Text style={styles.text}>Game of Live</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
