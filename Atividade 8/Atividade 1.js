function realizarCalculos(n1, n2, n3) {
    const soma = n1 + n2 + n3;
    const quadPrimeiro = n1 * n1;
    const quadSegundo = n2 * n2;
    
    return `A soma dos três números é:${soma}, o quadrado do primeiro é:${quadPrimeiro} e o quadrado do segundo é:${quadSegundo}`;
}

function exercicio1(arrayNumeros) {
    if (arrayNumeros.length !== 3) {
        return "Por favor, forneça um array com exatamente 3 números.";
    }
    
    return realizarCalculos.apply(null, arrayNumeros);
}

const entrada = [2, 4, 6];
console.log(exercicio1(entrada)); 
