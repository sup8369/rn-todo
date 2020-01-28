const randomStringGenerator = len => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const dateToTimestamp = timestamp => {
  var date = new Date(timestamp);
  return date.getTime();
};

const timestampToUsable = timestamp => {
  const date = new Date(timestamp);
  const dayMonth = date.toDateString().split(" ");
  const ampm = date.getHours() >= 12 ? "pm" : "am";
  const minute = date.getMinutes();
  const dateString = `${dayMonth[1]} ${dayMonth[2]} ${date.getHours() % 12 ||
    12}:${minute < 10 ? "0" : ""}${minute}${ampm}`;
  return dateString;
};

const getGreetMessage = () => {
  const time = new Date().getHours();

  let greeting = "";
  if (time < 5) {
    greeting = "Evening";
  } else if (time < 12) {
    greeting = "Morning";
  } else if (time < 17) {
    greeting = "Afternoon";
  } else {
    greeting = "Evening";
  }
  return greeting;
};
export default {
  randomStringGenerator,
  dateToTimestamp,
  timestampToUsable,
  getGreetMessage
};
