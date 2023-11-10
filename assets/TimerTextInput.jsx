import { useState } from "react";
import {
  Keyboard,
  Alert,
  View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";

export default function TimerTextInput({ onTimeInput, visible }) {
  // const [minuteLength, setMinutesLength] = useState(0);
  // const [secondLength, setSecondsLength] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <View
      style={{
        ...styles.container,
        display: visible ? "none" : "flex",
      }}
    >
      <View
        style={{
          ...styles.timeInputHolder,
          display: visible ? "none" : "flex",
        }}
      >
        <TextInput
          style={{
            backgroundColor: "rgba(230, 230, 230, 0.8)",
            fontSize: 40,
          }}
          inputMode="numeric"
          placeholder="00"
          onChangeText={(x) => {
            // setMinuteLength(x.length);
            // mins = x;
            setMinutes(Number(x));
            // setTimeLocal(mins, secs);
          }}
        ></TextInput>
        <Text style={styles.timeColon}>:</Text>
        <TextInput
          style={{
            backgroundColor: "rgba(230, 230, 230, 0.8)",
            fontSize: 40,
          }}
          inputMode="numeric"
          placeholder="00"
          onChangeText={(x) => {
            // setSecondLength = x.length;
            // secs = x;
            setSeconds(Number(x));
            // setTimeLocal(mins, secs);
          }}
        ></TextInput>
      </View>
      <TouchableHighlight
        style={styles.setTimeButton}
        onPress={() => {
          let goalSeconds = minutes * 60 + seconds;
          onTimeInput(goalSeconds);
          // Alert.alert(`${minutes}: ${seconds}`);
          Keyboard.dismiss();
        }}
      >
        <Text style={styles.setTimeButtonText}>SET TIME</Text>
        {/* <Button title="SET TIME"></Button> */}
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
  timeInputHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  timeColon: {
    fontSize: 34,
  },
  setTimeButton: {
    width: 150,
    height: 50,
    textAlign: "center",
  },
  setTimeButtonText: {
    fontSize: 30,
    textAlign: "center",
  },
});
