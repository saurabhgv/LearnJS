// Next Problem — Lowest Scorer (Mirror Logic)
// Task
// Write a function getLowestScorer that:


// Takes students


// Returns the student with the lowest score


// Print the returned object


// 👉 Send only your code.

const getLowestScorer=(students)=>{
    let lowScore=students[0]
    for (let i=0;i<students.length;i++){
        if(students[i].score<lowScore.score){
            lowScore=students[i]
        }
    }
    return lowScore
}
const marks=[
    {name:"Amit", score:85},
    {name:"Neha", score:92},
    {name:"Rahul",score:78}
]
console.log(getLowestScorer(marks))