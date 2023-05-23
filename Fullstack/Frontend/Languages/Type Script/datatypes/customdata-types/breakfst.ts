class Breakfast{
    water:String
    dosa:String
    idly:String
    chatni:String
    constructor(){
        this.water="this is drinking water"
        this.dosa="we ate it"
        this.idly="made up of rice "
        this.chatni="its made up of peenut"
    }
    withWater(){
        console.log("we need water")
    }
}

let lokesh=new Breakfast()
console.log(lokesh)
