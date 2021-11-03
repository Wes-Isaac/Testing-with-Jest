class Calculator {
  add = (a, b) => a + b
  subtract = (a, b) => a - b
  divide = (a, b) => {
    if (b !== 0 ){
     return a / b
    }
    else {
      throw new Error ("dividing by 0 not allowed")
    }
  };
  multiply = (a, b) => a*b
}

module.exports = new Calculator();
