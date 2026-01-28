// 🟢 Problem 18 — Functions That Return Data (Next Level)
// Task

// Write a function called getTopStudents that:

// Takes the students array

// Returns a new array containing only students with score >= 90

// Print the returned array

// Rules

// Do not mutate the original array

// Use a for loop

// Use return

// Clean, readable code
function getTopStudents(students){
    const topStuednts=[]
    for(let i=0;i<students.length;i++){
        if(students[i].score>=90){
            topStuednts.push(students[i])
        }
    }
    return topStuednts;
}
const marks=[
    {name:"Amit", score:85},
    {name:"Neha", score:92},
    {name:"Rahul",score:78}
]
console.log(getTopStudents(marks))