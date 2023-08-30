// Chapter 21 (Changing Case)
// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Answer: var allLower = userInput.toLowerCase();
// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.
// Answer: 
// var x = x.toLowerCase();
// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.
// Answer: 
// var y = y.toUperCase();
// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.
// Answer: 
// var a = "asdf"
// var b = a.toLowerCase()
// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.
// var a = ["asdf"]
// var b = a.toLowerCase()
// 6. Display in an alert the upper-case version of the string
// represented by a variable.
// var a = alert();
// var b = a.toUperCase();
// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.
// var cityName = "kaRacHi";
// var city= cityName[0].toUpperCase() ;
// var last = cityName.slice(1).toLowerCase();
// var plus = city + last
// console.log(plus)

// Chapter 22 - 25 (Strings)
// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.
// var sameWords = "captain"
// var cpt = sameWords.slice(1,3);
// console.log(cpt)
// 2. The number of characters in the string will be assigned to the
// variable.
// var a = "asdf";
// var b = a.length;
// console.log(b)
// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.
// var animal = "elephant"
// var seg = animal.slice(2,6);
// console.log(seg)
// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.
// var x = "asdfjkl"
// var y = x.length;
// console.log(y)
// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.
// var first = "asddfjkl";
// var total = first.length
// console.log(total)
// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
// ANS:
//  var text = "To be or not to be.";
// var indx = text.indexOf("be");
// value of indx is 3;

// //7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself.
// ANS:

//  var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// value of indx is 16;
// 8. Find the index of the first character of the last instance of "go" inthe string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.
// ANS:
//  var text = "To be go or not to the to why go.";
// var indx = text.lastIndexOf("go");
// value of indx is 30;

// 9. Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.
// ANS:
// if(indexNum[index])
//10. In this string "abcde", what character is at index 2? (Use charAt)
// ANS:
// var a = "abcde"
// var b = a.charAt(2)
// 11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.
// ANS:
// var text = "ahgsdjl sdjkdhkjhds jsdjsdkhkjsd";
// var cha = text.charAt(9) // answer is K

// 12. Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.
// ANS:
// var str = "akbakjsbdkjsdsb";
// var x = str.charAt(str.length - 1)

//13. Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.
// ANS:
// var input = "the quick ";
// var cha = input.charAt(4)

//14. Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.
// ANS:
// var str = "the quick "
// if(str.charAt(2) === "e")

// 15. Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.
// ANS:
// var str = "karachi";
// var arr = [];
// for(i=0; i<str.length; i++){
//     arr[i] = str[i]
// }

// part 2
// var reply = "no you no to no"
// var revisedReply = reply.replace("no","yes")

// 16. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.
// ANS:
// var str = "1 shoud not do this";
// newStr = str.replace("1","one")

// 17. If you want all instances replaced, enter 3 characters that need to appear in this statement.
// var x = "a b c d a e f a g a h a"
// var y = x.replaceAll("a", "z");

// }

// ==================>     Chapter 26 (Rounding Numbers) <====================
// {

//1. Form a statement that rounds a number to the nearest integer.
// ANS:
// var a = 2.3;
// var b = Math.round(a)
//2. Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
// ANS:
// var origNum = 3.56;
// var roundNum = Math.ceil(origNum)
// 3. Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
// ANS:
// var origNum = 3.56;
// var roundNum = Math.floor(origNum)

//4. Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.
// ANS:
// var a = 2.3;
// var b = Math.round(a)
// 5. Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.
// ANS:
// var a= 0.5;
// var b = Math.floor(a)

// }

// ==================>     Chapter 27 (Random Numbers) <====================
// {

// 1. Convert a random number generated by JavaScript to a number in the range 1 to 50
// ANS:
// var a = Math.random() * 50;
// var b = Math.floor(a)
// 2. Generate a random number and assign it to a variable that hasn't been declared beforehand.
// ANS:
// var a = Math.random();
// 3. You have to create a dice in JavaScript with the use of pseudo- random number.
// ANS:
// var toss = Math.random() * 7;
// var a = Math.floor(toss);

// 4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.
// var toss = Math.random() * 2;
// var a = Math.floor(toss);
// if(a === 1){
    //     console.log("head won ")
    // }else{
        
        //     console.log("tail won ")
        // }
        
    // }

    // ==================>     Chapter 28, 29 (Converting Strings) <====================

