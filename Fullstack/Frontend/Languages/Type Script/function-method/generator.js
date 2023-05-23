function* lokesh(){
    yield "1 pice cake "
    yield "two pice cake u have taken"
    yield "3 pice cake u have taken"
    yield "4 pice cake u have taken"
}
let asha=lokesh()
console.log(asha.next())
console.log(asha.next())
console.log(asha.next())
console.log(asha.next())
console.log(asha.next())
console.log(lokesh())