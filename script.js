let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let historyList = document.getElementById('history-list');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if (e.target.id == 'historybtn') {
            return;
        }
        
        
        if (e.target.innerHTML == '=') {
           let calculation = string;
           let result = eval(string);

           let item = document.createElement('li');
           item.textContent = calculation + " = " + result;
           historyList.appendChild(item);

           string = result.toString();
           input.value = string;
        }



        else if(e.target.innerHTML == 'AC'){
            string="";
            input.value = string;
        }



        else if(e.target.innerHTML == 'DEL'){
            string =string.substring(0,string.length-1)
        input.value = string;

    }

    
         else if (e.target.innerHTML == '%') {
              string += "/100";
                input.value = string;
             }

        else{
             string += e.target.innerHTML;
        input.value = string;
        }   
    })
})
let historybtn = document.getElementById('historybtn');
let historybox = document.getElementById('historybox');

  historybtn.addEventListener('click', () => {
    if (historybox.style.display == 'none') {
        historybox.style.display = 'block';
    } else {
        historybox.style.display = 'none';
    }
  });
  
document.addEventListener("keydown", function(e) {

    if (e.key >= "0" && e.key <= "9" || "+-*/.".includes(e.key)) {
        string += e.key;
        input.value = string;
    }

    else if (e.key == "Enter") {
        document.querySelector(".equalbtn").click();
    }

    else if (e.key == "Backspace") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    }

    else if (e.key == "Escape") {
        document.querySelector(".operator").click();
    }
4
});
