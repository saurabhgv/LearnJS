// 🟢 Problem 15 — Arrays of Objects (Very Important)
// Task
// Write JavaScript code that:
// Creates an array students where each student is an object:
// [
//   { name: "Amit", score: 85 },
//   { name: "Neha", score: 92 },
//   { name: "Rahul", score: 78 }
// ]
// Loops through the array
// Prints:
// Amit scored 85
// Rules
// Use a for loop
// Clean variable names
// Dot notation for object access

const student=[
    { name: "Amit", score: 85 },
    { name: "Neha", score: 92 },
    { name: "Rahul", score: 78 }
]

for (let i=0;i<student.length;i++){
    console.log(`${student[i].name} scored ${student[i].score}`)
}