
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





// Part B
