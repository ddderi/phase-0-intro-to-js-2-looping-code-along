// Code your solutions in this file
// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me !`)
   
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }


function writeCards(arrayofstring, eventname){
    let newarrayofstring = []
    for (let i=0;i<arrayofstring.length;i++){
       newarrayofstring.push(`Thank you, ${arrayofstring[i]}, for the wonderful ${eventname} gift!`)
    }
    return newarrayofstring;
}

// writeCards(['Guadalupe','Ollie','Aki'], 'surprise');

// function countDown(number){
//     for (let i=number;i>=0;i--){
//         console.log(i)
//     }
// }

function countDown(number){
    
    while (number >=0)
    console.log(number--);
}

countDown(10);