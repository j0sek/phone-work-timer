import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    borderWidth: 10,
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  mainview: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    gap: 10,
  },
  totalTimeDisplay: {
    fontSize: 22,
  },
});

export default styles;
