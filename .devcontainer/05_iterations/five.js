 const TestArray=['js','asdf','Java','Python']
 
 function fun1(){
    console.log("Fun1")
 }




// TestArray.forEach(function(val1){
//     console.log(val1)
// })
TestArray.forEach((val2)=>{
    //console.log(val2)
})


const arr=[2,32,12,24,54,87]
arr.forEach((val1,index,test)=>{
    //console.log(index,val1,test);
})

const myCoding = [
    [
        {"item": "apple"},
        {"item": "banana"},
        {"item": "carrot"},
        {"item": "dog"},
        {"item": "elephant"},
        {"item": "fish"},
        {"item": "guitar"},
        {"item": "hat"},
        {"item": "ice cream"},
        {"item": "jacket"},
        {"item": "kite"},
        {"item": "lemon"},
        {"item": "mango"},
        {"item": "notebook"},
        {"item": "orange"},
        {"item": "pencil"},
        {"item": "quilt"},
        {"item": "rabbit"},
        {"item": "socks"},
        {"item": "table"},
        {"item": "umbrella"},
        {"item": "violin"},
        {"item": "watermelon"},
        {"item": "xylophone"},
        {"item": "yarn"},
        {"item": "zebra"},
        {"item": "apple"},
        {"item": "banana"},
        {"item": "carrot"},
        {"item": "dog"},
        {"item": "elephant"},
        {"item": "fish"},
        {"item": "guitar"},
        {"item": "hat"},
        {"item": "ice cream"},
        {"item": "jacket"},
        {"item": "kite"},
        {"item": "lemon"},
        {"item": "mango"},
        {"item": "notebook"},
        {"item": "orange"},
        {"item": "pencil"},
        {"item": "quilt"},
        {"item": "rabbit"},
        {"item": "socks"},
        {"item": "table"},
        {"item": "umbrella"},
        {"item": "violin"},
        {"item": "watermelon"},
        {"item": "xylophone"},
        {"item": "yarn"},
        {"item": "zebra"}
      ]
]

myCoding.forEach((item,index)=>{
    if (item==="socks") {
        console.log(item,index);

    }
})






