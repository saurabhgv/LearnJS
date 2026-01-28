// Problem 16 — Conditional Logic with Arrays of Objects (Next Level)
// Task

// Using the same students array:

// Loop through the students

// If score >= 90 → print:

// Neha got Grade A


// Else → print:

// Amit needs improvement

// Rules

// Use if / else

// Clean, readable code

// No hardcoded names

const students=[
    {name:"Amit", score:85},
    {name:"Neha", score:92},
    {name:"Rahul",score:78}
]

for (let i=0;i<students.length;i++){
    if(students[i].score>=90){
        console.log(`${students[i].name} got Grade A`);
    }
    else{
        console.log(`${students[i].name} needs improvement`)
    }
}