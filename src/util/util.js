export const formatPlayCount = (number) => {
  let result;

  if (Math.trunc(number / 100000000) !== 0) {
    result = Math.trunc(number / 100000000) + "亿";
  } else if (Math.trunc(number / 10000) !== 0) {
    result = Math.trunc(number / 10000) + "万";
  } else {
    result = number;
  }

  return result;
};
