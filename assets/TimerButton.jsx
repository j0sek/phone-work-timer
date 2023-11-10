import { View, Button, StyleSheet, Alert } from "react-native";

export default function TimerButton({ onStart, onStop, onReset, onClear }) {
  return (
    <View style={styles.buttonholder}>
      <Button
        onPress={() => {
          onStart();
          // changeStarted(true);
          // intervalHolder.current = setInterval(() => {
          //   current2 += 1;
          //   setCurrent(current2);
          //   // setCurrent((current) => current + 1);
          //   setPercent((percent) => percent - 283 / time);
          //   if (current2 === time) {
          //     clearInterval(intervalHolder.current);
          //     let newTotalTime;
          //     AsyncStorage.getItem("time").then((x) => {
          //       newTotalTime = Number(x) + Number(time);
          //       setTotalTime(newTotalTime);
          //       AsyncStorage.setItem("time", `${newTotalTime}`);
          //       Alert.alert(`${newTotalTime}`);
          //       setCurrent(0);
          //     });
          //   }
          // }, 1000);
        }}
        title="Start"
      />
      <Button
        title="Stop"
        onPress={() => {
          onStop();
          //changeStarted(false);
          // Alert.alert(`${current2}`);
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          onReset();
          // changeStarted(false);
          // clearInterval(intervalHolder.current);
          // setCurrent(0);
          // setPercent(283);
        }}
      />
      <Button
        title="Clear"
        onPress={() => {
          onClear();
          // changeStarted(false);
          // clearInterval(intervalHolder.current);
          // setCurrent(0);
          // setPercent(283);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonholder: {
    display: "flex",
    flexDirection: "row",
  },
});
