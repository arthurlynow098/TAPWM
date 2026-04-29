function exercicio2(letras) {
    if (letras.length !== 5) {
        return "Por favor, forneça um array com exatamente 5 letras.";
    }

    const palavrasGeradas = [];

    while (palavrasGeradas.length < 10) {
        
        let letrasEmbaralhadas = [...letras].sort(() => 0.5 - Math.random());
        
        let novaPalavra = "".concat.apply("", letrasEmbaralhadas);

        if (!palavrasGeradas.includes(novaPalavra)) {
            palavrasGeradas.push(novaPalavra);
        }
    }

    return palavrasGeradas;
}

const arrayLetras = ['A', 'B', 'C', 'D', 'E'];
console.log(exercicio2(arrayLetras));
