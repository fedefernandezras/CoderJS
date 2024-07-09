console.log("principio")

function comentario() {
    alert("ya veo.. ")
}

function saludo(parametro1, parametro2) {
    alert(parametro1 + parametro2 + " !")
}


let usuario = prompt("¿cual es tu nombre?")

saludo("un gusto en conocerte ", usuario)

let pordia = Number(prompt("¿cuantas maderas cortas por dia?"))
console.log("corta " + pordia + " madera/s por dia")

if (isNaN(pordia)) {
    alert("el valor ingresado es incorrecto")
}
else if (pordia > 25) {
    alert("cortas muchisimas maderas")
}
else if (pordia > 15) {
    alert("cortas una cantidad aceptable maderas")
}
else if (pordia >= 1) {
    alert("cortas muy pocas maderas")
}
else if (pordia <= 0) {
    alert("cortas... nada, muy mal")
}

comentario()

let comp = Number(prompt("¿cuantos compañeros tienes?"))
console.log("trabajan cortando madera " + (1 + comp) + " persona/s")

comentario()

for (let i = 0; i < comp; i++) {
    let nombre = prompt("nombre?")
    let cantidad = Number(prompt("¿cuantas corta por dia?"))
    let laboral = Number(prompt("¿cuantos dias trabajo?"))

    alert(nombre + " en total corto " + (cantidad * laboral) + " madera/s")
    console.log(nombre + " corto " + (cantidad * laboral) + " madera/s en " + laboral + " dia/s.")
}

comentario()

saludo("es todo por ahora, me despido por el momento ", usuario)

console.log("final")