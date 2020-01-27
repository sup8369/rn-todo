const randomStringGenerator = len => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const timestampToDate = date => {
  var dt = new Date();
  dt.setHours(hour ? hour : dt.getHours() + 1);
  dt.setMinutes(0);
  return dt.getTime();
};

export default { randomStringGenerator, timestampToDate };
