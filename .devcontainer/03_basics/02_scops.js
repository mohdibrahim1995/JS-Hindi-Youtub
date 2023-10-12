let a=400
if(true){
    let a=20;//block scope 
    const b=20;     //block scope 
var c=300; //globalscope not a good pratice to use this

}

// console.log(a);
// // console.log(b);
// console.log(c);

// function one(){
//     const UserName="Mohd Ibrahim" //Global Scope
//     function two(){
//         const website="mohammed1995@youtube.com"  //block or functional scope
//         console.log(UserName);
//     }
//     console.log(website);
//     two();
// }

// one();



// basic Function 
function addOne(num){ 
    return num +1;
}
console.log(addOne(5))

// variable hosting
const varibalehosting= function addtwo(num){  /// variable which holds a value of function sometimes it is also called as hosting 
    return num+2;
}
console.log(varibalehosting(6))


