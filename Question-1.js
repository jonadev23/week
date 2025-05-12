
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


                    // QUESTION 7 - DATES
                    
                    
// Part A

function getCurrentDate() {
  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth() + 1; 
  var day = today.getDate();

  return "The date today is " + year + "-" + month + "-" + day;
}

console.log(getCurrentDate());


// Part B

function getCurrentDateTime() {
  var now = new Date();

  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  return "The date today is " + year + "-" + month + "-" + day + " and the time is " + hours + ":" + minutes + ":" + seconds;
}

console.log(getCurrentDateTime());



                    // QUESTION 8
                    
                    
// Part A


var testArray = [3, -2, 5, -7, 0, 8];


function removeNegatives(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result.push(arr[i]);
    }
  }

  return result;
}


console.log(removeNegatives(testArray));

// Part B


function cleanArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item != null && item >= 0) {
      result.push(item);
    }
  }

  return result;
}

var testArray2 = [3, -2, null, 5, undefined,"Jonathan", -7, 0, 8, "Moses"];
console.log(cleanArray(testArray2)); 



                    // QUESTION 9

// Part A

function capitalizeWords(str) {
  var words = str.split(" ");
  var result = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(capitalized);
  }

  return result.join(" ");
}

console.log(capitalizeWords("i am learning javascript"));



// Part B

function reverseCapitalization(str) {
  var words = str.split(" ");
  var result = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var modified = word.charAt(0).toLowerCase() + word.slice(1).toUpperCase();
    result.push(modified);
  }

  return result.join(" ");
}

console.log(reverseCapitalization("i am learning javascript"));



                    // QUESTION 10


// Part A

function showMessage() {
  var message = "Hello Moses 😎";
  console.log(message);
}

showMessage(); 

// Part B

function showMessage() {
  var message = "Hello Nkangi ✅✨!";
  console.log(message);
}

showMessage();

console.log(message); 

// Why the last console.log(message) is not working?
// Variables declared with var, let, or const inside a function only exist inside that function.
// That’s called local scope. The variable message is invisible outside the function — like it doesn’t exist.

// To make it work, we need to declare the variable outside the function, so it has global