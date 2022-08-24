alert("JUEGO N° 1: Juego Adivina el Numero");
alert("PASO 1: El juego se juega con 2 jugadores donde el Jugador 1 debe ingresar un número del 0 al 20 sin que el jugador 2 lo vea");
let numerAdivinar = parseInt(prompt("JUGADOR 1: Ingrese un Numero del 0 al 20"));
alert("PASO 2: El jugador 2 debe ingresar un número, tiene 5 posibilidades de acertar el numero y ganar el juego");
let numeroAsar = parseInt(prompt("JUGADOR 2: Ingrese nuemero del 0 al 20"));
for(let i = 1; i<=5; i++){
    if(numerAdivinar !== numeroAsar){
        alert("Numero incorrecto vuela a intentarlo, INTENTO " + i + " de 5");
        let cont = i;
        if(cont===5){
            alert("LO SIENTO JUGADOR 2 PERDIO EL JUEGO");
            break
        }
        numeroAsar = parseInt(prompt("JUGADOR 2: Ingrese nuemero del 0 al 20"));
        
    }else{
        alert("FELICITACIONES JUGADOR 2 ADIVINASTE EL NUMERO");
        break
    }
}
alert("JUEGO N° 2: Adivinanza");
alert("De que color es el caballo blanco de Tito");
alert("La respuesta debe escribirse toda en minuscula");
let respuesta =prompt("Ingrese color");
let total = 0;
while (respuesta !== "blanco"){
    total++;
    alert("Color incorrecto vuela a intentarlo, INTENTO " + total);
    respuesta =prompt("Ingrese color");
}
alert("FELICITACIONES RESPUESTA CORRECTA");
total++;
alert("Adivinaste el color en un total de "+total+ " intentos.");