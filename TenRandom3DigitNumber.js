let randArray = new Array();
for(let i=0; i<10; i++){
    randArray[i] = Math.floor(Math.random()*(999-100+1))+100;
}
console.log(randArray);

let min1 = 999;
let min2 = 999;
let max1 = 0;
let max2 = 0;
for(let i=0; i<10; i++){
    if (randArray[i]>max1) {
        max2 = max1;
        max1 = randArray[i];
    } else if (max2 < randArray[i]){
        max2 = randArray[i];
    }
    if (randArray[i] < min1) {
        min2 = min1;
        min1 = randArray[i];
    } else if (min2 > randArray[i]){
        min2 = randArray[i];
    }
}
console.log("Second maximum: "+max2);
console.log("Second minimum: "+min2);