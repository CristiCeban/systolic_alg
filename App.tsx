import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ConfigProvider } from "@backpacker/primitives";

import { themeConfig } from "./src/theme";
import Navigator from "./src/navigation/Navigator";

const App = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-ignore*/}
      <ConfigProvider config={themeConfig}>
        <View style={styles.container}>
          <Navigator />
          <StatusBar style="auto" />
        </View>
      </ConfigProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
