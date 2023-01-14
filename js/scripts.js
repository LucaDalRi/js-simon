// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
//da indovinare sono stati individuati.

let numeriRandom = [];

let numeriInseriti = [];

document.getElementById('startButton').addEventListener('click',

function() {
    
    document.getElementById('containerNumero').innerHTML = '';
    
    setTimeout(svuotaNumeri, 5000);

    for (let i=0; i < 5; i++) {

        let randN = getRandomNumber(1, 100);

        numeriRandom.push(randN);

        const divNumero = document.createElement('div');
    
        divNumero.classList.add('numero')
    
        divNumero.innerText = randN;
    
        document.querySelector('div#containerNumero').append(divNumero);
    }

    
    console.log(numeriRandom);
    
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function svuotaNumeri() {
    document.getElementById('containerNumero').innerHTML = '';
}

function chiediUtente() {

    alert('Ora dovrai inserire i numeri dall`alto in basso!');

    for(i=0; i < 5; i++) {

        const nPromtUtente = parseInt(prompt('Inserisci il ' + (i + 1) + '° numero'));

        numeriInseriti.push(nPromtUtente);

    }
    console.log(numeriInseriti, 'Numeri inseriti utente array');

    checkQuantiNumeri();
    checkPosizioneNumeri()
}

document.getElementById('startButton').addEventListener('click', 

    function() {
        setTimeout(chiediUtente, 6000);
    }
)

let numeriGiusti = 0;

let numeriSbagliati = 0;

function checkQuantiNumeri() {

    for (i = 0; i < 5; i++) {

        if (numeriInseriti[i] == numeriRandom[i]) {
            numeriGiusti++

        }
        else {
            numeriSbagliati++
        }
    }
    
    console.log('Hai indovinato ' + numeriGiusti + ' numeri!');
    console.log('Hai sbagliato ' + numeriSbagliati + ' numeri.');
    
}

function checkPosizioneNumeri() {
    
    for (i = 0; i < 5; i++) {
        
        if (numeriInseriti[i] == numeriRandom[i]) {
            
            console.log('Il numero in posizione '+ (i + 1) +' è corretto');


        }
        else {
            console.log('Il numero in posizione '+ (i + 1) +' non corretto');
        }

    }

}