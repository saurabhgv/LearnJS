// 🟢 Problem 14 — Objects + Loop (Real-World Pattern)
// Task

// Write JavaScript code that:

// Creates an object scores with:

// { math: 90, science: 80, english: 85 }


// Loops through the object

// Prints each subject and its score in this format:

// math: 90

// Rules

// Use for...in

// Clean, readable code

// No hardcoding keys

const score ={
    math:90,
    science:80,
    english:85
};
for (const keys in score){
    console.log(`${keys}: ${score[keys]}`)
}