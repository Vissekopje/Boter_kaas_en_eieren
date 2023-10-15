// We hebben een array nodig van 9 vakjes //

// We moeten wat constants aanmaken: de winnende combinaties, verschillende spelers //

// We hebben een functie nodig die checkt of een zet wint //

// Functie die een vakje vult met een X of O per speler //

// We hebben een functie nodig die er voor zorgt dat de beurten omwissellen als er geen winnaar of gelijkspel is //

// Functie die ervoor zorgt dat wanneer je op nog een keer? klikt het spel opnieuw wordt geladen (leeg maken array etc.)//

const WINNENDECOMBINATIES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
const O_speler = "O"
const X_speler = "X"
const winBericht = document.getElementById("winbericht")
const popupGewonnen = document.getElementById("popup-gewonnen")
const vakjes = Array.from(document.querySelectorAll(".vak"))
const opnieuwknop = document.querySelector("#opnieuw-knop")
let opties = ["", "", "", "", "", "", "", "", ""]
let huidigeSpeler = X_speler
console.log(huidigeSpeler)

function startSpel () {
    vakjes.forEach(vak => vak.addEventListener("click",vakgeklikt, {once: true}) // kijk of vak geklikt wordt
    )}

function vakgeklikt (e) {
    const index = e.target.id;

    if(!opties[index]) {
        opties[index] = huidigeSpeler;
        e.target.innerText = huidigeSpeler
    
    console.log(eindeSpel())
    console.log(spelerWint())
    
        if (huidigeSpeler == O_speler) {
            huidigeSpeler = X_speler
        }
        else {huidigeSpeler = O_speler}
    }
}
function eindeSpel() {
    if (spelerWint() !== false) {
        winBericht.innerText = `${spelerWint()} wint!`
    const popupGewonnen = document.querySelector(".popup-gewonnen")
    popupGewonnen.classList.add("show")
    }
    else {
        return
    }
    
}

function spelerWint() {
    for (const conditie of WINNENDECOMBINATIES) {
        let [a, b, c] = conditie

        if (opties[a] && opties[a] == opties[b] && opties[a] == opties[c]) {
            return opties[a]
        }
    }
    return false
}


opnieuwknop.addEventListener("click", opnieuw)

function opnieuw() {
    let opties = ["", "", "", "", "", "", "", "", ""]
    vakjes.forEach ( box => {
        box.innerText = ""
    })
    currentPlayer = X_speler
}



startSpel()