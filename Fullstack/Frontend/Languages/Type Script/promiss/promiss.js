let  Prmiss=new Promise((fullfill,notfullfill)=>{
    setTimeout(()=>{
        fullfill("im keeping my words")
       //notfullfill("im not keeping my words")
    },2000)
    
})

Prmiss.then((abc)=>{console.log(abc)}).catch((h)=>{console.log(h)})
console.log( Prmiss)


