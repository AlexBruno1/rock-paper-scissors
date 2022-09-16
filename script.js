//script

let giocatore = 0;
let computer = 0;

function fine(giocatore, computer){
    const result = document.querySelector('#risultato');
    const principale = document.querySelector('#main');

    if(giocatore > computer){

        result.remove;
        result.textContent = "Hai vinto!" + " Punteggio finale: " + giocatore + " a " + computer
    }
    else {
        result.remove;
        result.textContent = "Hai perso!" + " Punteggio finale: " + giocatore + " a " + computer
    }

    /*
    const btn = document.createElement('button');
    btn.classList.add('score');
    btn.textContent = "gioca di nuovo";
    principale.append(btn);
    btn.addEventListener( 'click', () => {
        giocatore = 0;
        computer = 0;
        const player = document.querySelector('#giocatore');
        player.remove;
        player.textContent = "giocatore: " + giocatore;
        const pc = document.querySelector('#computer');
        pc.remove;
        pc.textContent = "computer: " + computer;
        result.remove;
        result.textContent= "Nuova partita, buona fortuna!";

    })
    */
    
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () =>{
    if(giocatore < 5 && computer < 5){
        //alert("rock");
        let round = playRound("rock", computerPlay());
        if(round == 1){
            giocatore ++;
            const player = document.querySelector('#giocatore');
            player.remove;
            player.textContent = "giocatore: " + giocatore;
            const result = document.querySelector('#risultato');
            result.remove;
            result.textContent = "Hai vinto!"

        }
        else if(round == -1){
            computer++;
            const pc = document.querySelector('#computer');
            pc.remove;
            pc.textContent = "computer: " + computer;
            const result = document.querySelector('#risultato');
            result.remove;
            result.textContent = "Hai perso!"
        }
        else if (round == 0){
            const result = document.querySelector('#risultato');
            result.remove;
            result.textContent = "E' un pareggio!"
        }
        if(giocatore == 5 || computer == 5)
            fine(giocatore, computer);
    }


});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () =>{
    if(giocatore < 5 && computer < 5){
        //alert("paper");
        let round = playRound("paper", computerPlay());
        if(round == 1){
            giocatore ++;
            const player = document.querySelector('#giocatore');
            player.remove;
            player.textContent = "giocatore: " + giocatore;
            const result = document.querySelector('#risultato');
            result.remove;
            result.textContent = "Hai vinto!"

        }
        else if(round == -1){
            computer++;
            const pc = document.querySelector('#computer');
            pc.remove;
            pc.textContent = "computer: " + computer;
            const result = document.querySelector('#risultato');
            result.remove;
            result.textContent = "Hai perso!"
        }
        else if (round == 0){
            const result = document.querySelector('#risultato');
            result.remove;
            result.textContent = "E' un pareggio!"
        }
        if(giocatore == 5 || computer == 5)
            fine(giocatore, computer);
    }
});

const scissorBtn = document.querySelector('#scissor');
scissorBtn.addEventListener('click', () =>{
    if(giocatore < 5 && computer < 5){
        //alert("scissor");
        let round = playRound("scissor", computerPlay());
        if(round == 1){
            giocatore ++;
            const player = document.querySelector('#giocatore');
            player.remove;
            player.textContent = "giocatore: " + giocatore;
            const result = document.querySelector('#risultato');
            result.remove;
            result.textContent = "Hai vinto!"

        }
        else if(round == -1){
            computer++;
            const pc = document.querySelector('#computer');
            pc.remove;
            pc.textContent = "computer: " + computer;
            const result = document.querySelector('#risultato');
            result.remove;
            result.textContent = "Hai perso!"
        }
        else if (round == 0){
            const result = document.querySelector('#risultato');
            result.remove;
            result.textContent = "E' un pareggio!"
        }
        if(giocatore == 5 || computer == 5)
            fine(giocatore, computer);
    }
});