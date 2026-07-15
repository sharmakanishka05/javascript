// PRIMITIVE
//  7 TYPES-> String,Number,Boolean,null,undefined,Symbol,Bigint


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

 const id=Symbol('123')
 const anotherId=Symbol('123')
 console.log(id)
 console.log(anotherId)
 console.log(id=== anotherId)

// const bigNumber=768969627853762537258735193n
// node 01_basics/datatypes-summary.jsconsole.log(bigNumber)

//REFERENCE(NON PRIMITIVE)
//Array,Objects,Functions

const arrayFirst=[10,11,12];
const  myObj={
    name: "kanishka",
    score:85,

}

const myFunction = function(){
    console.log("hello  :)");
}

console.log(typeof outsideTemp)



//------------------------------------
//stack (primitive),heap(non-primitive)
 //stack --> copy
 //heap  --> refernce



 let myName="kanishka"
 let anotherName=myName
 anotherName="xyz"
 console.log(myName)
 console.log(anotherName)


let detailOne={
    email:"k@123google.com",
    collge:"kit"

}
let detailTwo=detailOne
console.log(detailOne)
detailTwo.email="s@123google.com"
console.log(detailTwo)