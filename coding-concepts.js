// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.split(""))

// a) Your answer: 'd','e','l','t','a' '2','0','2','1'
// b) Verify and explain:  'D', 'e', 'l', 't', 'a', ' ', '2', '0','2', '1'

// Attention to detail! I missed the D and the spaces. Have to remember spaces hold value as well


// --------------------2) What will this log?

const greeter = (name) => {
 return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student"
// b) Verify and explain: undefined...forgot to put in the return after the arrow and curly braces


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: 8,10,12,14,16
// b) Verify and explain: multBy2 equals 2 mutiplied by values only in the array


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2== 0)
console.log(oddsOnly)

// a) Your answer: you almost got me...I dont know why I knew but I kept looking and found the NEGATION. I dont know if its an error or even numbers though...
// b) Verify and explain: smh even numbers value strict equality to an even index


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

//a) Your answer: George Delta 2021
// b) Verify and explain: I was wrong again.  inside of the class "Learn" we use constructor to add George to the already saved method name.
//Learn { student: 'George', cohort: 'Delta', year: 2021 }