var keys = document.querySelectorAll('#calculator span');

var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
var ind1 = true;
var ind2 = 0;
var ind3 = false;

for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;
        var total;
        if (btnVal == '=') {
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
            equation = equation.replace(/.$/, '');
            if (equation) {
                total = eval(equation);
                if (total.toString().indexOf('.') != -1)
                total = total.toFixed(2);
                input.innerHTML = total;
            }
            ind3 = true;
            decimalAdded = false;
        }
        else if (operators.indexOf(btnVal) > -1) {
            ind3 = false;
            var lastChar = inputVal[inputVal.length - 1];
            if (inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal;
            else if (inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;
            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }
            ind2 = inputVal.length+1;
            ind1 = false;
            decimalAdded = false;

        }      
        else if (btnVal == '.') {
            if (!decimalAdded) {
                if(!ind1)
                {
                    input.innerHTML +=0;     
                    ind1 = true               
                }
                input.innerHTML += btnVal;
                decimalAdded = true;
            }
            ind1 = true;
        }
        else if (btnVal == 'C') {
                input.innerHTML = '0';
                ind2=0;
                decimalAdded = false;
        }
        else {
                ind1 = true
                if(inputVal.length == ind2+1 && inputVal[ind2] == '0' && inputVal[ind2+1] != '.')
                {
                    
                    input.innerHTML = input.innerText.slice(0,-1);
                }
                if(ind3)
                {
                    input.innerHTML = btnVal;
                    ind2=0;
                    ind3=false
                    inputVal = '';
                }
                else
                    input.innerHTML += btnVal;
                console.log(inputVal.length)
                console.log(ind2+1)
                
        }
        e.preventDefault();
    }
}





// let result = 1;
// const ts_3 = document.getElementById('ts_3')
// const ts_3_array = [2,3,4,5];
// for (let i = 0;i<ts_3_array.length;i++){
//     result *= ts_3_array[i] ;
// }
// ts_3.innerHTML = result;

// /////////////////////////////////////////////
// const locations = {
//     "Россия":"Москва",
//     "США":"Вашингтон",
//     "Казахстан":"НурСултан",
//     "Чехия":"Прага"
// }
// const ts_4 = document.getElementById('ts_4')
//  for(let key in locations){
//    console.log(key);
//    console.log(locations[key]);
//  }
//  ///////////////////////////////////////////
 