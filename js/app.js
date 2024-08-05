let cl=console.log;
let ages= [10,20,30,40,50,60,70,80,90,100];

// let agesqrt= ages.map(age => Math.sqrt(age))
// cl(ages)
// cl(agesqrt)


// let doubleAge=[];
// ages.forEach((ele)=>doubleAge.push(ele*2))
// cl(ages);
// cl(doubleAge);

// let result = ages.map (num => Math.sqrt(num)) .map (num => num*2)
// cl(result);

let result = ages.map(num => Math.pow(num,3))
cl(result);