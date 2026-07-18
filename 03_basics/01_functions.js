function sayMyName(){
    console.log("K");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("K");
    console.log("A");

}
// sayMyName()
// function addTwoNumber(num1,num2){//parameters
//     console.log(num1+num2)
// }
// const result=addTwoNumber(6,7)//arguments
//  console.log("result:",result)//undefine

function addTwoNumber(num1,num2){
// let result=num1+num2
// return result

return num1+num2//we have to define a variable for storing a  result
}
const result=addTwoNumber(4,5)
console.log(result)
console.log("result:",result)

function logInUser(username){
    if(username===undefined){
        console.log("Please enter username")
        return
    }
    return`${username} just logged in`
}
function logInUser(username="no one"){
    if(username===undefined){
        console.log("Please enter username")
        return
    }
    return`${username} just logged in`
}
console.log(logInUser())

function calculateCartPrice(val1,val2,...num1){//...-->called rest or spread operator
return num1
}
//console.log(calculateCartPrice(200,400,900,2000))

const user={
    username:"kanishka",
    age:21
    
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`)
}
// handleObject(user)
//object pass kr sakte h
handleObject({
    username:"sam",
    age:21
})
const newArray=[200,400,300,150]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray))

 