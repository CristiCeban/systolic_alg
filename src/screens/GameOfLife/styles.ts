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
      paddingTop: theme.spacerUnit,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 70,
      backgroundColor: theme.colors.item2,
      borderRadius: 10,
    },
    gridContainer: {
      display: "flex",
      flex: 1,
    },
    cell: {
      width: 15,
      height: 15,
      backgroundColor: "transparent",
      borderColor: "#3e3a3a",
      borderWidth: 1,
    },
  });
};
