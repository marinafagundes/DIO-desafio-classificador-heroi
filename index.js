let nomeHeroi = "Marina";
let experienciaHeroi = 12000;
let nivel;
let caso; 

if (experienciaHeroi <= 1000) {
    caso = 1;
} else if (experienciaHeroi > 1000 && experienciaHeroi <= 2000) {
    caso = 2;
} else if (experienciaHeroi > 2000 && experienciaHeroi <= 5000) {
    caso = 3;
} else if (experienciaHeroi > 5000 && experienciaHeroi <= 7000) {
    caso = 4;
} else if (experienciaHeroi > 7000 && experienciaHeroi <= 8000) {
    caso = 5;
} else if (experienciaHeroi > 8000 && experienciaHeroi <= 9000) {
    caso = 6;
} else if (experienciaHeroi > 9000 && experienciaHeroi <= 10000) {
    caso = 7;
} else {
    caso = 8;
}

//classes: menor ou igual a 1000 (ferro), 1001 - 2000 (bronze), 
//2001 - 5000 (prata), 5001 - 7000 (ouro), 7001 - 8000 (platina),
//8001 - 9000 (ascendente), 90001 - 10000 (imortal) e
//maior ou igual a 10001 (radiante)

//saida: o heroi de nome "nome" esta no nível de "nivel"

switch(caso) {
    case 1:
    nivel = "Ferro";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel);
    break;

    case 2:
    nivel = "Bronze";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel);
    break;

    case 3:
    nivel = "Prata";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel);
    break;

    case 4:
    nivel = "Ouro";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel);
    break;

    case 5:
    nivel = "Platina";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel);
    break;

    case 6:
    nivel = "Ascendente";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel);
    break;

    case 7:
    nivel = "Imortal";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel);
    break;

    case 8:
    nivel = "Radiante";
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel);
    break;
}