// {
    
    // 1. How do you convert a string to an integer in JavaScript?
    // ANS:
    // var a = +"123"
    // var b = parseInt(a)
    // 2. Write a JavaScript function to convert the string "123" to an integer.
    // ANS:
    // var a = "123";
    // function convert(){
    //     var b = parseInt(a);
    //        console.log(b)
    // }

    // 3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?
    // ANS:
    // var a = "23.65";
    // var b = parseFloat(a)
    // 4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?
    // ANS:
    // var a = +"123";
    // var b = typeof a
    // 5. How can you convert a number to a string in JavaScript?
    // ANS:
    // var a = 1253;
    // var b = a.toString();
    // 6. Write a JavaScript function to convert the number 42 to a string.
    // ANS:
    // var a = "123";
    // function convert(){
    //     var b = a.toString();
    //     console.log(b)
    // }
    // convert()
    // 7. Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?
    // ANS:
     // var a = "3.14";
    // var b = parseFloat(a)
// }

    // ==================>     Chapter 30 (Controlling the length of decimals) <====================
// {

   // 1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.
   // ANS:
// var num = Math.random().toFixed(4);
// var newNum = num.toString()
// 2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.
// ANS:
// var a = Math.random().toFixed(2).toString();
// a = parseInt(a)
//3. Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.
// ANS:
// var num = 23.45687512.toFixed(2).toString();
// if(num.length === 4)
//4. Assign a number with many decimal places to a variable. Code an alert that displays the number rounded to 2 decimal places and converted to a string.
// ANS:
// var num = 23.45687512.toFixed(2).toString();
// alert(num)

// }

    // ==================>     Chapter 31 - 34 (Date & Time) <====================

    // {
        // 1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
        // ANS:
        // var dObj = new Date();
        // 2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
        // ANS:
        // var dObj = new Date();
        // var dStr = dObj.toString()
        // 3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.
        // ANS:
        // var dayOfWeek = ["sunday","monday","tuesday", "wednesday","thursday","friday","saturday"]
        // var dObj = new Date();
        // var d = dObj.getDay();
        // for(i=0;i<dayOfWeek.length; i++){
        //        if(d === i) {
        //                d = dayOfWeek[i]
        //                break
        //             }
        //         }
        // 4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.
        // ANS:
        // var dayOfWeek = ["sunday","monday","tuesday", "wednesday","thursday","friday","saturday"]
        // var dObj = new Date();
        // var d = dObj.getDay();
        // for(i=0;i<dayOfWeek.length; i++){
        //        if(d === i) {
        //                d = dayOfWeek[i]
        //                break
        //             }
        //         }
        // alert(d)
        // 5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
        // ANS:
        // var dObj = new Date();
        // var year = dObj.getFullYear();
        // var month = dObj.getMonth()
        // var date = dObj.getDate()
        // var days = dObj.getDay();
        // var hour = dObj.getHours();
        // var minutes = dObj.getMinutes();
        // var second = dObj.getSeconds;
        // 6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.
        // ANS:
        // 7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.
        // ANS:
        // var later = new Date(1992,1,2)

        // 8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.

// 9. How do you change the year of a date in JavaScript?
// ANS:
// var dObj = new Date();
// dObj.setFullYear(2000)
// 10. Write a JavaScript function to change the month of a given date to January.
// ANS:
// var dObj = new Date();
// dObj.setMonth(0)

// 11. What is the method to change the day of the week for a specific date in JavaScript?
// ANS:
// var dObj = new Date();
// dObj.setDate(6);

// 12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)
// AnS:
// var minutes = prompt("enter minutes")
// var dObj = new Date();
// dObj.setMinutes(minutes)
// 13. Write a JavaScript function to add a specific number of hours to a given time.
// ANS:
// var hour = prompt("enter hour")
// var dObj = new Date();
// dObj.setHour(hour)

// 14. You have to create a age calculator in JavaScript.
// ANS:
// var dob = new Date("10/10/1997");

// var d1 = dob.getDate();
// var m1 = 1 + dob.getMonth();
// var y1 = dob.getFullYear();

// var date = new Date();
//   var d2 = date.getDate();
//   var m2 = 1 + date.getMonth();
//   var y2 = date.getFullYear();
//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
//   if(d1 > d2){
//     d2 = d2 + month[m2 - 1];
//     m2 = m2 - 1
//   }
//   if(m1 > m2){
//     m2 = m2 + 12;
//     y2 = y2 - 1
//   }

//   var d = d2 - d1;
//   var m = m2 - m1;
//   var y = y2 - y1;

// alert("your age is "+ y + " years "+ m +" months "+ d + " days")

    // }

        // ==================>     Chapter 35 - 37 (Functions) <====================

