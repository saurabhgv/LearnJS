// Problem 23 — Average Pattern (Combines Concepts)
// Task

// Write a function getAverageScore that:

// Takes students

// Calculates the average score

// Returns the average

// Print the result

// Rules

// Use your getTotalScore logic

// Use students.length

// Return the value (no console.log inside function)

const getAverageScore=(students)=>{
    let getTotal=0
    for (let i=0;i<students.length;i++){
        getTotal+=students[i].score
    }
    return getTotal/students.length

}
const marks=[
    {name:"Amit", score:85},
    {name:"Neha", score:92},
    {name:"Rahul",score:78}
]

console.log(getAverageScore(marks))