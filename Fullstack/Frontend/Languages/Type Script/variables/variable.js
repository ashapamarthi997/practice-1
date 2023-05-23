function variables(){
    var a=10;
    let b=20;
    const c=30;
         d=40;

    {
         var a=15;
         console.log (a);
         let b=25;
         console.log(b);
         console.log(c);
         
         console.log(d);
         d=45;
    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

}
variables();
console.log(d)