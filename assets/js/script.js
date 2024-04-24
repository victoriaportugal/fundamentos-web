/* 
DOM = o DOM ( Document Object Model) é uma ferramenta que permite ao JavaScript interagir com o conteúdo de uma 
página web de forma dinâmica e responsiva.

case sensitive = reconhece letras maiusculas e minusculas:
Acessar o DOM por : 

1- por Tag = getElementbyTagName();
2- por Id = getElementById();
3- por Nome = getElementsByName();
4- por Classes = getElementsByClassName();
5- por Seletor = querySelector();
*/

let nome = window.document.getElementById('nome');

let email = document.querySelector('#email');
/* Classe = #, Id = . , pode tambem ser ('input.email') ou ('input#email')*/

let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width = '50%'
email.style.width = '50%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = "red"
        /* innerHTML = acrescenta valor dentro da div*/
    } else{
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "green"
        nomeOk = true;
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1){
        txtEmail.innerHTML = 'Email invalido'
        txtEmail.style.color = "red"
    } else{
        txtEmail.innerHTML = "Email válido!"
        txtEmail.style.color = "green"
        emailOk = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande!(maximo de 100 caracteres)'
        txtAssunto.style.color = "red"
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true;
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true ){
        alert('Formulario enviado com sucesso!')
    } else {
        alert ('Preencha o formulario corretamente antes de enviar...')
    } 
}
