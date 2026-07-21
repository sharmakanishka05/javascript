const coding=["js","rb","cpp","java","python"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val)
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// codin.array.forEach((item,index[],arr) => {
//     console.log(item,index,arr);
    
// });


const myCoding=[
    {
        languageName:"javascript",
        languageFileNmae:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"cpp",
        languageFileName:"c++"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName)
})