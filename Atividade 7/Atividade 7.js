const calcMaior = () => {
    const m1 = document.getElementById('m1');
    const m2 = document.getElementById('m2');
    const m3 = document.getElementById('m3');
    const res1 = document.getElementById('res1');
    
    const v = [Number(m1.value), Number(m2.value), Number(m3.value)];
    res1.innerText = "Maior: " + Math.max(...v);
};

const calcOrdem = () => {
    const o1 = document.getElementById('o1');
    const o2 = document.getElementById('o2');
    const o3 = document.getElementById('o3');
    const res2 = document.getElementById('res2');

    const v = [Number(o1.value), Number(o2.value), Number(o3.value)];
    res2.innerText = "Ordenado: " + v.sort((a,b) => a - b).join(" ➔ ");
};

const calcPalindromo = () => {
    const palTxt = document.getElementById('palTxt');
    const res3 = document.getElementById('res3');

    const txt = palTxt.value.toUpperCase().replace(/\s+/g, '');
    if(!txt) return res3.innerText = "Digite algo";
    
    const inv = txt.split('').reverse().join('');
    res3.innerText = txt === inv ? "Sim, é um palíndromo!" : "Não é um palíndromo.";
};

const calcSub = () => {
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const res4 = document.getElementById('res4');

    const v1 = p1.value; 
    const v2 = p2.value;
    
    if(!v1 || !v2) return res4.innerText = "erro";
    res4.innerText = v1.includes(v2) ? "é um subconjunto" : "não é um subconjunto";
};

const calcDia = () => {
    const dataInput = document.getElementById('dataInput');
    const res5 = document.getElementById('res5');

    if(!dataInput.value) return res5.innerText = "Selecione uma data";
    
    const d = new Date(dataInput.value + 'T00:00:00');
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    res5.innerText = "Dia: " + dias[d.getDay()];
};