var guestList = (['Babar Azam', 'M Rizwan', 'Shahdab Khan']);
var cannotAttend = 'Shahdab Khan';
console.log("".concat(cannotAttend, " is not available for dinner"));
var replacement = "Shaheen Shah Afridi";
guestList[guestList.indexOf(cannotAttend)] = replacement;
guestList.unshift('Sarfraz Ahmed', 'Saim Ayub', 'Naseem Shah');
guestList.map(function (list) { return console.log("Assalamualikum,".concat(list, ",Hope you are fine and also in good health,I am writing to invite you to attend a dinner at my place on 11-3-24\n")); });
console.log("I have arranged a bigger table that's why I have invited more guest");
