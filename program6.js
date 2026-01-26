// .

// 🟢 Problem 6 — Loops + Logic (Slightly Harder)
// Task

// Write JavaScript code that:

// Loops from 1 to 10

// Prints only even numbers

// Rules

// Use a for loop

// Use an if condition

// Clean, readable code

// for (let i=1;i<=10;i++){
//     if (i%2===0){
//         console.log(i)
//     }
// }
for (let i=1;i<=10;i++){
    const isEven=i%2===0;
    if (isEven)
    {
        console.log(i)
    }
}