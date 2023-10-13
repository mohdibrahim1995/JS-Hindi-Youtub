//for in

// const arr=[2,32,12,24,54,87] // array in number
// for (const num of arr) {
//     console.log(num);
// }


//array in string and also trim the value from it so that we can get only numbers
// below we are using for of loop
const greatiing=" Hello Ibrahim "
const trimeGreat=greatiing.trim();
// for (const strgreat of trimeGreat) {
//     if (strgreat==" ") {
//         continue
//     }
//     console.log("Hello world "+strgreat);
// }


//Maps
const mapping= new Map(); //it is looking an object or same way to work with
mapping.set("a","airtel")
mapping.set("b","Birla")
mapping.set("c","Cat")
mapping.set("d","Dog")
// console.log(mapping)


for (const [iterator,value] of mapping) {  //For Lopp ForOF will work for Object 
    //console.log(iterator,":-",value)
}
