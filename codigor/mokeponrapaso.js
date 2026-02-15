let ataqueJugador
let ataqueEnemigo

function empezarJuego() {
    let botonMascotaJugador = document.getElementById("boton-de-mascota")
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
    let spanMascotaJugador = document.getElementById("Mascota-Jugador")

    if (inputHipodoge.checked) {
        alert("Elegiste a Hipodoge")
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        alert("Elegiste a Capipepo")
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        alert("Elegiste a Ratigueya")
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if (inputLangostelvis.checked) {
        alert("Elegiste a Langostelvis")
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if (inputTucapalma.checked) {
        alert("Elegiste a Tucapalma")
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if (inputPydos.checked) {
        alert("Elegiste a Pydos")
        spanMascotaJugador.innerHTML = "Pydos"
    } else  {
        alert("Elige Una Mascota")
    }

    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 6)
    let seleccionarMascotaEnemigo = document.getElementById("Mascota-Enemigo")

    if (mascotaAleatorio == 1) {
        alert("El enemigo eligio Hipodoge")
        seleccionarMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2) {
        alert("El enemigo eligio Capipepo") 
        seleccionarMascotaEnemigo.innerHTML = "Capipepo"
    } else if (mascotaAleatorio == 3) {
        alert("El enemigo eligio Ratigueya")
        seleccionarMascotaEnemigo.innerHTML = "Ratigueya"
    } else if (mascotaAleatorio == 4) {
        alert("El enemigo eligio Langostelvis")
        seleccionarMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (mascotaAleatorio == 5) {
        alert("El enemigo eligio Tucapalma")
        seleccionarMascotaEnemigo.innerHTML = "Tucapalma"
    } else {
        alert("El enemigo eligio Pydos")
        seleccionarMascotaEnemigo.innerHTML = "Pydos"
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
        alert("El enemigo elegio un ataque tipo FUEGO 🔥")
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA 💧"
        alert("El enemigo elegio un ataque tipo AGUA 💧")
    } else {
        ataqueEnemigo = "TIERRA 🌱"
        alert("El enemigo elegio un ataque tipo TIERRA 🌱")
    }    
    combate() 
}

function combate() {
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱") {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥") {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧") {
        crearMensaje("GANASTE")
    } else {
        crearMensaje("PERDISTE")
        }
}

function crearMensaje(resultado) {
    let seleccionarMensaje = document.getElementById("mensaje")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota lanzo un ataque tipo " +  ataqueJugador + ", y tu enemigo lanzo uno tipo " + ataqueEnemigo + "- " + resultado

    seleccionarMensaje.appendChild(parrafo)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load" , empezarJuego)