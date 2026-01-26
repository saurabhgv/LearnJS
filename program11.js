// Problem 11 — Arrays + New Array (Important Step)
// Task

// Write JavaScript code that:

// Takes an array [1, 2, 3, 4, 5]

// Creates a new array where each number is multiplied by 2

// Prints the new array

// Rules

// Do not modify the original array

// Use a for loop

// Push values into a new array

// Clean, readable code

const numbers=[1,2,3,4,5]
const doubleNumbers=[]
for(let i=0;i<numbers.length;i++){
    doubleNumbers.push(numbers[i]*2);
}
console.log(doubleNumbers)

