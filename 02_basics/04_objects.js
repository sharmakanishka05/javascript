// const tinderUser=new Object() -->singleton object
const tinderUser={}//-->non singleton object

tinderUser.id="123434ad"
tinderUser.name="kanishka"
tinderUser.isloggedIn=false

console.log(tinderUser)

const regularUser={
    email:"kanishka",
    fullname:{
        userfullname:{
            firstname:"kanishka",
            lastname:"sharma"
        }
    }

}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3= Object.assign({},obj1,obj2)//syntex-->object.assign(target,source)({}<-- target)
console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1===obj3)

const obj4={...obj1,...obj2}
console.log(obj4)

const users=[             //array representation
{
    id:1,
    email:"kanishka"
}
]
console.log(users[0].email)

users[0].id
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggedIn'))
