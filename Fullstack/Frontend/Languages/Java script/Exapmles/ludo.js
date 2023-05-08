let players = ['p1','p2']
let current_player = 'p1'
let dies = {}
let winner_points = '10'

const start = ()=>{
    current_player = 'p1'
    dies = {}

    players.forEach((player)=>{
        dies[player] = []
    })
}

start()

let die = document.getElementById('die')
die.addEventListener('click',()=>{

    for(i=0; i<players.length; i++){
        if (players[i]==current_player){

            roll( document.getElementById(players[i]) )

            if(i+1 == players.length){
                current_player = players[0]
            }
            else{
                current_player = players[i+1]
            }

            break
        }
    }

})

const roll = (player)=>{
    
    let num= Math.floor(Math.random()*6+1)
    die.textContent = num
    
    dies[player.id].push(num)
    
    let total = dies[player.id].reduce((sum,n)=>{
        return sum+n
    })
   
    if (total >= winner_points){
        setTimeout(()=>{
            player.innerHTML=total
            document.getElementById('winner_display').innerHTML = '<h1>'+'PLAYER '+(player.id).slice(1)+'</h1>'
            die.style.display = 'none'
            document.getElementById('reset').style.display = 'block'
        },1500)
    }
    else{
        setTimeout(()=>{
            die.innerHTML = '<h2><i class="fa fa-cube"></i></h2>NEXT'
            player.innerHTML=total

            players.forEach((player)=>{
                document.getElementById('name_'+player).style.color = 'black'
            })
            document.getElementById('name_'+current_player).style.color = 'rgb(255, 190, 0)'      
        },1500)
    }
}

const reset = ()=>{
    
    players.forEach((player)=>{
        document.getElementById('name_'+player).style.color = 'black'
    })
    document.getElementById('name_p1').style.color = 'rgb(255, 190, 0)'

    document.getElementById('winner_display').innerHTML = ''

    players.forEach((player)=>{
        document.getElementById(player).innerHTML = '0'
    })

    die.style.display = 'block'
    die.innerHTML = '<h2><i class="fa fa-cube"></i></h2>ROLL'
    document.getElementById('reset').style.display = 'none'

    start()

}