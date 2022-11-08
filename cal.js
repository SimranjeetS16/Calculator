let string = "";
let result ="";
var dotReset=true;
let decimalCount = "";
let numbers = document.querySelectorAll(".button_number");
let op = document.querySelectorAll(".operator");

function color(){
    document.querySelector(".output").style.color = "green";
}
function color2(){
    document.querySelector(".output").style.color = "rgb(9, 9, 9)";
}
function input(){
    document.querySelector(".output").innerHTML = string;
}

for(let index = 0; index < numbers.length; index++){
    let button = numbers[index];
    button.addEventListener('click', e=>{
        
        if(e.target.innerHTML == "="){
            
            if(string.includes("*") == true || string.includes("÷") == true || string.includes("-") == true || string.includes("+") == true){
                if(string.endsWith("*") == true || string.endsWith("÷") == true || string.endsWith("-") == true || string.endsWith("+") == true){
                    alert("Invalid Format Used")
                    return;
                }
                else{
                    string = string.replace(/÷/g, "/");
                    string = eval(string);
                    if (string == Infinity || string == "-Infinity"){
                    string = "∞"
                    alert("Divide by 0 = Infinity")
                    }
                    string = string.toString();
                    result = string ;
        
                    document.querySelector(".output").innerHTML = result;
                    if(string == result){
                        color();
                    }
                    
                    decimalCount = 0;
                }
            }
             
            else{
                return;
            }
            
        }
        else if(e.target.innerHTML == "."){
            decimalCount ++;
            console.log(decimalCount);
            if(string == ""){
            string = "0"+".";
            
            color2();
            input();
            }
            else if(document.querySelector(".output").innerHTML == result){
                string = "0"+".";
               color2();
                input();
            }
            else if(string.endsWith("÷") == true || string.endsWith("*") == true || string.endsWith("-") == true || string.endsWith("+") == true){
                string += "0" + ".";
                color2();
                input();
            }
            else{
                if(decimalCount <= 1){
                string += e.target.innerHTML;
                color2();
                input();
                }
                
                else if(decimalCount > 1){
                    return;
                }
            }
        }

        else if(e.target.innerHTML == "AC"){
            string = "0";
            decimalCount = 0;
            color2();
            input();
        }

        else if(e.target.innerHTML == "DEL"){
            string = string.toString();
            
            if(string){
            string = string.substring(0,string.length-1);
            color2();
            input();
            }
            if(string == ""){
                // string = "0";
                decimalCount = 0;
                // color2();
                // input();
            }
            else if(string.includes(".") == false){
                decimalCount = 0;
            }
        }
        
        
        
        else if(e.target.innerHTML == "0" && string == ""){
            string = "0";
            input();
        }
        
        else{
            if(string == "∞"){
                
                string = e.target.innerHTML;
                color2();
                input();
            }

            else if(document.querySelector(".output").innerHTML == result){
                string = e.target.innerHTML;
                color2();
                input();
            }

            else if(string == "0"){
                string = e.target.innerHTML;
                color2();
                input();
            }

            

            else{
            string += e.target.innerHTML;
            color2();
            input();
            }
        }
    });
}
 

for(let j=0;j<op.length;j++){
    let operator = op[j];
    operator.addEventListener('click', e=>{
        let value = e.target.innerHTML;
        let operators = "+*÷";
        if( string.length == 0 && operators.indexOf(value) != -1 ){
            return;
        }
        
        else if(string.endsWith("*") == true && e.target.innerHTML == "-"){
            string +=e.target.innerHTML;
            // string = string.replace(/[-]+([-])/g, "$1");
            input();
        }
        else if(string.endsWith("÷") == true && e.target.innerHTML == "-"){
            string +=e.target.innerHTML;
            // string = string.replace(/[-]+([-])/g, "$1");
            input();
        }
        
        else if(string == "∞"){
            return;
        }
        
        else if(string == "-"){
            return;
        }
        
        else{
            string += e.target.innerHTML;
            string = string.replace(/[*÷+-]+([*÷+-])/g, "$1");
            decimalCount = 0;
            string = string.toString();
            color2();
            input();
        }
            
        
    })
}
window.addEventListener("keydown", (e) => {
    if (
      e.key == "0" ||
      e.key == "1" ||
      e.key == "2" ||
      e.key == "3" ||
      e.key == "4" ||
      e.key == "5" ||
      e.key == "6" ||
      e.key == "7" ||
      e.key == "8" ||
      e.key == "9" ||
      e.key == "." 
    ) {
      clickButtonEl(e.key);
      console.log(e.key)
    } 
    else if (e.key == "+" || e.key == "-" ||e.key == "*" ) {
      clickOperation(e.key);
    
    } 
    else if (e.key == "/"){
        clickOperation("÷");
    }
    else if(e.key == 'Enter' || e.key == '='){
        clickButtonEl("=");

    } 
    else if(e.key == "Backspace"){
        clickButtonEl("DEL");
    } 
    else if(e.key == "Delete"){
        clickButtonEl("AC");
    }

  });
  function clickButtonEl(key) {
    numbers.forEach((button) => {
      if (button.innerText == key) {
        button.click();
      }
      
      
    });
  }
  function clickOperation(key) {
    op.forEach((operation) => {
      if (operation.innerText == key) {
        operation.click();
      }
    });
  }

