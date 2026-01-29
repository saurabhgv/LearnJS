// Problem 21 — Filter + Count Combo (Next Level)
// Task

// Write a function countTopStudents that:

// Takes students

// Counts how many students have score >= 90

// Returns the count

// Print the result

function countPassedStudents(students){
    let counter=0
    for(let i=0;i<students.length;i++){
        if(students[i].score>=90){
            counter ++ 
        }
    }
    return counter;
}

const marks=[
    {name:"Amit", score:85},
    {name:"Neha", score:92},
    {name:"Rahul",score:78}
]

console.log(countPassedStudents(marks))