// Funções de máscara
function mascaraCpf(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor;
}

function mascaraCnpj(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
    valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
    return valor;
}

function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    return valor;
}

function mascaraMoeda(valor) {
    valor = valor.replace(/\D/g, "");
    if (valor === "") {
        return "";
    }
    valor = parseInt(valor).toString();
    valor = (parseInt(valor) / 100).toFixed(2);
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    return valor;
}

function mascaraCep(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d{3})(\d{3})$/, "$1.$2-$3");
    return valor;
}

// Função para aplicar a máscara com base na classe do elemento
function aplicarMascara(event) {
    let valor = event.target.value;
    let classList = event.target.classList;

    // Verifica a classe do campo para aplicar a máscara correspondente
    if (classList.contains('cpf')) {
        event.target.value = mascaraCpf(valor);
    } else if (classList.contains('cnpj')) {
        event.target.value = mascaraCnpj(valor);
    } else if (classList.contains('telefone')) {
        event.target.value = mascaraTelefone(valor);
    } else if (classList.contains('moeda')) {
        event.target.value = mascaraMoeda(valor);
    } else if (classList.contains('cep')) {
        event.target.value = mascaraCep(valor);
    } else if (classList.contains('rg')) {
        event.target.value = mascaraRg(valor);
    }
}