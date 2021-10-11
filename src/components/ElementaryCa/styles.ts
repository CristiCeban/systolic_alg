import { useTheme } from "../../theme";
import { StyleSheet } from "react-native";

export const useStyles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    container: {
      width: theme.spacerUnit,
      height: theme.spacerUnit,
    },
  });
};
