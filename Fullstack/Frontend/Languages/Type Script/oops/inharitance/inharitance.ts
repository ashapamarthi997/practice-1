class Company{
    name
    age
    id
    constructor(){
        this.age=12
        this.id=123445
        this.name="lokesh"
    }
}
class Team1 extends Company{
}
let abc=new Team1()
console.log(abc.name)