let magicians: string[] = ["Shuraim","Muheed","Zain"];

function showMagicians(magicians: string[]){
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
  showMagicians(magicians);


  function makeGreat(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] =  " The Great " + magicians[i];
    }
  }
  
  makeGreat(magicians); 
  showMagicians(magicians); 
  
  