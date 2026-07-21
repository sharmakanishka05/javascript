const userEmail=[]
if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email")
}

/* falsy value
false,0,-0,BigInt 0n,"",null.undefined,NaN

truthy value

"0",'false'," ",[],{},function(){}


*/
// if(userEmail.length===0){
//     console.log("Array is empty");
// }

const emptyObj={}
if(Object.keys(emptyObj.length===0)){
console.log("object is empty")
}

//Nullish Coalescing Operator(??): null
let val1;
val1=5??10
console.log(val1)//5

//Terniary Operator
//condition ? true:false

const price=100
price>=80?console.log("less than 80"):console.log("more than 80")

