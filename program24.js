// Problem 25 — Find Object (Final Core Pattern)
// Task

// Write a function getTopper that:

// Takes students

// Returns the student object with the highest score

// Print the returned object

// Rules

// Use for loop

// No sorting

// No Math.max
const getTopper=(students)=>{
    let topStudent=students[0]
    for (let i=0;i<students.length;i++){
        if (students[i].score>topStudent.score){
            higestScore=students[i]            
        }

    }
    return topStudent
}

const marks=[
    {name:"Amit", score:85},
    {name:"Neha", score:92},
    {name:"Rahul",score:78}
]

console.log(getTopper(marks))