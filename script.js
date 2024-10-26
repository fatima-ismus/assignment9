//Practice 1
let empty1;
console.log(empty1);
let empty2 = null;
console.log(empty2);

// Practice 2
function add_three_numbers(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(add_three_numbers(1, 2, 3));

// Practice 3
x = 0;
x += 10;
x *= 20;
console.log(x);

//Practice 4
let today_day = 30;
less_day = console.log(today_day > 25);

// Practice 5
isPublicHoliday = false;
isWeekDay = true;
if (isPublicHoliday || isWeekDay) {
  weather = console.log("Its public holiday or week day");
} else if (isPublicHoliday && isWeekDay) {
  weather = console.log("Its not public holiday or weekday");
} else console.log("None");


// Practice 6
let nick_name = "Ismus";
let count = 40;
console.log(nick_name);
console.log(count);

// Practice 7
function greet(name, day) {
    console.log(`Good ${day}, ${name}`);
  }
  greet("Fatima", "Saturday");

//  Practice 8
x = 6;
y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);



//Practice 9
let best_meal = "Tuwo";
let message = nick_name.concat(" loves ", best_meal);
console.log(message);





// Practice 10

/* This code add three numbers
I will take num1, num2 and num3 as the arguments
I will return the funtion with the arguments and addition signs
And then print the result */

// Creating the function and passing the arguments

function add_three_numbers(num1, num2, num3) {
    return num1 + num2 + num3;
  }

  // Printing the result with the values of the argument
  console.log(add_three_numbers(1, 2, 3));

