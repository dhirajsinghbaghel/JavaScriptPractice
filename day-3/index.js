function printvalue(){


var rangevalue = document.getElementById("rangeINput").value;
var number = document.getElementById("number");
number.innerHTML= rangevalue
}

function addInputText() {
    alert("clicked")
     document.getElementById('input').value = "Text added";
}

const result=()=>{
   var input = document.getElementById("input")
   var resultText = document.getElementById("resulttext");
   resultText.innerHTML= input.value;
}