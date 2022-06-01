export const checkResult = function (predicates, operator) {
  let res;

  const [firstOperand, secondOperand] = predicates;

  if (operator === "v") {
    switch (firstOperand) {
      case "T":
        if (secondOperand === "T") {
          res = true;
          break;
        } else if (secondOperand === "F") {
          res = true;
          break;
        }
      case "F":
        if (secondOperand === "T") {
          res = true;
          break;
        } else if (secondOperand === "F") {
          res = false;
          break;
        }
    }
  } else if (operator === "^") {
    switch (firstOperand) {
      case "T":
        if (secondOperand === "T") {
          res = true;
          break;
        } else if (secondOperand === "F") {
          res = false;
          break;
        }
      case "F":
        if (secondOperand === "T") {
          res = false;
          break;
        } else if (secondOperand === "F") {
          res = false;
          break;
        }
    }
  } else if (operator === "<=>") {
    switch (firstOperand) {
      case "T":
        if (secondOperand === "T") {
          res = true;
          break;
        } else if (secondOperand === "F") {
          res = false;
          break;
        }
      case "F":
        if (secondOperand === "T") {
          res = false;
          break;
        } else if (secondOperand === "F") {
          res = true;
          break;
        }
    }
  }

  return res;
};
