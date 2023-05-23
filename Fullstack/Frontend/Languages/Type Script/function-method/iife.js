//imediatly invoked function expression

((dt)=>{
    console.log("im in side of iffe ",dt.toLocaleTimeString())
})(new Date())