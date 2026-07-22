const myNums=[1,2,3,4]

// const myTotal=myNums.reduce(function(acc,currval){

//     console.log(`acc: ${acc} and currval: ${currval}`);
// return acc+currval
// },0)

const myTotal=myNums.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal)

const shoppingCart=[
   { itemName:"js course",
    price:5999
},
   { itemName:"data science course",
    price:12999
},
   { itemName:"Ai and machine learning course",
    price:15999
},

]

const mytotal=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(mytotal)
