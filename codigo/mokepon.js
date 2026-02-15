let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function empezarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonfuego = document.getElementById("boton-fuego")
    botonfuego.addEventListener("click", ataquefuego)
    let botonagua = document.getElementById("boton-agua")
    botonagua.addEventListener("click", ataqueagua)
    let botontierra = document.getElementById("boton-tierra")
    botontierra.addEventListener("click", ataquetierra)

}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let inputLangostelvis = document.getElementById("Langostelvis")
    let inputTucapalma = document.getElementById("Tucapalma")
    let inputPydos = document.getElementById("Pydos")
    let mascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked) {
        alert("Elegiste a Hipodoge")
        mascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        alert("Elegiste a Capipepo")
        mascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        alert("Elegiste a Ratigueya")
        mascotaJugador.innerHTML = "Ratigueya"
    } else if (inputLangostelvis.checked) {
        alert("Elegiste a Langostelvis")
        mascotaJugador.innerHTML = "Langostelvis"
    } else if (inputTucapalma.checked) {
        alert("Elegiste a Tucapalma")
        mascotaJugador.innerHTML = "Tucapalma"
    } else if (inputPydos.checked) {
        alert("Elegiste a Pydos")
        mascotaJugador.innerHTML = "Pydos"
    } else  {
        alert("Elige Una Mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,6)
    let MascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1) {
        alert("El enemigo eligio Hipodoge")
        MascotaEnemigo.innerHTML = "Hipodoge"                 
    } else if (mascotaAleatorio == 2) {
        alert("El enemigo eligio Capipepo")
        MascotaEnemigo.innerHTML = "Capipepo"
    } else if (mascotaAleatorio == 3) {
        alert("El enemigo eligio Ratigueya")
         MascotaEnemigo.innerHTML = "Ratigueya"
    } else if (mascotaAleatorio == 4) {
        alert("El enemigo eligio Langostelvis")
        MascotaEnemigo.innerHTML = "Langostelvis"
    } else if (mascotaAleatorio == 5) {
        alert("El enemigo eligio Tucapalma")
        MascotaEnemigo.innerHTML = "Tucapalma"
    } else {
        alert("El enemigo eligio Pydos")
        MascotaEnemigo.innerHTML = "Pydos"
    }
} 

function ataquefuego() {
    ataqueJugador = "FUEGO 🔥"
    alert("Elegiste un ataque tipo FUEGO 🔥")
    ataqueAleatorioEnemigo()
    
}
function ataqueagua() {
    ataqueJugador = "AGUA 💧"
    alert("Elegiste un ataque tipo AGUA 💧")
    ataqueAleatorioEnemigo()

}
function ataquetierra() {
    ataqueJugador = "TIERRA 🌱"
    alert("Elegiste un ataque tipo TIERRA 🌱")
    ataqueAleatorioEnemigo()


}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO 🔥"
        alert("El enemigo eligio un ataque tipo FUEGO 🔥")
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA 💧"
        alert("El enemigo eligio un ataque tipo AGUA 💧")
    } else {
        ataqueEnemigo = "TIERRA 🌱"
        alert("El enemigo eligio un ataque tipo TIERRA 🌱")
    }
    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-Jugador")
    let spanVidasEnemigo = document.getElementById("vidas-Enemigo")

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if(ataqueJugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if(ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
}

// el operador AND = && es cuando las condiciones tienen que ser verdaderas para ser verdad
// el operador OR = || es cuando solo una de las condiciones tiene que ser verdadera 
// el operador NOT = ! es cuando cambia los papeles verdadero a falso y falso a verdadero 

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensaje")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "si tu mascota ataco con " + ataqueJugador + " , y la del enemigo ataco con " + ataqueEnemigo + "- " + resultado 

    sectionMensajes.appendChild(parrafo)

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// createElement es como en mi caso crear un parrafo con js 

// el document es entrar a el documento html que tenemos y trae varios elementos como "getElementById"

// getElementById es la busqueda de los Id que hay en el documento 

// addEventListener es lo que va a escuchar la pc

window.addEventListener("load", empezarJuego)