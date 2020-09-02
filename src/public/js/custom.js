// const express = require('express');
// const routes = express.Router();

// const formValidate = (event) => {
//     event.preventDefault();

//     var nome = document.getElementById("nameId").value;
//     var email = document.getElementById("emailId").value;
//     var msg = document.getElementsByName("message").value;
//     console.log("Nome: " + nome);
//     console.log("Email: " + email);
//     console.log("msg: " + msg);
//     var data = {
//         nomeCompletoContato: nome,
//         emailContato: email,
//         mensagemContato
//     };
//     routes.post("http://localhost:3333/contato/create", data);

// }

let container = document.querySelectorAll('.finalValue')[0]
let containerJs = document.querySelectorAll('.js-content')[0]
let inputValor = document.getElementById('valorReserva')
console.log(container)

function calulateValue(dataEntrada, dataSaida, valorQuarto) {

    const dataDeEntrada = new Date(dataEntrada)
    const dataDeSaida = new Date(dataSaida)
    const timestamp_dataDeEntrada = Math.floor(dataDeEntrada / 1000)
    const today = Math.floor(Date.now() / 1000)


    const qtdDias = (dataDeSaida - dataDeEntrada) / 86400000
    let valorReserva = qtdDias * valorQuarto

    if (valorReserva > 0 && qtdDias >= 2 && timestamp_dataDeEntrada >= today) {
        if (containerJs.classList.contains('d-none')) {
            containerJs.classList.remove('d-none')
            container.append(valorReserva)
            inputValor.value = valorReserva
        }
    }

}