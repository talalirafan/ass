// Question 1: Variable Declarations and Initialization
var productName = "Laptop";
var price = 999.99;
var inStock = true;

console.log(productName, price, inStock);

// Question 2: Mathematical Operations

var num1 = 8;
num1++;
console.log(num1);

var num2 = 15;
num2 -= 2;
console.log(num2);

console.log(27 % 4);

console.log(12 ** 2);


// Question 3: String Concatenation and Case Conversion

var firstName = "alex";
 var lastName = "SMITH";

var fullName = firstName + " " + lastName;



// Question 4: if-else Conditional Logic

var temperature = 25;

if (temperature > 30) {
  console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Pleasant day");
} else {
  console.log("Cold day");
}

// Question 5: Comparison Operators

console.log(15 === "15"); 

console.log(20 > 15 && 20 < 25); 

console.log(10 !== 10 || 5 > 3); 

// Question 6: Array Manipulation - Basics

var colors = ["red", "green", "blue"];

colors.push("yellow");
colors.shift();
colors.splice(1, 0, "purple");
console.log(colors);
console.log(colors.length);


// Question 7: Array Manipulation - splice()
var fruits = ["apple", "banana", "cherry", "date", "elderberry"];


fruits.splice(2, 1);


fruits.splice(2, 1, "dragonfruit");


var  middleFruits = fruits.splice(0, 3);

console.log("Remaining fruits:", fruits);
console.log("Middle fruits:", middleFruits);



// Question 8: for Loop - Number Sequence

var  sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; 
  }

  if (i === 8) {
    break; 
  }

  console.log(i);
}

// Question 9: Nested for Loop - Pattern

for (var i = 1; i <= 5; i++) {
  var row = "";

  for (var j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}

// Question 11: String Replacement

var sentence = "I love JavaScript and JavaScript is awesome";


var firstReplace = sentence.replace("JavaScript", "coding");


var allReplace = sentence.replaceAll("JavaScript", "JS");

var awesomeReplace = sentence.replace("awesome", "AWESOME");

console.log(firstReplace);
console.log(allReplace);
console.log(awesomeReplace);


// Question 13: Random Number Generation

console.log(Math.floor(Math.random() * 100) + 1);

console.log(Math.random().toFixed(3));

console.log(Math.floor(Math.random() * 26) + 50);



// Question 14: Type Conversion

var num1 = Number("123");
var num2 = parseFloat("45.67");

var str = String(789);

var  bool = Boolean("true");
console.log(typeof bool);

console.log(num1); 
console.log(num2); 
console.log(str);  


// Question 15: Date and Time Operations
var now = new Date();

var year = now.getFullYear();
var month = now.getMonth(); // 0-11
var day = now.getDate();
var hours = now.getHours();


console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);
console.log("Hours:", hours);

// Question 16: Function - Basic Calculator
var a = 10;
var b = 5;
var op = '+';
var result;

if(op === '+') result = a + b;
else if(op === '-') result = a - b;
else if(op === '*') result = a * b;
else if(op === '/') result = b === 0 ? "Error: Division by zero" : a / b;
else result = "Invalid operator";

console.log(result); 


// Question 17: Function - Local vs Global 




// Question 18: switch Statement - Day of Week

var dayNumber = 3; 
var dayName;

switch(dayNumber) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid number";
}

console.log(dayName); 


// Question 19: while Loop - Countdown


var i = 10;
while(i > 0) {
  console.log(i);
  i--;
}
console.log("Blast off!");


var n = 5;
var factorial = 1;
var j = 1;

while(j <= n) {
  factorial *= j;
  j++;
}
console.log("Factorial of 5:", factorial);


// Question 20:
var enteredPassword = "";
var attempts = 0;
var maxAttempts = 5;

do {
  attempts++;
  console.log("Attempt", attempts);

  
  if(attempts === 3) enteredPassword = "secret123"; 

} while(enteredPassword !== "secret123" && attempts < maxAttempts);

if(enteredPassword === "secret123") {
  console.log("Access granted!");
} else {
  console.log("Access denied!");
}


// Question 22: Event Handling Simulation

var username = prompt("Enter your username:");

if(username === "" || username === null) {
  alert("Please enter your username!");
} else {
  alert("Welcome, " + username + "!");
}

    // Question 23: Form Validation Function
function validateForm(email, password) {
  if(!email.includes("@")) {
    console.log("Error: Email must contain '@'");
    return false;
  }
  if(password.length < 8) {
    console.log("Error: Password must be at least 8 characters");
    return false;
  }
  console.log("Validation passed!");
  return true;
}


// Question 25: Shopping Cart Array Operations
var cart = [];


function addItem(name, price) {
  cart.push({name: name, price: price});
}


function removeItem(name) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].name === name) {
      cart.splice(i, 1);
      return;
    }
  }
}


function calculateTotal() {
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
}


function applyDiscount(percent) {
  var total = calculateTotal();
  return total * (1 - percent/100);
}

function listItems() {
  var names = [];
  for(var i = 0; i < cart.length; i++) {
    names.push(cart[i].name);
  }
  return names;
}

addItem("Apple", 50);
addItem("Banana", 30);
addItem("Orange", 20);

console.log("Cart items:", listItems());         
console.log("Total:", calculateTotal());      
console.log("Total after 10% discount:", applyDiscount(10)); 

removeItem("Banana");
console.log("Cart items after removal:", listItems()); 
