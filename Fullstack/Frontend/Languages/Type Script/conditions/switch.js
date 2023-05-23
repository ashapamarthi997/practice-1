function randomDays(){ 
    let myh1= document.getElementById('root')
  
    let random=Math.floor(Math.random()*7+1)
    switch(random){
        case 1:
            myh1.innerHTML="monday"
            break;
            case 2:
            myh1.innerHTML="tusday"
            break;
            case 3:
            myh1.innerHTML="wednesday"
            break;
            case 4:
            myh1.innerHTML="thirsday"
            break;
            case 5:
            myh1.innerHTML="friday"
            break;
            case 6:
            myh1.innerHTML="saturday"
            break;
            case 7:
            myh1.innerHTML="sunday"
            break;

          
    }
   
 }