let a=300
if(true){
let a=10
const b=20
console.log("inner log:",a)

}
console.log(a)
// console.log(b);


function one(){
    const username="kanishka"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username="kanishka"
    if(username==="kanishka"){
        const website=" youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

//----------------interesting-----------------

console.log(addone(6))
function addone(num){
return num+1
}


const addTwo=function(num){//variable holds function  
    return num +2
}
addTwo(6)