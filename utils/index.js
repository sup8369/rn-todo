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
  const targetDate = new Date(timestamp);
  const currentDate = new Date();
  const diffMs = targetDate.getTime() - currentDate.getTime();
  let H = Math.floor((diffMs % 86400000) / 3600000);
  if (H < 0) H++;
  const M = Math.round(((diffMs % 86400000) % 3600000) / 60000);

  //diff = Math.ceil(diff / (1000 * 3600));

  return `${H}시간 ${Math.abs(M)}분 ${
    H < 0 ? "지남" : M < 0 ? "지남" : "남음"
  }.`;
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
