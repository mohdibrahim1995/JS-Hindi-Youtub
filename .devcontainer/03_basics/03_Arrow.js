const user={
    username:"Mohd Ibrahim",
    price:300,
    webisteaddress: function(){
        console.log(`${this.username} hello welcome to JS basics course`)
    }
}

// user.webisteaddress();
// user.username="Affan" //changing value of user context 
// user.webisteaddress();



//Normal function calling and storing in varaible
const chai1= function (){
    let userName="ibrahjim"
    console.log(userName)
}

//Arrow function 
const chai=()=>{
    let userName="ibrahjim"
    console.log(userName)
}
// chai1()
// chai()


//implicit return
const oneLine=(num1,num2)=> num1+num2   //implicit  type in which there is no return we need to write or no need to give {}


//implicit under parenthesis
const oneLineParenthesis=(num1,num2)=> (num1+num2) //implicit under parenthesis

//calling object in one line under  parenthesis but make sure 
const oneLineObject=(num1,num2)=> (num1+num2)   //calling object in one line under  parenthesis but make sure 


console.log(oneLine(2,3))
console.log(oneLineParenthesis(2,3))
console.log(oneLineObject(2,3))




