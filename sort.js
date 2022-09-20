let sortNumber = function (number) {
  number.sort(function (a,b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1
  });
};

let number = [19,3,56,1,22,09];
sortNumber(number);
console.log(number);