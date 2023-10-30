// //#1 calling basic functions
// function TestFunction(){
//     console.log("Hello Worold");
// }
// TestFunction();


// #2 function PassArguemtn(n1,n2){
//     return n1+n2; // after return statement no futuer excualtion will happen
// }
// console.log(PassArguemtn(2,3));


//#3 default value if no value/arrgument is passed
// function DefaultArrgument(n1=2,n2=3){
//     //console.log("Its working on ");
//     console.log(`THis is adding ${n1} and ${n2}`); // string interpolation 
//     return n1+n2;
// }
// console.log(DefaultArrgument(3,6))



// function calculSpread(...num1){   //rest ... operator is like of spread operatrer in array which take value and store in the form of array.
//     return num1
// }
// console.log(calculSpread(1,2,4,5,7));
// function add2thenSpread(a,b,...c){
//     return a+b+c;
// }
// console.log(add2thenSpread(3,2,8,6,4));



//creating obj and passing object value inside a function
// const objtestfunction={
// name:"Ibrhaim",
// age:20,
// price:200
// }
// function passingFunctionObj(test){
//  console.log(`Hello ${test.name} your age ${test.age} and price is ${test.price}`);
// }
// passingFunctionObj(objtestfunction);



const arryfunction=[2,32,43,12,87]

function arryfunctiontest(testprop){
    
    return testprop[1]
}

//console.log(arryfunctiontest(arryfunction));



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

