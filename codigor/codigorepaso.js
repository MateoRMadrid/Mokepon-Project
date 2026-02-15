function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "piedra 🪨"
    } else if (jugada == 2) {
        resultado = "papel 📄"
    } else if (jugada == 3) {
        resultado = "tijera ✂️"
    } else {
        resultado = "PERDER"
    }
    return resultado
}

// 1 es piedra, 2 es papel, 3 es tijera 
let jugador = 0
let pc = 0
let Ganaste = 0
let Perdiste = 0

while (Ganaste < 3 && Perdiste < 3) {
    pc = aleatorio(1, 3)
    jugador = prompt("cual quieres elegir: 1 para piedra, 2 para papel y 3 para tijera?")
    // alert("elegiste " + jugador)

    alert("pc elige: " + eleccion(pc))
    alert("tu elegiste: " + eleccion(jugador))

    // COMBATE
    if (pc == jugador) {
        alert("EMPATE")
    } else if (jugador == 1 && pc == 3) {
        alert("GANASTE")
        Ganaste = Ganaste + 1
    } else if (jugador == 2 && pc == 1) {
        alert("GANASTE")
        Ganaste = Ganaste + 1
    } else if (jugador == 3 && pc == 2) {
        alert("GANASTE")
        Ganaste = Ganaste + 1
    } else {
        alert("PERDISTE")
        Perdiste = Perdiste + 1
    }
}
alert("GANASTE " + Ganaste + " VECES. PERDISTE " + Perdiste + " VECES.")