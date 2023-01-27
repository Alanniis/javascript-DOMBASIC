const cal1 = document.querySelector('#calculo1');
const cal2 = document.querySelector('#calculo2');
const form = document.querySelector('#form');
const btnCal = document.querySelector('#btnCalcular');
const res = document.querySelector('#pr');


form.addEventListener('submit', calcular);


function calcular(event){
 event.preventDefault();
 const suma =Number(cal1.value) + parseInt(cal2.value);
 const suma2 =+cal1.value + +cal2.value;

    res.innerHTML = suma2;    

    
}

