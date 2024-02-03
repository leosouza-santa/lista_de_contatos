const form = document.getElementById('form-dados-contatos');
const inputTelContato = document.getElementById("tel-contato");
const nomes = [];
const tels = [];
var linhas = '';

function criaLinhas()
{
    const inputNomeContato = document.getElementById("nome-contato");

    if(nomes.includes(inputNomeContato.value))
    {
        alert(`Já existe um registro com o nome ${inputNomeContato.value}`);
    }else if (tels.includes(inputTelContato.value))
    {
        alert(`Já existe um registro com o telefone ${inputTelContato.value}`);
    }else
    {
        nomes.push(inputNomeContato.value);
        tels.push(inputTelContato.value);

        let linha = `<tr>`;
        linha += `<td> ${inputNomeContato.value} </td>`;
        linha += `<td> ${inputTelContato.value} </td>`;
        linha += `</tr>`;

        linhas += linha;

        inputNomeContato.value = '';
        inputTelContato.value = '';
    }
}

function atualizaTabela()
{
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function contaContatos()
{
    const totalContatos = document.getElementById('total-contatos');
    totalContatos.innerHTML = parseFloat(nomes.length);
}

form.addEventListener("submit", function(e)
{
    e.preventDefault();

    criaLinhas();
    atualizaTabela();
    contaContatos();
})