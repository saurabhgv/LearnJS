// Problem 19 — Count Logic (Brain Builder)
// Task

// Write a function countPassedStudents that:

// Takes students

// Counts how many students have score >= 40

// Returns the count

// Print the result

// Rules

// Use a for loop

// Use a counter variable

// Use return

function countPassedStudents(students){
    let counter=0;
    for(let i=0;i<students.length;i++){
        if(students[i].score>=40){
            // console.log(`${students[i].name} passed`)
            counter++            
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
