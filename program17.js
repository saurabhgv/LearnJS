// Problem 17 — Functions + Arrays of Objects (Senior Pattern)
// Task

// Write a function called printGrades that:

// Takes the students array as a parameter

// Applies the same grading logic

// Prints the result

// Rules

// No global variables inside the function

// Clean function design

// Reusable logic

function printGrades(students){
    for (let i=0;i<students.length;i++){
        if (students[i].score>=90){
            console.log(`${students[i].name} got Grade A`)
        }
        else{
            console.log(`${students[i].name} needs improvement`)
        }
    }
}
const marks=[
    {name:"Amit", score:85},
    {name:"Neha", score:92},
    {name:"Rahul",score:78}
]
printGrades(marks)