let myDate=new Date()
console.group(myDate.toDateString())//Thu Jul 16 2026
console.group(myDate.toISOString())// 2026-07-16T15:51:32.700Z
console.group(myDate.toLocaleDateString())// 7/16/2026
console.group(myDate.toLocaleTimeString())//3:51:32 PM
console.group(myDate.toString())//  Thu Jul 16 2026 15:51:32 GMT+0000 (Coordinated Universal Time)

let myCreatedDate=new Date(2026,0,6,5,9)// jan--> 0 and syntex is(year,date,month)
// console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)

let newDate=new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth())
newDate.toLocaleString('default',{
    weekday:"long"
    
})




