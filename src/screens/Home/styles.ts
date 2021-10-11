import { useTheme } from "../../theme";
import { StyleSheet } from "react-native";

export const useStyles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 150,
      backgroundColor: theme.colors.item2,
      borderRadius: 10,
    },
    text: {
      color: theme.colors.black,
      textTransform: "uppercase",
    },
  });
};
