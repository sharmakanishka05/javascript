const user={
    username:"kanishka",
    price: 999,
    welcomeMessage:function(){
    console.log(`${this.username},welcome to website`)
    console.log(this)
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)//{}

// function first(){
//     console.log(this.username)//undefined
// }
// first()

const chai=function(){
    let username="kanishka"
    console.log(this.username)
}




// const chai = ()=> {
//     let username="kanishka"
//     console.log(this)
//}
// chai()

const addTwo=(num1,num2)=>{
return num1+num2
}
console.log(addTwo(3,4))
// {}-use return 
// arrow function -not use of return 

//----implicit return------
// const addTwo=(num1,num2)=>  num1+num2

const addTwo=(num1,num2)=>({username:"kanishka"})
console.log(addTwo(3,4))


