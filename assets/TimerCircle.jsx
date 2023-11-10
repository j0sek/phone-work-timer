import { View, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function TimerCircle({ percent }) {
  return (
    <Svg height="350px" width="350px" viewBox="0 0 100 100" style={styles.svg}>
      <Circle
        rotation="270"
        cx="-50"
        cy="50"
        r="45"
        stroke="rgb(50, 230, 100)"
        strokeWidth="8"
        fill="rgba(240, 240, 240, 0.7)"
        strokeDasharray={283}
        strokeDashoffset={percent}
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  svg: {
    display: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
