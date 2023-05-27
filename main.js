function Add(){
   var No1 = Number(document.getElementById("No1").value);
   var No2 = Number(document.getElementById("No2").value);
   var Sum = No1 + No2;
    
    console.log(Sum);
    document.getElementById("OUTPUT").innerHTML = Sum;
}
function Sub(){
    var No1 = Number(document.getElementById("No1").value);
    var No2 = Number(document.getElementById("No2").value);
    var Sum = No1 - No2;
     
     console.log(Sum);
     document.getElementById("OUTPUT").innerHTML = Sum;
}
function Mult(){
    var No1 = Number(document.getElementById("No1").value);
    var No2 = Number(document.getElementById("No2").value);
    var Sum = No1 * No2;
     
     console.log(Sum);
     document.getElementById("OUTPUT").innerHTML = Sum;
}
function Div(){
    var No1 = Number(document.getElementById("No1").value);
    var No2 = Number(document.getElementById("No2").value);
    var Sum = No1 / No2;
     
     console.log(Sum);
     document.getElementById("OUTPUT").innerHTML = Sum;
}