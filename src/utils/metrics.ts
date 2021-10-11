import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const IPHONE_6_SCREEN_WIDTH = 375;

export const IS_SMALL_DEVICE = SCREEN_WIDTH < IPHONE_6_SCREEN_WIDTH;
export const IS_MEDIUM_DEVICE = SCREEN_WIDTH <= IPHONE_6_SCREEN_WIDTH;
export const IS_LARGE_DEVICE = SCREEN_WIDTH > IPHONE_6_SCREEN_WIDTH;

export const IS_LARGE_HEIGHT_DEVICE = SCREEN_HEIGHT >= 710;
