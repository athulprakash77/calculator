add2num=(a,b)=>{

    var c=a+b
    return c
}

sub2num=(a,b)=>{

    var c=a-b
    return c
}

mul2num=(a,b)=>{

    var c=a*b
    return c
}

div2num=(a,b)=>{

    var c=a/b
    return c
}

addBtnEvent=(a,b)=>{

    var x=parseInt(document.getElementById("num 1").value)
    var y=parseInt(document.getElementById("num 2").value)
    var z=add2num(x,y)
document.getElementById("result").innerText=z
}

subBtnEvent=(a,b)=>{

    var x=parseInt(document.getElementById("num 1").value)
    var y=parseInt(document.getElementById("num 2").value)
    var z=sub2num(x,y)
document.getElementById("result").innerText=z


}

mulBtnEvent=(a,b)=>{

    var x=parseInt(document.getElementById("num 1").value)
    var y=parseInt(document.getElementById("num 2").value)
    var z=mul2num(x,y)
document.getElementById("result").innerText=z


}

divBtnEvent=(a,b)=>{

    var x=parseInt(document.getElementById("num 1").value)
    var y=parseInt(document.getElementById("num 2").value)
    var z=div2num(x,y)
document.getElementById("result").innerText=z


}