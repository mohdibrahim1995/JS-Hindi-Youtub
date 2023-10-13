const objArray=[
    {
        item:"DS Course",
        price:200
    },
    {
        item:"PhS Course",
        price:100
    },
    {
        item:"C++ Course",
        price:400
    },
]
const numMapcheck=[1,2,3,4,5,6,7,8]

const rdxcheck=objArray.reduce((acc,val1)=> acc+val1.price,0)
//console.log(rdxcheck);

const testMap=numMapcheck.map((x)=>x+1)
console.log(testMap);