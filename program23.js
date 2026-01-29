// Problem 24 — Find Pattern (Common Interview Question)
// Task

// Write a function getHighestScore that:

// Takes students

// Finds the highest score

// Returns the highest score

// Print the result

// Rules

// Use a for loop

// No Math.max

// Use a variable to track highest value

const getHighestScore=(students)=>{
    let higestScore=students[0].score
    for (let i=0;i<students.length;i++){
        if(higestScore<students[i].score){
            higestScore=students[i].score
        }
    }
    return higestScore;
}

const marks=[
    {name:"Amit", score:85},
    {name:"Neha", score:92},
    {name:"Rahul",score:78}
]

console.log(getHighestScore(marks))