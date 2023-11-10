export default function convertSeconds(time) {
  let mins = Math.floor(time / 60);
  if (mins < 10) mins = "0" + mins;
  let secs = time % 60;
  if (secs < 10) secs = "0" + secs;

  return [mins, secs];
}
