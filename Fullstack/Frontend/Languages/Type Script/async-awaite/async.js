async function MmlifeEasy(){
    let dataApi=await fetch('https://fakestoreapi.com/products')
    dataApi=await dataApi.json()
    console.log(dataApi)

}
MmlifeEasy()

// let dataApi=fetch('https://fakestoreapi.com/products')
// console.log(dataApi)
// dataApi
// .then((abc)=>{return abc.json()})
// .then((again)=>{
//     console.log(again)
// })