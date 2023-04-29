let get_num = (btn)=>
{
     var n = btn.value ;
     on_display(n);
}
let on_display=(ch)=>
{

    display = document.getElementById("display");
     display.innerHTML+=ch;
    
}
let get_op=(btn)=>
{
    var op = btn.value ;
    on_display(op);
}
let calc=()=>
{
     display=document.getElementById("display");
     display.innerHTML=eval(display.textContent);
}

