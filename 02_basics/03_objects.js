//singleton 
//object.create


//objects literals

const mySym=Symbol("key1")


const jsUser={
    name:"kanishka",
    "full name": "kanishka sharma",
    [mySym]:"key1",//important this syntex is uses for symbol
    age:21,
    location:"jaipur",
    email:"kanishka@123google.com",
    isLoggedId:false,
    lastLoginDays:["Monday","Sunday","Tuesday"]
}
console.log(jsUser.isLoggedId)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])//<-------
console.log( typeof jsUser[mySym])


jsUser.email="kanishka@google.com"
// Object.freeze(jsUser)// values can not be change
jsUser.email="k@123google.com"
console.log(jsUser["email"])

jsUser.greeting=function(){
    console.log("hello js user")
}

jsUser.greetingTwo=function(){
    console.log(`hello js user, ${this.age}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
