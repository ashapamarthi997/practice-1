let dataApi=fetch('https://fakestoreapi.com/products')
console.log(dataApi)
dataApi
.then((abc)=>{return abc.json()})
.then((again)=>{
    console.log(again)
})