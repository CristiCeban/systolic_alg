import { useTheme } from "../../theme";
import { StyleSheet } from "react-native";

export const useStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      display: "flex",
      flex: 1,
      alignItems: "center",
      paddingHorizontal: theme.spacerUnit * 2,
      paddingTop: theme.spacerUnit,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
    },
    textInput: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.item2,
      width: "50%",
    },
    generationContainer: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    cellActive: {
      height: 10,
      width: 10,
      backgroundColor: theme.colors.item4,
    },
    cellInactive: {
      height: 10,
      width: 10,
      backgroundColor: "transparent",
    },
    rowCenter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  });
};
