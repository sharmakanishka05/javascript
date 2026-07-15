 const name="kanishka"
 const repoCount="4"
 console.log(  `my name is ${name} and repo count is ${repoCount}`)
 const newName=new String('kanishka')// o/p-[String: 'kanishka']
 console.log(newName)
 console.log(newName[0])
 console.log(newName.__proto__)
 console.log(newName.length)
 console.log(newName.toUpperCase())
 console.log(newName.charAt(3))
 console.log(newName.indexOf('s'))

const newString="hello-hii"
console.log(newString.substring(0,4))
console.log(newString.slice(-8,4))//o/p-->ell

const newS1="     kanishka     "
console.log(newS1)
console.log(newS1.trim())//don't add extra space

const url="https://kanishka.com/kanishka%20sharma"
console.log(url.replace('%20','-'))
console.log(url.includes('kanishka'))