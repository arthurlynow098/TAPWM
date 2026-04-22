function validarTriangulo() {
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        exibir("Erro: Insira valores numéricos!", "erro");
        return;
    }

    // Regras matemáticas exatas da imagem
    const r1 = Math.abs(b - c) < a && a < (b + c);
    const r2 = Math.abs(a - c) < b && b < (a + c);
    const r3 = Math.abs(a - b) < c && c < (a + b);

    if (r1 && r2 && r3) {
        let tipo = "";
        if (a === b && b === c) tipo = "Equilátero (Todos os lados iguais)";
        else if (a === b || a === c || b === c) tipo = "Isósceles (Dois lados iguais)";
        else tipo = "Escaleno (Todos os lados diferentes)";
        
        exibir(`Formam um Triângulo ${tipo}`, "sucesso");
    } else {
        exibir("Não formam um triângulo segundo as regras.", "erro");
    }
}

function exibir(msg, classe) {
    const resDiv = document.getElementById('resultado');
    resDiv.innerHTML = msg;
    resDiv.className = classe;
    resDiv.style.display = "block";
}