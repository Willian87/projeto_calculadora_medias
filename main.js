const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando"> ';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Decepcionado"> ';
const spanAprovado = '<span class= "resultado aprovado">Aprovado<span>'
const spanReprovado = '<span class= "resultado reprovado">Reprovado<span>'

var linhas = '';

const atividades = [];
const notas = [];
const notaMinina = parseFloat(prompt("Insira a nota minina"));


form.addEventListener('submit', function(e){

    e.preventDefault();

    adcionarLinha()
    atualizarTabela()
    atualizarMediaFinal()
})

function adcionarLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    

    if(atividades.includes(inputNomeAtividade.value))
    {
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida!`)
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        var linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinina ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }  
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarMediaFinal(){
    
    const mediaFinal = calculoMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinina ? spanAprovado : spanReprovado;
    
}

function calculoMediaFinal(){
    var somaDasNotas = 0;

    for(var i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;  
}