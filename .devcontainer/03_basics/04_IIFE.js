// Immdeidately Invoked Function Expressions (IIFE)

///#basic fucntion but need to explicitly eg chai()
// function chai(){
//     console.log(`chai`)
// }
// chai()

//#below are the IIFE function which will executed with-out calling it
(function chai(){
    //name IIFE
    console.log(`DB Chai Connected`)
})();


( ()=>{
    //no Name IIFE
    console.log(`DB Chia Two Connected`)
}
)()

 