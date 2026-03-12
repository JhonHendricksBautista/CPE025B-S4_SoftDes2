function sumDeepStrictNumbers(arr) {
  let sum = 0;

  arr.forEach((element) => { 
    if (typeof element === "number" && !isNaN(element)) { // if valid it adds
      sum += element;
    } else if (Array.isArray(element)) { // if not recurse
      sum += sumDeepStrictNumbers(element);
    }
  });
  return sum;
}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1)); 