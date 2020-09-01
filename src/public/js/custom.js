const express = require('express');
const routes = express.Router();

const formValidate = (event) =>{
    event.preventDefault();

    var nome = document.getElementById("nameId").value;
    var email = document.getElementById("emailId").value;
    var msg  = document.getElementsByName("message").value;
    console.log("Nome: " + nome);
    console.log("Email: " + email);
    console.log("msg: " + msg);
    var data = {
        nomeCompletoContato: nome,
        emailContato: email,
        mensagemContato
    };
    routes.post("http://localhost:3333/contato/create", data);

}