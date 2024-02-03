const form = document.getElementById('form-dados-contatos');
const inputTelContato = document.getElementById("tel-contato");
const nomes = [];
const tels = [];
var linhas = '';

function validaForm(inputStr)
{
    var regra = /^(\(?\d{2}\)?\s?\d{4,5}\-?\s?\d{4})$/;

    return regra.test(inputStr);
}

function formataNumero(inputStr)
{
    const numerosTel = inputStr.replace(/\D/g, '');

    if(numerosTel.length === 11)
    {
        return `(${numerosTel.slice(0, 2)}) ${numerosTel.slice(2, 7)}-${numerosTel.slice(7)}`;
    } else if(numerosTel.length === 10)
    {
        return `(${numerosTel.slice(0, 2)}) ${numerosTel.slice(2, 6)}-${numerosTel.slice(6)}`;
    }
}

function criaLinhas()
{
    const inputNomeContato = document.getElementById("nome-contato");
    const numeroFormatado = formataNumero(inputTelContato.value)

    if(nomes.includes(inputNomeContato.value))
    {
        alert(`Já existe um registro com o nome ${inputNomeContato.value}`);
    }else if (!validaForm(inputTelContato.value))
    {
        alert('O número de telefone inserido é inválido.');
    }else if (tels.includes(numeroFormatado))
    {
        alert(`Já existe um registro com o telefone ${numeroFormatado}`);
    }else
    {
        nomes.push(inputNomeContato.value);
        tels.push(numeroFormatado);

        let linha = `<tr>`;
        linha += `<td> ${inputNomeContato.value} </td>`;
        linha += `<td> ${numeroFormatado} </td>`;
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
    totalContatos.innerHTML = parseFloat(nomes.length) > 0 ? parseFloat(nomes.length) : '---';
}

form.addEventListener("submit", function(e)
{
    e.preventDefault();

    criaLinhas();
    atualizaTabela();
    contaContatos();
})