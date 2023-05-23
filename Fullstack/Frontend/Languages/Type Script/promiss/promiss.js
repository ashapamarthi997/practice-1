let lokeshPrmiss=new Promise((fullfill,notfullfill)=>{
    setTimeout(()=>{
       // fullfill("im keeping my words")
       notfullfill("im not keeping my words")
    },2000)
    
})

lokeshPrmiss.then((abc)=>{console.log(abc)}).catch((h)=>{console.log(h)})
console.log( lokeshPrmiss)


// function total(a,b,c,d){

//     return a+b+c+d
// }
// let arvind=0
// setTimeout(()=>{arvind=350
//    x
// },2000)
// console.log(total(arvind,300,300,250))