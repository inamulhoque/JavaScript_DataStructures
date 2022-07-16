let randArray = new Array();
for(let i=0; i<10; i++){
    randArray[i] = Math.floor(Math.random()*(999-100+1))+100;
}
console.log("Original array: "+randArray);
console.log("Sorted array: "+randArray.sort());
console.log("Second smallest is: "+randArray[1]);
console.log("Second smallest is: "+randArray[8]);