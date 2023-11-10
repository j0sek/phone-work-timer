import React, { useState, useEffect, useRef } from "react";
import styles from "./styles";
import {
  Keyboard,
  View,
  Alert,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import convertSeconds from "./convertSeconds";
import TimerCircle from "./TimerCircle";
import TimerButton from "./TimerButton";
import TimerTextInput from "./TimerTextInput";
import TimerTextDisplay from "./TimerTextDisplay";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

const runTimer = "background-fetch";

export default function Timer() {
  const intervalHolder = useRef();
  const [timeInputHidden, setTimeInputHidden] = useState(false);
  const [goalTime, setGoalTime] = useState(null);
  const [goalSeconds, setGoalSeconds] = useState(0);
  const [percent, setPercent] = useState(283);
  const [started, setStarted] = useState(false);
  const [totalTimeDisplay, setTotalTimeDisplay] = useState("");
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem("time").then((x) => {
      const [mins, secs] = convertSeconds(Number(x));
      setTotalTimeDisplay(`${mins} : ${secs}`);
    });
  }, [started]);

  function onStart() {
    if (started) return;

    let now = new Date();

    let newGoalTime = new Date(now.getTime() + remainingTime * 1000 + 1000);

    setGoalTime(newGoalTime);

    setStarted(true);
    setTimeInputHidden(true);

    intervalHolder.current = setInterval(() => {
      let now = new Date();

      let diff = Math.floor((newGoalTime - now) / 1000);

      let currentPercent = 1 - diff / goalSeconds;

      setPercent((percent) => 283 - 283 * currentPercent);

      setRemainingTime((x) => diff);

      if (diff == 0) {
        clearInterval(intervalHolder.current);
        let newTotalTime;
        AsyncStorage.getItem("time").then((x) => {
          if (x === null) x = "0";
          newTotalTime = Number(x) + Number(goalSeconds);
          AsyncStorage.setItem("time", `${newTotalTime}`);
          onReset();
        });
      }

      // current2 += 1;

      // setCurrent(current2);

      // setPercent((percent) => percent - 283 / time);

      // setTimeInputHidden(true);

      // setStarted(true);

      // if (current2 == time) {
      //   clearInterval(intervalHolder.current);
      //   let newTotalTime;
      //   AsyncStorage.getItem("time").then((x) => {
      //     if (x === null) x = "0";
      //     newTotalTime = Number(x) + Number(time);
      //     AsyncStorage.setItem("time", `${newTotalTime}`);
      //     onReset();
      //   });
      // }
    }, 1000);
  }

  function onStop() {
    clearInterval(intervalHolder.current);
    setStarted(false);
  }

  function onReset() {
    setTimeInputHidden(false);
    setStarted(false);
    clearInterval(intervalHolder.current);
    setRemainingTime(goalSeconds);
    setPercent(283);
  }

  function onClear() {
    AsyncStorage.setItem("time", "0").then(() => {
      onReset();
      setStarted("true");
      setStarted("false");
    });
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      accessible={false}
      style={styles.overlay}
    >
      <View style={styles.mainview}>
        <Text style={styles.totalTimeDisplay}>{totalTimeDisplay}</Text>
        {/* <Text>{`${convertSeconds(totalTime)[0]}:${
          convertSeconds(totalTime)[1]
        }`}</Text> */}
        {/* <Text>{`${totalMins}:${totalSecs}:${timeUpdated}`}</Text> */}

        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TimerCircle percent={percent} />
          <TimerTextInput
            onTimeInput={(x) => {
              setGoalSeconds(x);
              setRemainingTime(x);
            }}
            visible={timeInputHidden}
          />
          <TimerTextDisplay time={remainingTime} visible={timeInputHidden} />
        </View>
        <TimerButton
          onStart={onStart}
          onStop={onStop}
          onReset={onReset}
          onClear={onClear}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
