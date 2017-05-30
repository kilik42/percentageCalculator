var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById('xisWhatPercentageofY');

form.addEventListener('submit', function(event){
    //alert("we clicked something");
    
    event.preventDefault();
    //validation
    if(!numField1.value || !numField2.value){
        //console.log()
        alert("please enter values in the fields");
        
    }
    
    else{
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
    
        var result = x/y;
        var percent =result * 100;
        
        resultField.innerText = "answer: " + percent + "%";
        //alert(percent);
     
    }
    
    
});

//numField1.value = "hey bob";
//numField2.value = "test";
//resultField.value= "jason";
//resultField.innerText = "test2"