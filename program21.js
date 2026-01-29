// Problem 22 — Sum Pattern (Very Important)
// Task

// Write a function getTotalScore that:

// Takes students

// Calculates the total score

// Returns the total

// Print the result

// Rules

// Use a for loop

// Use an accumulator variable

// Use return
function getTotalScore(students){
    let totalScore=0
    for(let i=0;i<students.length;i++){
        totalScore += students[i].score
    }
    return totalScore;
}
const marks=[
    {name:"Amit", score:85},
    {name:"Neha", score:92},
    {name:"Rahul",score:78}
]
console.log(getTotalScore(marks))