function ClearScreen(){
    document.getElementById("result").value = "";
}

function display(value){
    document.getElementById("result").value += value;
}

function calculate(){
    var r = document.getElementById("result").value ;
    var b = eval(r);
    document.getElementById("result").value = b;
    
}