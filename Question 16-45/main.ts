let guestList:string[]=(['Babar Azam','M Rizwan','Shahdab Khan']);
let cannotAttend:string='Shahdab Khan'
console.log(`${cannotAttend} is not available for dinner`)
let replacement:string="Shaheen Shah Afridi"
guestList[guestList.indexOf(cannotAttend)]=replacement
guestList.unshift('Sarfraz Ahmed','Saim Ayub','Naseem Shah')
guestList.map((list)=> console.log(`Assalamualikum,${list},Hope you are fine and also in good health,I am writing to invite you to attend a dinner at my place on 11-3-24
`));
console.log(`I have arranged a bigger table that's why I have invited more guest`)