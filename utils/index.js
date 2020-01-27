const randomStringGenerator = len => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const timestampToDate = date => {
  var date = new Date(date);
  return date.getTime();
};

export default { randomStringGenerator, timestampToDate };
