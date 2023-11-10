import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import convertSeconds from "./convertSeconds";

export default function TimerTextDisplay({ time, visible }) {
  const [mins, secs] = convertSeconds(time);

  return (
    <View
      style={{
        ...styles.timeDisplayHolder,
        display: visible ? "flex" : "none",
      }}
    >
      <Text style={styles.timeDisplayText}>{`${mins} : ${secs}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timeDisplayHolder: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
  },
  timeDisplayText: {
    fontSize: 34,
  },
});
// function TimerTextInput(setTime) {
//   let prevLength = 0;
//   return (
//     <View>
//       <TextInput
//         style={{
//           backgroundColor: "rgba(230, 230, 230, 0.8)",
//           fontSize: 40,
//         }}
//         inputMode="numeric"
//         placeholder="00:00"
//         onChangeText={(x) => {
//           if (length(x) === 2 && prevLength(x) === 1) {
//           }

//           if (length(x) === 5) {
//             const minutes = Number(x.slice(0, 2));
//             const seconds = Number(x.slice(3, 5));
//             setTime(minutes * 60 + seconds);
//           }

//           prevLength = length(x);
//         }}
//       ></TextInput>
//     </View>
//   );
// }
