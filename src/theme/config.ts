import { defaultTheme as _defaultTheme } from "@backpacker/primitives";
import { IS_LARGE_DEVICE, IS_SMALL_DEVICE } from "../utils/metrics";

const defaultTheme = {
  ..._defaultTheme,

  textVariants: {
    largeTitle: {
      fontSize: IS_SMALL_DEVICE ? 30 : IS_LARGE_DEVICE ? 35 : 34,
    },
    title1: {
      fontSize: IS_SMALL_DEVICE ? 26 : IS_LARGE_DEVICE ? 29 : 28,
    },
    title2: {
      fontSize: IS_SMALL_DEVICE ? 22 : IS_LARGE_DEVICE ? 25 : 24,
    },
    title3: {
      fontSize: IS_SMALL_DEVICE ? 18 : IS_LARGE_DEVICE ? 21 : 20,
    },
    headline: {
      fontSize: IS_SMALL_DEVICE ? 16 : IS_LARGE_DEVICE ? 19 : 18,
    },
    body: {
      fontSize: IS_SMALL_DEVICE ? 13 : IS_LARGE_DEVICE ? 15 : 14,
    },
    callout: {
      fontSize: IS_SMALL_DEVICE ? 12 : IS_LARGE_DEVICE ? 14 : 13,
    },
    subhead: {
      fontSize: IS_SMALL_DEVICE ? 11 : IS_LARGE_DEVICE ? 13 : 12,
    },
    footnote: {
      fontSize: IS_SMALL_DEVICE ? 8 : IS_LARGE_DEVICE ? 11 : 10,
    },
    caption1: {
      fontSize: IS_SMALL_DEVICE ? 8 : IS_LARGE_DEVICE ? 10 : 9,
    },
    caption2: {
      fontSize: IS_SMALL_DEVICE ? 7 : IS_LARGE_DEVICE ? 9 : 8,
    },
  },

  // Spacer
  spacerUnit: IS_SMALL_DEVICE ? 8 : 10,
  defaultSpacerSize: 1,

  // Colors
  colors: {
    // background:''
    text: "#FFF",
    background: "#D7D9D7",
    item1: "#C9C5CB",
    item2: "#BAACBD",
    item3: "#B48EAE",
    item4: "#646E68",

    black: "#000",
    white: "#FFF",
  },
};

const darkTheme = {
  ...defaultTheme,
};

const config = {
  activeTheme: "default",
  default: defaultTheme,
  dark: darkTheme,
};

export default config;
