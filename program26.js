let getTopstudents=(students)=>{
    let student=0;
    students.filter(student=student.score>=40).length

}
const marks=[
    {name:"Amit", score:85},
    {name:"Neha", score:92},
    {name:"Rahul",score:78}
]
topStudent=getTopstudents(marks)
console.log(topStudent)