//Os clientes devem ter cadastro com nome completo, número de telefone, endereço, data de nascimento, 
//unidade federativa e CPF.

var form = document.getElementById('btns'); // Formulário
form.addEventListener('submit', validarFormulario);

var btnv = document.getElementById('btnv'); // Validar
btnv.addEventListener('click', validarBotao);

function validarFormulario(e) {
    if (!validarNome() || !validarTelefone() || !validarEmail() || !validarIdade() || !validarCPF() || !validarCEP()) {
        e.preventDefault(); // Cancelar a submissão
        validarBotao(e);
    }
}

function validarBotao() {
    if (!validarNome() || !validarTelefone() || !validarEmail() || !validarIdade() || !validarCPF() || !validarCEP()) {
        e.preventDefault(); // Cancelar a submissão
    }
}

//Nome
function validarNome() {
    var nm = document.getElementById('nm');
    var helpIdnm = document.getElementById('helpIdnm');
    if (nm.value === "") {
        helpIdnm.innerHTML = "Informe um nome válido!";
        nm.classList.remove('correto');
        nm.classList.add('erro');
        return false;
    } else {
        helpIdnm.innerHTML = "";
        nm.classList.remove('erro');
        nm.classList.add('correto');
        return true;
    }
}

//Telefone
function validarTelefone() {
    var telefone = document.getElementById('telefone');
    var helpIdtelefone = document.getElementById('helpIdtelefone');

    if (telefone.value === "" || telefone.value.length != 13) {
        helpIdtelefone.innerHTML = "Informe um numero válido";
        telefone.classList.remove('correto');
        telefone.classList.add('erro');
        return false;
    } else {
        helpIdtelefone.innerHTML = "";
        telefone.classList.remove('erro');
        telefone.classList.add('correto');
        return true;
    }
}

//Email
function validarEmail() {
    var email = document.getElementById('email');
    var helpIdemail = document.getElementById('helpIdemail');
    var h = email.value;

    if (h.indexOf('@' + 1) === "" || h.indexOf('@' - 1) === "" || h.indexOf('@') === "") {
        helpIdemail.innerHTML = "Informe um email válido!";
        email.classList.remove('correto');
        email.classList.add('erro');
        return false;
    } else {
        helpIdemail.innerHTML = "";
        email.classList.remove('erro');
        email.classList.add('correto');
        return true;
    }

}

//Data de nascimento
function validarIdade() {
    var nascimento = document.getElementById('nascimento');
    var helpIdnascimento = document.getElementById('helpIdnascimento');
    let hoje = new Date();
    var d = new Date(nascimento.value);
    var a = hoje.getFullYear();
    var b = d.getFullYear();
    var c = a - b;
    if (c <= 15 || nascimento.value === "" || c >= 120) {
        helpIdnascimento.innerHTML = "Apenas cadastro de maiores de 16 anos e menores de 120 anos!";
        nascimento.classList.remove('correto');
        nascimento.classList.add('erro');
        return false;
    } else {
        helpIdnascimento.innerHTML = "";
        nascimento.classList.remove('erro');
        nascimento.classList.add('correto');
        return true;
    }
}

//CPF
function validarCPF() {
    var cpf = document.getElementById('cpf');
    var helpIdcpf = document.getElementById('helpIdcpf');

    if (cpf.value.length != 11 || cpf.value === "") {
        helpIdcpf.innerHTML = "Cadastre um CPF correto!";
        cpf.classList.remove('correto');
        cpf.classList.add('erro');
        return false;
    } else {
        helpIdcpf.innerHTML = "";
        cpf.classList.remove('erro');
        cpf.classList.add('correto');
        return true;
    }
}

