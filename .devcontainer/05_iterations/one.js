// const forArray=[2,12,43,21,43,1,87 ]
// for(let i=0; i<forArray.length;i++){
//     //const element=forArray[i]
//     console.log( typeof forArray[i])
// }

//Nested Loops
// for (let i = 0; i < 10; i++) {
//    console.log("Outer Loop "+i)
//     for (let j = 0; j < 10; j++) {
//          console.log(`${i} x ${j}=`+i*j);
        
//     }
// }

//Break and Continou
// for (let index = 1; index < 20; index++) {
//     if (index==5) {
//         console.log("Dected by 5")
//         break
//     }
//     console.log(`value of index is ${index}`);
    
// }
//Continou
for (let index = 1; index < 20; index++) {
    if (index==5) {
        console.log("Dected by 5")
        continue
    }
    console.log(`value of index is ${index}`);
    
}

