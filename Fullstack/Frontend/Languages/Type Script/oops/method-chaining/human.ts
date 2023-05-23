class Human{
    eyes:String
    nose:Number
    ears:String
    witheyes(){
        console.log("wecan watch")
        return this
    }
    withnose(){
        console.log("wecan breath")
    }
}
let lokes=new Human()
lokes.witheyes().withnose()