//CEP
function validarCEP() {
    var cepInput = document.getElementById('cep');
    var cep = cepInput.value;
    var helpIdcep = document.getElementById('helpIdcep');

    var uf = document.getElementById('uf');
    var helpIduf = document.getElementById('helpIduf');

    var e = cep.charAt(0); 

    var regiao0 = ["SP - Grande São Paulo"];
    var regiao1 = ["SP - Litoral e Interior"];
    var regiao2 = ["RJ", "ES"];
    var regiao3 = ["MG"];
    var regiao4 = ["BA", "SE"];
    var regiao5 = ["PE", "AL", "PB", "RN"];
    var regiao6 = ["CE", "PI", "MA", "PA", "AM", "AC", "AP", "RR"]; 
    var regiao7 = ["DF", "GO", "TO", "MT", "MS", "RO"];
    var regiao8 = ["PR", "SC"];
    var regiao9 = ["RS"];

    if (cep.length !== 8 || cep === "") { 
        helpIdcep.innerHTML = "Cadastre um CEP correto!";
        cepInput.classList.remove('correto'); 
        cepInput.classList.add('erro'); 
        return false;
    } else {
        if ((e === '0' || e === '1') && uf.value === "SP") { 
            helpIdcep.innerHTML = regiao0; 
            helpIdcep.innerHTML = regiao1;
            cepInput.classList.remove('erro'); 
            cepInput.classList.add('correto'); 
            helpIduf.innerHTML = "";
            uf.classList.remove('erro');
            uf.classList.add('correto');
            return true;
        } else if (e === '2' && (uf.value === "RJ"  || uf.value === "ES")) { 
            helpIdcep.innerHTML = regiao2; 
            cepInput.classList.remove('erro'); 
            cepInput.classList.add('correto'); 
            helpIduf.innerHTML = "";
            uf.classList.remove('erro');
            uf.classList.add('correto');
            return true;
        } else if (e === '3' && uf.value === "MG") {
            helpIdcep.innerHTML = regiao3;
            cepInput.classList.remove('erro');
            cepInput.classList.add('correto');
            helpIduf.innerHTML = "";
            uf.classList.remove('erro');
            uf.classList.add('correto');
            return true;
        } else if (e === '4' && (uf.value === "BA"  || uf.value === "SE")) {
            helpIdcep.innerHTML = regiao4;
            cepInput.classList.remove('erro');
            cepInput.classList.add('correto');
            helpIduf.innerHTML = "";
            uf.classList.remove('erro');
            uf.classList.add('correto');
            return true;
        } else if (e === '5' && (uf.value === "PE"  || uf.value === "AL" || uf.value === "PB"  || uf.value === "RN")) {
            helpIdcep.innerHTML = regiao5;
            cepInput.classList.remove('erro');
            cepInput.classList.add('correto');
            helpIduf.innerHTML = "";
            uf.classList.remove('erro');
            uf.classList.add('correto');
            return true;
        } else if (e === '6' && (uf.value === "CE"  || uf.value === "PI" || uf.value === "MA"  || uf.value === "PA"|| uf.value === "AM"  || uf.value === "AC" || uf.value === "AP"  || uf.value === "RR")) {
            helpIdcep.innerHTML = regiao6;
            cepInput.classList.remove('erro');
            cepInput.classList.add('correto');
            helpIduf.innerHTML = "";
            uf.classList.remove('erro');
            uf.classList.add('correto');
            return true;
        } else if (e === '7' && (uf.value === "DF"  || uf.value === "GO" || uf.value === "TO"  || uf.value === "MT"|| uf.value === "MS"  || uf.value === "RO")) {
            helpIdcep.innerHTML = regiao7;
            cepInput.classList.remove('erro');
            cepInput.classList.add('correto');
            helpIduf.innerHTML = "";
            uf.classList.remove('erro');
            uf.classList.add('correto');
            return true;
        } else if (e === '8' && (uf.value === "PR"  || uf.value === "SC")) {
            helpIdcep.innerHTML = regiao8;
            cepInput.classList.remove('erro');
            cepInput.classList.add('correto');
            helpIduf.innerHTML = "";
            uf.classList.remove('erro');
            uf.classList.add('correto');
            return true;
        } else if (e === '9' && uf.value === "RS") {
            helpIdcep.innerHTML = regiao9;
            cepInput.classList.remove('erro');
            cepInput.classList.add('correto');
            helpIduf.innerHTML = "";
            uf.classList.remove('erro');
            uf.classList.add('correto');
            return true;
        } else {
            helpIdcep.innerHTML = "Região não encontrada, digite novamente o CEP.";
            cepInput.classList.remove('correto');
            cepInput.classList.add('erro');
            return false;
        }
    }

}

