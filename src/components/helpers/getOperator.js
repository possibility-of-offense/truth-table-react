export const getOperator = function (str) {
  const splitStr = str.split(" ");
  let res = "";

  for (let val of splitStr) {
    if (val === "^") {
      res = "^";
    } else if (val === "v") {
      res = "v";
    } else if (val === "<=>") {
      res = "<=>";
    }
  }

  return res;
};
