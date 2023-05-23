interface Imyobjt{
    a:String,
    b:String,
    c?:String
}
interface o{
    [key:string]:any
}
let myobjt:Imyobjt={
    a: 'apple', b: 'boll'}
console.log(myobjt.a)
myobjt.c="cat"
