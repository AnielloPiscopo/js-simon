/* ---------------------------------------------------------------------
DICHIARAZIONE E INIZIALIZZAZIONI GLOBALI */

// * INIZIALIZZAZIONI

// ? PRELIEVO DAL DOM
const btnElement = document.querySelector('button');


// ? VARIABILI
let counter = 0;
let maxValue = 10;
let surpassedLimit = false;





/* ---------------------------------------------------------------------
CODICE PRINCIPALE */

// * EVENTI
btnElement.onclick = ()=>{  
    if(!surpassedLimit) {
        if(counter<maxValue){
            counter++;
            btnElement.innerHTML = counter;      
        } else {
            surpassedLimit = true;

            setTimeout(()=>{
                surpassedLimit = false;
                counter = 0;
                btnElement.innerHTML = 'Contatore resettato';      
            },3000)
        };
    }
}