// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
//da indovinare sono stati individuati.


document.getElementById('startButton').addEventListener('click',


function() {
    
    document.getElementById('containerNumero').innerHTML = '';

    for (let i=0; i < 5; i++) {

        const divNumero = document.createElement('div');
    
        divNumero.classList.add('numero')
    
        divNumero.innerText = getRandomNumber(1, 100);
    
        document.querySelector('div#containerNumero').append(divNumero);
        
    }
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
