//#1 Object of Object declartion
const ObjectMapCheck= new Object();
ObjectMapCheck.name="MohdIBrahim",
ObjectMapCheck.age=25,
ObjectMapCheck.email="Mohd@gmail.com"
for (const iterator in ObjectMapCheck) {  //For Loop FORIN will work for Array not ForOF
    //console.log(ObjectMapCheck[iterator])
}

//#2 way of Object declartion
const obj={
    name:"Ishaq",
    age:25,
    email:"Ibrahim@gmail.com"
}
for (const keyobj in obj) {  //For Loop FORIN will work for Array not ForOF
    //console.log(obj[keyobj])
}

// Below syntax is for string array using FORIN
const forArray=['assds','qwer','gjhk','vcvbc']
for (const keyarry in forArray) {
    console.log(forArray[keyarry]);
}

//Below sytacx is for Number array using FOROF
const arr=[2,32,12,24,54,87]
for (const iterator of arr) {
    console.log(iterator);
}

