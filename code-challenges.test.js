// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided. 

// var num1 = 15
// // Expected output: "15 is divisible by three"
// var num2 = 0
// // Expected output: "0 is divisible by three"
// var num3 = -7
// Expected output: "-7 is not divisible by three"

//Pseudocode
// we will take the number n and find  the modulus of the number if the reminder is
// not 0 the number is evenly divisible by three esle is false

//The test will call the divisibleBy3 method and pass the number n 
//the fuction will check if it is divisible and return if it's true;


function divisibleBy3(n) {
   //initialization
 var isdivisible=false
//   check if divisible
   if (n % 3 == 0) {
//if devisible set the is divisible to true
      isdivisible=true
     
}
//retun is divisible
    return isdivisible

}
module.exports = divisibleBy3;

// b) Create the function that makes the test pass.

const divisibleBy3 = require('./divisible');
var firstnumber = 15;
var secondNumber = 0
var thirdNumber=-7

//test for a var one
//this is according to instruction but it is possible to loop the test for each value using
// test.each([firstnumber,secondNumber,thirdNumber])("is divisible"),(number)=>{
 // expect(divisibleBy3(number)).toBe(true); 
 // }

 test('is divisible', () => {
  expect(divisibleBy3(firstnumber)).toBe(true); 
    
});
//test for var 2
test('is divisible', () => {
  expect(divisibleBy3(secondNumber)).toBe(true);   
 
});
//test for var 3
test('is divisible', () => {
  
  expect(divisibleBy3(thirdNumber)).toBe(false); 
   
 
});



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//toUpperCase()


var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

for (var newNouns of randomNouns1) {
    newNouns = randomNouns1.charAt(0).toUpperCase() + newNouns.substr(1);
   console.log(newNouns);



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

//PSEUDOCODE
//This function  take thre string ,
//loops thrugh each character in the string
// if  charater is vowel the set var position to the index and stop executing
// 
function firstVowel(str)
{
	//declare and initialize
    var pos = 0;
    //loop throught the character
    for(var i = 0; i<str.length; i++)
    {
        //if character at index is one of the vowels in caps or lower case the set postion and break
		if (str.charAt(i) =='a' || str.charAt(i) == 'e' || str.charAt(i) =='i'
		|| str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' ||
		str.charAt(i) == 'E' || str.charAt(i) =='I' || str.charAt(i) =='O' || str.charAt(i) == 'U')
        {
            // set index 
            pos = i;
            //break;stop executing
		 break;		
		}
    }
   //return the index
     return pos
    
}
module.exports = firstVowel;
}
// b) Create the function that makes the test pass.

const firstVowel = require('./vowel');
//initialize the words
var vowelTester1 = "learn";
var vowelTester2 = "academy";
var vowelTester3 = "challenges"
//test the first word index is exected to be one
test('index of the first vowel', () => {
  
        expect(firstVowel(vowelTester1)).toBe(1); 
    
 
});
//test the second word index is exected to be 0
test('index of the first vowel', () => {
  
        expect(firstVowel(vowelTester2)).toBe(0); 
    
 
});
//test the third word index is exected to be 2
test('index of the first vowel', () => {
  
        expect(firstVowel(vowelTester3)).toBe(2); 
    
 
})