/*var form = document.getElementById('btns'); // Formulário
form.addEventListener('submit', validarFormulario);

var btnv = document.getElementById('btnv'); // Validar
btnv.addEventListener('click', validarBotao);

function validarFormulario(e) {
    if (!validarNome() || !validarTelefone() || !validarEmail() || !validarIdade() || !validarCPF() || !validarCEP()) {
        e.preventDefault(); // Cancelar a submissão
    }
}

function validarBotao() {
    if (!validarNome() || !validarTelefone() || !validarEmail() || !validarIdade() || !validarCPF() || !validarCEP()) {
        // Adicione aqui o código que você deseja executar quando o botão for clicado
    }
}

//Nome
function validarNome() {
    var nm = document.getElementById('nm');
    var helpIdnm = document.getElementById('helpIdnm');
    if (nm.value === "") {
        helpIdnm.innerHTML = "Informe um nome válido!";
        nm.classList.remove('correto');
        nm.classList.add('erro');
        return false;
    } else {
        helpIdnm.innerHTML = "";
        nm.classList.remove('erro');
        nm.classList.add('correto');
        return true;
    }
}

//Telefone
function validarTelefone() {
    var telefone = document.getElementById('telefone');
    var helpIdtelefone = document.getElementById('helpIdtelefone');

    if (telefone.value === "" || telefone.value.length != 11) {
        helpIdtelefone.innerHTML = "Informe um numero válido";
        telefone.classList.remove('correto');
        telefone.classList.add('erro');
        return false;
    } else {
        helpIdtelefone.innerHTML = "";
        telefone.classList.remove('erro');
        telefone.classList.add('correto');
        return true;
    }
}

//fonte da linguagem desconhecida de /\S+@\S+\.\S+/ = https://horadecodar.com.br/como-validar-email-com-javascript/
function validarEmail() {
    var email = document.getElementById('email');
    var helpIdemail = document.getElementById('helpIdemail');
    var re = /\S+@\S+\.\S+/;
    if (!re.test(email.value)) {
        helpIdemail.innerHTML = "Informe um email válido!";
        email.classList.remove('correto');
        email.classList.add('erro');
        return false;
    } else {
        helpIdemail.innerHTML = "";
        email.classList.remove('erro');
        email.classList.add('correto');
        return true;
    }

}

//Data de nascimento
function validarIdade() {
    var nascimento = document.getElementById('nascimento');
    var helpIdnascimento = document.getElementById('helpIdnascimento');
    let hoje = new Date();
    var d = new Date(nascimento.value);
    var a = hoje.getFullYear();
    var b = d.getFullYear();
    var c = a - b;
    if (c <= 15 || nascimento.value === "" || c >= 120) {
        helpIdnascimento.innerHTML = "Apenas cadastro de maiores de 16 anos e menores de 120 anos!";
        nascimento.classList.remove('correto');
        nascimento.classList.add('erro');
        return false;
    } else {
        helpIdnascimento.innerHTML = "";
        nascimento.classList.remove('erro');
        nascimento.classList.add('correto');
        return true;
    }
}

//CPF
function validarCPF() {
    var cpf = document.getElementById('cpf');
    var helpIdcpf = document.getElementById('helpIdcpf');

    if (cpf.value.length != 11 || cpf.value === "") {
        helpIdcpf.innerHTML = "Cadastre um CPF correto!";
        cpf.classList.remove('correto');
        cpf.classList.add('erro');
        return false;
    } else {
        helpIdcpf.innerHTML = "";
        cpf.classList.remove('erro');
        cpf.classList.add('correto');
        return true;
    }
}

//CEP
function validarCEP() {
    var cep = document.getElementById('cep').value;
    var helpIdcep = document.getElementById('helpIdcep');

    var cep1 = document.getElementsByClassName('cep1');

    var uf = document.getElementById('uf');
    var helpIduf = document.getElementById('helpIduf');

    var e = cep.substr(0, 1);

    var regiao0 = "SP";
    var regiao1 = "SP";
    var regiao2 = ["RJ", "ES"];
    var regiao3 = "MG";
    var regiao4 = ["BA", "SE"];
    var regiao5 = ["PE", "AL", "PB", "RN"];
    var regiao6 = ["CE", "PI", "MA", "PA", "AM", "Ac", "AP", "RR"];
    var regiao7 = ["DF", "GO", "TO", "MT", "MS", "RO"];
    var regiao8 = ["PR", "SC"];
    var regiao9 = "RS";

    if (cep.value.length != 8 || cep.value === "") {
        helpIdcep.innerHTML = "Cadastre um CEP correto!";
        cep1.classList.remove('correto');
        cep1.classList.add('erro');
        return false;
    } else {
        if (e === 0 || e === 1) {
            helpIdcep.innerHTML = regiao0, regiao1;
            cep1.classList.remove('erro');
            cep1.classList.add('correto');
            helpIduf.innerHTML = "";
            uf.classList.remove('erro');
            uf.classList.add('correto');
            return true;
        }
    }

    if (e === 2) {
        helpIdcep.innerHTML = regiao2;
        cep1.classList.remove('erro');
        cep1.classList.add('correto');
        helpIduf.innerHTML = "";
        uf.classList.remove('erro');
        uf.classList.add('correto');
        return true;
    }
    if (e === 3) {
        helpIdcep.innerHTML = regiao3;
        cep1.classList.remove('erro');
        cep1.classList.add('correto');
        helpIduf.innerHTML = "";
        uf.classList.remove('erro');
        uf.classList.add('correto');
        return true;
    }
    if (e === 4) {
        helpIdcep.innerHTML = regiao4;
        cep1.classList.remove('erro');
        cep1.classList.add('correto');
        helpIduf.innerHTML = "";
        uf.classList.remove('erro');
        uf.classList.add('correto');
        return true;
    }
    if (e === 5) {
        helpIdcep.innerHTML = regiao5;
        cep1.classList.remove('erro');
        cep1.classList.add('correto');
        helpIduf.innerHTML = "";
        uf.classList.remove('erro');
        uf.classList.add('correto');
        return true;
    }
    if (e === 6) {
        helpIdcep.innerHTML = regiao6;
        cep1.classList.remove('erro');
        cep1.classList.add('correto');
        helpIduf.innerHTML = "";
        uf.classList.remove('erro');
        uf.classList.add('correto');
        return true;
    }
    if (e === 7) {
        helpIdcep.innerHTML = regiao7;
        cep1.classList.remove('erro');
        cep1.classList.add('correto');
        helpIduf.innerHTML = "";
        uf.classList.remove('erro');
        uf.classList.add('correto');
        return true;
    }
    if (e === 8) {
        helpIdcep.innerHTML = regiao8;
        cep1.classList.remove('erro');
        cep1.classList.add('correto');
        helpIduf.innerHTML = "";
        uf.classList.remove('erro');
        uf.classList.add('correto');
        return true;
    } else {
        helpIdcep.innerHTML = regiao9;
        cep1.classList.remove('erro');
        cep1.classList.add('correto');
        helpIduf.innerHTML = "";
        uf.classList.remove('erro');
        uf.classList.add('correto');
        return true;
    }
}*/