// {
    // 1. Code the first line of a function displayAlert.
    // ANS:
    // function greet(){
    //     alert("hello")
    // }
    // greet()
    // 2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.
    // ANS:
    // function askName(){
    //     var userName = prompt("enter name")
    // }
    // askName()
    // 3. Code a function that calls 2 other functions.
    // ANS:
    // function call(){
    //     greet();
    //     askName()
    // }
    // call()
    // 4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.
    // ANS:
    // function userName(){
    //     var userName = prompt("enter name");
    //     alert(userName)
    // }
    // userName()
// 5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.
// ANS:
// function concat(m, string, num){
//  alert(m + string + num);
//  }

// concat()
// 6. Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.
// ANS:
// function userName(firstName, lastName){
//     var fullName = firstName + lastName;
// }

// 7. Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.
// ANS:
// function Multiply(a,b,c){
//     var result = a*b*c;
// }

// 8. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
// ANS:
// var arr = [2,3,4,5,6,7,8,9,19];
// var a = 0
// function avg(){

//     for(i=0;i<arr.length; i++){
//         a += arr[i]
//     }
//     return a = a/ arr.length
// }
// avg()
// var average = a

//9. Write a JavaScript function that takes two parameters and returns their sum.
// ANS:
// function sum(a,b){
//     var result = a+b;
// }

// 10. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
// ANS:
// var arr = [2,3,4,5,6,7,8,9,19];
// var a = 0
// function avg(){

//     for(i=0;i<arr.length; i++){
//         a += arr[i]
//     }
//     return a = a/ arr.length
// }
// avg()
// var average = a

// 11. You have to capture the returned value from a function and store it in a variable?
// ANS:
// function sum(a,b){
//    var result = a+b;
//    return result
    
// }
// var result1 = sum(2,3)
// 12. Write a function which tells letter counts of (word).
// ANS:
// var word = "skgkjsdgjkjgkdjs";
// function count (word){
//     return word.length
// }
// count(word)
// 13. Write a function to set (year) in date object.
// ANS:
// var date = new Date();
// function setYear(){
//     date.setFullYear(2006)
// }
// setYear()
// 14. Write a function which tells the age of a person who Born on (dateOfBirth)
// function age(){
    // var dob = new Date("10/10/1997");

// var d1 = dob.getDate();
// var m1 = 1 + dob.getMonth();
// var y1 = dob.getFullYear();

// var date = new Date();
//   var d2 = date.getDate();
//   var m2 = 1 + date.getMonth();
//   var y2 = date.getFullYear();
//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
//   if(d1 > d2){
//     d2 = d2 + month[m2 - 1];
//     m2 = m2 - 1
//   }
//   if(m1 > m2){
//     m2 = m2 + 12;
//     y2 = y2 - 1
//   }

//   var d = d2 - d1;
//   var m = m2 - m1;
//   var y = y2 - y1;

// alert("your age is "+ y + " years "+ m +" months "+ d + " days")
// }
// age();
// 15. Write a function which tells the presense of (word) in an
// result should be in true or false
// ANS:
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// function find(){
//     for(i=0;i<array.length; i++){
//         if(array[i] === "zaid"){
//             return true
//             break
//         }
//         else{
//             return false
//         }
//     }
// }
// find()

// 16. Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)
// ANS:
// var str = "abcde";
// function repeat(){
    
//     var a = str.repeat(10)
// }
// repeat()
// 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()
// ANS:
// var array = ['a','b','c','d','e'];
// function reverse(){
//     array.reverse()
// }
// reverse()


// }

// ==================>     Chapter 38 (Local vs. Global Variables) <====================
// {
// 1. Write a JavaScript function that demonstrates the usage of a local variable.
// function abc(){
//     var a = 5;

// }
// abc()
// 2. How can you access a global variable inside a function in JavaScript?
// ANS:
// var a = 8;
// function abc(){
//     var b = a;
// }
// abc()
// }
// ==================>     Chapter 39, 40 (Switch Statements) <====================
// {

// 1. Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.
// ANS:
// var dayOfWk = ["sun","sat","fir"]
// switch(dayOfWk) {
//      case "Sat" :
//      alert("Whoopee");
//      break;
//      case "Sun" :
//      alert("Whoopee");
//      break;
//      case "Fri" :
//      alert("TGIF!");
//      break;
//      default :
//      alert("Shoot me now!");
//      }
    
// 2. Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.
// ANS:
// var cityName = prompt("enter city");
// switch(cityName){
//     case "karachi":
//         console.log("welcome to karachi");
//         break;
//         default :
//         console.log("you are not in karachi")
// }

// }
// 





