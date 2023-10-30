
// const PromiseFour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise four");
//     },1000)
//     let error=true;
//     if (error) {
//         console.log("Resolve")
//         resolve() 
//     }
//     else{
//         console.log("Rejected Promise");
//         reject()
//     }
    
// })

//Calling promise and Then ,Catch and Finally
// PromiseFour
// .then(function(){
//        console.log("Reslovewwww")
//         })      
// .catch(function() {
//       console.log("rejected");
//         })
// .finally(console.log("Finally"))


///async and wait

// const promiseFive = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         let error=true;
//         if (!error) {
//             console.log("True")
//             resolve()
//         }
//         else{

//         }
// },1000)
// }
// )


//# calling async await
// const testingPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let errorcheck= false
//         if (errorcheck) {
//             console.log("Its Reslove");
//             resolve();
//         }
//         else{
//             console.log("Error code ",errorcheck);
//         }
//         console.log("testingPromise");
//     },1000)
// })

// async function TestingSync(){
//     try{
//         const testingWait= await testingPromise;
//         console.log(testingWait);
//      } 
//     catch(errorcheck){
//         console.log(errorcheck);
        
//     }
// }
// TestingSync()


// const apiCall="https://jsonplaceholder.typicode.com/users123"

// async function apiCalling(){
//     try{
//         const date= await fetch(apiCall);
//         const jsonConvert= date.json()
//         console.log(jsonConvert);
//     }
//     catch(error){
//         console.log("Catch",error);
//     }
// }
// apiCalling()


// const PromiseSix=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promisesex");
//     },2000)
// })
// PromiseSix
// .then(console.log("Then"))
// .catch(console.log("Cathc"))


const chaiAurCode="https://api.github.com/users/hiteshchoudhary"
//console.log(chaiAurCode);
async function ChaiAurHitesh(){
    try{
        const API_Call=await fetch('https://api.github.com/users/hiteshchoudhary')
    const jsonVert=await API_Call.json()
    console.log(jsonVert[3].node_id);
    }
    catch{
        console.log("Error");
    }
}
//ChaiAurHitesh()

const fetchAPI= "https://api.github.com/users/hiteshchoudhary"

async function testingAsync(){
    const awaitTest= await fetch(fetchAPI);
    const jsonObject= await awaitTest.json()
console.log(jsonObject);
}

//testingAsync();
fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json()
})
.then ((datas)=>{ console.log(datas.followers);})  
.catch((error)=>{
   console.log("Error code is "+error);
})


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))




//jSON Dummy API
fetch('https://jsonplaceholder.typicode.com/posts111')
.then((res)=>{return res.json();})
.then((res)=>{console.log(res)})
.catch((err)=> console.error("Error Code",err))