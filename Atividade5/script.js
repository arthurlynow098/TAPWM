const form = document.getElementById('form-pesquisa');
const listaRespostas = [];
const LIMITE = 45;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (listaRespostas.length >= LIMITE) {
        alert('Limite de respostas atingido.');
        return;
    }

    const dados = {
        idade: parseInt(document.getElementById('input-idade').value),
        genero: document.getElementById('input-genero').value,
        opiniao: parseInt(document.getElementById('input-opiniao').value)
    };

    listaRespostas.push(dados);
    atualizarDashboard();
    form.reset();
});

function atualizarDashboard() {
    const total = listaRespostas.length;
    
    document.getElementById('progresso').innerText = `${total} / ${LIMITE}`;

    const somaIdades = listaRespostas.reduce((acc, curr) => acc + curr.idade, 0);
    const mediaIdade = (somaIdades / total).toFixed(1);
    
    const idades = listaRespostas.map(r => r.idade);
    const maiorIdade = Math.max(...idades);
    const menorIdade = Math.min(...idades);

    const pessimos = listaRespostas.filter(r => r.opiniao === 1).length;
    
    const positivos = listaRespostas.filter(r => r.opiniao >= 3).length;
    const percPositivo = ((positivos / total) * 100).toFixed(1);

    const generos = {
        masculino: listaRespostas.filter(r => r.genero === 'masculino').length,
        feminino: listaRespostas.filter(r => r.genero === 'feminino').length,
        outros: listaRespostas.filter(r => r.genero === 'outros').length
    };

    document.getElementById('res-media').innerText = mediaIdade;
    document.getElementById('res-velho').innerText = maiorIdade;
    document.getElementById('res-novo').innerText = menorIdade;
    document.getElementById('res-pessimo').innerText = pessimos;
    document.getElementById('res-aprovacao').innerText = `${percPositivo}%`;
    
    document.getElementById('count-h').innerText = generos.masculino;
    document.getElementById('count-m').innerText = generos.feminino;
    document.getElementById('count-o').innerText = generos.outros;

    if (total >= LIMITE) {
        document.getElementById('btn-enviar').disabled = true;
        document.getElementById('btn-enviar').classList.add('opacity-50', 'cursor-not-allowed');
    }
}