import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainNavigator from "./MainNavigator/MainNavigator";

const Navigator = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
