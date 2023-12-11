let Vitorias = "90"
let Derrotas = "30"

switch (vitorias){

  case "Ferro":
    console.log("Se vitórias for menor do que 10 = Ferro");
    break;
  case "Bronze":
    console.log("Se vitórias for entre 11 e 20 = Bronze");
    break;
  case "Prata":
    console.log("Se vitórias for entre 21 e 50 = Prata");
    break;
  case "Ouro":
    console.log("Se vitórias for entre 51 e 80 = Ouro");
    break;
  case "Diamante":
    console.log("Se vitórias for entre 81 e 90 = Platina");
    break;
    case "Lendário":
    console.log("Se vitórias for entre 91 e 100 = Lendário")    
    break;
  case "Imortal":
    console.log("Se vitórias for maior ou igual a 101 = Imortal");
    break;

}

function subtraçao(numero1, numero2) {
    return numero1 - numero2;
  }
  
  let resultado = subtraçao(90, 30); 
  console.log("A subtração é: " + resultado); 
  