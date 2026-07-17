const studentName=["kanishka","riya","namita"]
const student_name=["sharma","mishra","jain"]

console.log(studentName)
// studentName.push(student_name)
// console.log(studentName) o/p-->[ 'kanishka', 'riya', 'namita', [ 'sharma', 'mishra', 'jain' ] ]

// console.log(studentName[3][1])
 
  const allStudent=studentName.concat(student_name)
 console.log(allStudent)//o/p-->[ 'kanishka', 'riya', 'namita', 'sharma', 'mishra', 'jain' ]

const allNew=[...studentName,...student_name]
console.group(allNew)//o/p-->[ 'kanishka', 'riya', 'namita', 'sharma', 'mishra', 'jain' ]


const newArr=[1,2,4,[4,5,6],8,[3,9,0[4,6]]]
const realArr=newArr.flat(Infinity)
console.log(realArr)

console.log(Array.isArray("kanishka"))
console.log(Array.from("kanishka"))
console.log(Array.from({name:"kanishka"}))//interesting case o/p-- []

let score=100
let score2=200
let score3=300

console.log(Array.of(score,score2,score3))
