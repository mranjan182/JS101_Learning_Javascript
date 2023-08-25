// Problem 1: Find the average of elements present at odd index of the following array.
let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let oddIndex=arr.filter((el,i)=>i%2!==1)

let sumOfoddIndex=oddIndex.reduce((acc,num)=>acc+num,0)

let avg=sumOfoddIndex/oddIndex.length;
console.log("oddIndex length is:",oddIndex.length)
console.log('sum of oddIndexes are:',sumOfoddIndex)
console.log("avg of the oddIndex of array is:",avg)