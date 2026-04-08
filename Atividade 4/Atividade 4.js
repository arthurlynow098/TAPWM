function jogarPedraPapelTesoura() {
    let escolhaUsuarioStr = prompt("Escolha sua jogada: digite 'pedra', 'papel' ou 'tesoura'").toLowerCase().trim();
    
    if (escolhaUsuarioStr !== "pedra" && escolhaUsuarioStr !== "papel" && escolhaUsuarioStr !== "tesoura") {
        alert("Escolha inválida! Atualize a página e tente novamente.");
        return;
    }

    let escolhaUsuarioNum;
    if (escolhaUsuarioStr === "pedra") escolhaUsuarioNum = 1;
    else if (escolhaUsuarioStr === "papel") escolhaUsuarioNum = 2;
    else if (escolhaUsuarioStr === "tesoura") escolhaUsuarioNum = 3;

    let escolhaComputadorNum = Math.floor((Math.random() * 3) + 1);
    let escolhaComputadorStr = "";
    
    if (escolhaComputadorNum === 1) escolhaComputadorStr = "pedra";
    else if (escolhaComputadorNum === 2) escolhaComputadorStr = "papel";
    else if (escolhaComputadorNum === 3) escolhaComputadorStr = "tesoura";

    let resultado = "";

    if (escolhaUsuarioNum === escolhaComputadorNum) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuarioStr === "pedra" && escolhaComputadorStr === "tesoura") || // Pedra quebra tesoura
        (escolhaUsuarioStr === "tesoura" && escolhaComputadorStr === "papel") || // Tesoura corta papel
        (escolhaUsuarioStr === "papel" && escolhaComputadorStr === "pedra")      // Papel cobre a pedra
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "O computador venceu!";
    }

    alert(`Sua escolha: ${escolhaUsuarioStr}\nEscolha do Computador: ${escolhaComputadorStr}\n\n=> ${resultado}`);
}

jogarPedraPapelTesoura();