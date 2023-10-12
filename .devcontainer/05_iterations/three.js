//for in

// const arr=[2,32,12,24,54,87] // array in number
// for (const num of arr) {
//     console.log(num);
// }


//array in string and also trim the value from it so that we can get only numbers
const greatiing=" Hello Ibrahim "
const trimeGreat=greatiing.trim();
for (const strgreat of trimeGreat) {
    if (strgreat==" ") {
        continue
    }
    console.log("Hello world "+strgreat);
}