function ClearScreen(){
    document.getElementById("result").value = "";
}
// the ClearScreen() function declares the value of result as an empty string 

function display(value){
    document.getElementById("result").value += value;
}
// the display() function displays the value of the clicked buttons on the display-box

function calculate(){
    var r = document.getElementById("result").value ;
    var b = eval(r);
    document.getElementById("result").value = b;
    
}
/*
() eval() function evaluates javascript code and executes it
--------------------------------------------------------------
 testing the eval() function 
 -------------------------------------------------------------
 var b = 49/7;
 var c = eval(b);
 console.log(c);
 -------------------------------------------------------------
 **/
