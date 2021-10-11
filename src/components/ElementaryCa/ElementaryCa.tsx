import React from "react";
import { IElementaryCa } from "./data";
import { View, Text } from "react-native";
import { useStyles } from "./styles";

const ElementaryCa = ({ value }: IElementaryCa): React.ReactElement => {
  const styles = useStyles(value);
  return (
    <View style={styles.container}>
      <Text>A</Text>
    </View>
  );
};

export default ElementaryCa;
