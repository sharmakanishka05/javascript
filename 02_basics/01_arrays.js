 const myArr=[0,1,2,3,4,5]
  console.log(myArr[4])
  const myString=["hii","hello"]
  console.log(myString[0])
  const myArr1=new Array(1,2,3,4,5);
  console.log(myArr1[1])
  // myArr.push(6)
  // myArr.push(8)
  myArr.pop()
  console.log(myArr);
  // myArr.unshift(9)//o/p-->[9,0,1,2,3,4,5]
  // myArr.shift() //o/p-->[1,2,3,4,5]
  console.log(myArr)

  console.log(myArr.includes(9))
  console.log(myArr.indexOf(3))

  const newArr = myArr.join()
  console.log(myArr)
  console.log(newArr)
  console.log( typeof newArr)

  console.log("A",myArr)
  const myn1=myArr.slice(1,3)//slice-exclude lasst index and not change oroginal array
  console.log(myn1)
  console.log("B",myArr)
  const myn2= myArr.splice(1,3)
  console.log(myn1)
  console.log(myn2)
  console.log("c",myArr)
  const myn3=myArr.splice(1,3)//splice- include last index and changement is done in original array
  console.log(myn3)

