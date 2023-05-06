let total=[]
function randomp1(){
    let total1= document.getElementById('total')
    
   let num= Math.floor(Math.random()*6+1)
  let ran= document.getElementById('random')
  ran.innerHTML=`${ num}`
  total.push(num)
  console.log(total)
  total1.innerHTML=total
}
