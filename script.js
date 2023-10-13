const p=document.getElementById('cnt1')
let c=0;
function increment()
{
    if (c<20)
    {
        c=c+1
        p.textContent=c;  
    }
   else{
    alert("cross limit")
   }
}
 function decrement()
{
    if(c>0)
    {
        c=c-1;
        p.textContent = c ;
    }
    else{
        alert ("below the limit");
    }
}
function reset()
{
    if(c!=0)
    {
        c=c*0;
        p.textContent=c;
    }
    else{
        alert("Already Reset")
    }
}


