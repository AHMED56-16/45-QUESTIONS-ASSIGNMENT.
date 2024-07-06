var magicians = ["Shuraim", "Muheed", "Zain"];
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
showMagicians(magicians);
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = " The Great " + magicians[i];
    }
}
makeGreat(magicians);
showMagicians(magicians);
