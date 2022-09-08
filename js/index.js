let b=document.getElementById("op1");
let c=document.getElementById("op2");
c.addEventListener("input",store2);
b.addEventListener("input",store);
let opr1,opr2;
function store(e){
    opr1=e.target.value;
    console.log(opr1);
}
function store2(e){
    opr2=e.target.value;
}
let res;
function calculate(id){
    if(id=="add"){
        res=parseInt(opr1)+parseInt(opr2);
    }
    else if(id=="sub"){
        res=parseInt(opr1)-parseInt(opr2);
    }
    else if(id=="mul"){
        res=parseInt(opr1)*parseInt(opr2);
    }
    else if(id=="div"){
        res=parseInt(opr1)/parseInt(opr2);
    }
    document.getElementById("result").value=res;
}