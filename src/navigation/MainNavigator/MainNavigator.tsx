//absolute import
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Types import
import { NavigationTypes } from "../NavigationTypes";
//Screens Import
import HomeScreen from "../../screens/Home";
import ElementaryCaScreen from "../../screens/ElementaryCa";
import GameOfLive from "../../screens/GameOfLife";

const MainStack = createNativeStackNavigator<NavigationTypes>();

const MainNavigator = (): React.ReactElement => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={"Home"} component={HomeScreen} />
      <MainStack.Screen name={"ElementaryCa"} component={ElementaryCaScreen} />
      <MainStack.Screen name={"GameOfLife"} component={GameOfLive} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
