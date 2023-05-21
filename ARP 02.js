/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Mateus Guimarães Leal - 2110486
DATA: 20/05/2023

ARP 02:

Cadastro de paciente:
*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let pacientes = [];

app.post('/api/pacientes', (req, res) => {
  const paciente = req.body;
  pacientes.push(paciente);
  res.json(paciente);
});

app.listen(3000, () => {
  console.log('API de Cadastro de Paciente iniciada na porta 3000.');
});

{
  "nome"; "Papa",
  "idade"; 30,
  "sexo"; "Masculino",
  "email"; "email.com",
  "telefone"; "1837565890";
}

Response:


{
  "id"; 1,
  "nome"; "Joana",
  "idade"; 25,
  "sexo"; "Feminino",
  "email"; "joana@email.com",
  "telefone"; "1438507898";

}


// Cadastro de agenda:

{
  "data"; "2023-05-16",
  "hora"; "14:30",
  "pacienteId"; 1,
  "descricao"; "Descrição do compromisso";
}

Response:


{
  "id"; 1,
  "data"; "2023-05-16",
  "hora"; "14:30",
  "pacienteId"; 1,
  "descricao"; "Descrição do compromisso";
}

  /*  Listar todos os compromissos da agenda: Endpoint: GET /api/agenda/compromissos
*/

{
  "compromissos"; [
    {
      "id": 1,
      "data": "2023-05-16",
      "hora": "14:30",
      "pacienteId": 1,
      "descricao": "Descrição do compromisso",
    },
    {
      "id": 2,
      "data": "2023-05-17",
      "hora": "10:00",
      "pacienteId": 2,
      "descricao": "Outra descrição do compromisso",
    },
  ]
}

    /*Listar os compromissos de um paciente específico: Endpoint: GET /api/agenda/compromissos?pacienteId=1
*/

{
  "compromissos"; [
    {
      "id": 1,
      "data": "2023-02-16",
      "hora": "14:30",
      "pacienteId": 1,
      "descricao": "Descrição do compromisso",
    },
    {
      "id": 3,
      "data": "2022-02-18",
      "hora": "01:00",
      "pacienteId": 1,
      "descricao": "Outra descrição do compromisso do mesmo paciente",
    },
  ]
}
