const WINNENDECOMBINATIES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
const O_speler = "O"
const X_speler = "X"
const winBericht = document.getElementById("winbericht")
const statusBericht = document.getElementById("statusBericht")
const opnieuwknop = document.getElementById("opnieuw-knop")
const popupGewonnen = document.querySelector(".popup-gewonnen")

let vakjes = Array.from(document.querySelectorAll(".vak"))
let opties = ["", "", "", "", "", "", "", "", ""]
let huidigeSpeler = X_speler
let telZetten = 0

function startSpel () {
    vakjes.forEach(vak => vak.addEventListener("click",vakgeklikt, {once: true})) // Elke vakje mag je 1 keer klikken
}
 
function vakgeklikt (event) {
    const index = event.target.id;
    if(telZetten < 9) {                    // Vakje wordt gevult zolang er nog geen 9 zetten zijn gedaan
        opties[index] = huidigeSpeler;
        event.target.innerText = huidigeSpeler
        
        telZetten++
        eindeSpel()                     // check eindeSpel
        
        if (huidigeSpeler == O_speler) {
            huidigeSpeler = X_speler      // Wisselspeler
        }
        else {huidigeSpeler = O_speler}
    }
    statusBericht.innerText = `${huidigeSpeler} is aan zet!`
}

function eindeSpel() {
    if (spelerWint() !== false) {
        winBericht.innerText = `${spelerWint()} wint!`    
        popupGewonnen.classList.add("show")
        }
    else if (telZetten == 9) {                                  // 9 zetten zonder winst is altijd gelijkspel
        winBericht.innerText = `Gelijkspel!`               
        popupGewonnen.classList.add("show")
        }
    else {
        return
    }
    
}

function spelerWint() {
    for (const conditie of WINNENDECOMBINATIES) {       // checkt of de index in een winnende combinatie gelijk zijn
        let [a, b, c] = conditie

        if (opties[a] && opties[a] == opties[b] && opties[a] == opties[c]) {
            return opties[a]
        }
    }
    return false
}

opnieuwknop.addEventListener("click", opnieuw)

function opnieuw() {                              // Zet spel terug in begin staat
    huidigeSpeler = X_speler
    popupGewonnen.classList.remove("show")
    opties = ["", "", "", "", "", "", "", "", ""]
    telZetten = 0
    vakjes.forEach(vak => {
        vak.innerText = ""
        vak.removeEventListener("click", vakgeklikt) 
    })
    statusBericht.innerText = `${huidigeSpeler} is aan zet!`
    startSpel()
}

startSpel()
