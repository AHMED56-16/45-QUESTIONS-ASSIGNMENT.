let guestList:string[]=(['Babar Azam','M Rizwan','Shahdab Khan']);
let cannotAttend:string='Shahdab Khan'
let replacement:string="Shaheen Shah Afridi"
guestList[guestList.indexOf(cannotAttend)]=replacement
guestList.unshift('Sarfraz Ahmed','Saim Ayub','Naseem Shah')
console.log(`Assalamualikum,I have a bad news,the table which i orderded will not be available for our upcoming dinner,so,I am sorry guys.Now,I only have space for two.`)
console.log(guestList[5],",I am sorry,next time I will sure that we will have dinner together.")
console.log(guestList[4],",I am sorry,next time I will sure that we will have dinner together.")
console.log(guestList[2],",I am sorry,next time I will sure that we will have dinner together.")
console.log(guestList[0],",I am sorry,next time I will sure that we will have dinner together.")
console.log(guestList[3],",you are still invited to have dinner.");
console.log(guestList[1],",you are still invited for dinner.");
guestList.splice(0,6)
console.log(guestList);


