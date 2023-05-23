let myitems=[
    {a:'apple',b:'boll'},
    {a:'apple',b:'boll',c:'cat'},
    {a:'apple',b:'boll',c:'cat',d:'dog'},
]
// let mydata=myitems.find((data)=>{return data.d=='dog'})
// console.log(mydata)
let mydata=myitems.filter((data)=>{return data.c=='cat'})
console.log(mydata)


let arry=[3,5,6,3,7,1,7,9]
// reducer--to  get uniqe elemts
