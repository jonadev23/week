
                // QUESTION 1

// Part A - Sum

var numbers = [1,2,5,98,34,12,9,6,30,100,23,7];

function totalSum(numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(totalSum(numbers));


// Part B - Average

function averageArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total / numbers.length;
}
console.log(averageArray(numbers));



                // QUESTION 2

// Part A - strings

var sentence = "Good Morning Moses Nkangi";

function countUpper(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            count++;
        }
    }  
    return count;  
}
console.log(countUpper(sentence));

// Paer B - conditions

function countLower(str){
    let count = 0;
    for (let i = 0; i <= str.length ; i++) {
        if (str[i] >= 'a' && str[i] <='z'){
            count++;
        }
    }
    return count;
}

console.log(countLower(sentence));



                // QUESTION 3

// Part A

var employees = {
    name : "Moses",
    age : 25,
    occupation : "Software Developer",
    salary : 50000
}

function getObjectKeys(obj) {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

console.log(getObjectKeys(employees));





// Part B

function getStringKeys(obj) {
  let stringKeys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "string") {
      stringKeys.push(key);
    }
  }
  return stringKeys;
}
console.log(getStringKeys(employees));





                // QUESTION 4


// Part A

function checkNumber(num) {
  var result = "";
  // Check even or odd
  if (num % 2 === 0) {
    result += "Even";
  } else {
    result += "Odd";
  }


  // Part B
  // Check divisibility by 5
  if (num % 5 === 0) {
    result += " and divisible by 5";
  } else {
    result += " and not divisible by 5";
  }

  return result;
}

console.log(checkNumber(10)); 
console.log(checkNumber(3));  
console.log(checkNumber(15)); 


                // QUESTION 5


// Part A

let numbersQn5 =[2,4,3,11,12,20,14,9,0];

function doubleAllValues(arr) {
  let doubled = [];
  for (let i = 0; i < arr.length; i++) {
    doubled.push(arr[i] * 2);
  }
  return doubled;
}

console.log(doubleAllValues(numbersQn5));

// Part B

function doubleEvenValues(arr) {
  let doubled = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      doubled.push(arr[i] * 2);
    } else {
      doubled.push(arr[i]); 
    }
  }
  return doubled;
}

console.log(doubleEvenValues(numbersQn5));


                // QUESTION 6


// Part A

var numbersQn6 = [1, 2, 0, 10, -1, -4, -12];

function checkNumberSigns(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > 0) {
      results.push("Positive");
    } else if (num < 0) {
      results.push("Negative");
    } else {
      results.push("Zero");
    }
  }

  return results;
}

console.log(checkNumberSigns(numbersQn6));


// Part B

function checkNumberWithObject(arr){
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let result = {};
        if (num > 0) {
            result = "Positive";
            } else if (num = 0) {
                result = "Zero";
            } else 
                result = "Negative";
            
            results.push({number : num, result : result});
        
    }
return results;
}

console.log(checkNumberWithObject(numbersQn6));


