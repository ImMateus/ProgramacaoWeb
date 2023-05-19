/*

Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Mateus Guimarães Leal - 2110486
DATA: 19/05/2023


Para inicializar o projeto com npm, express e nodemon, primeiro é necessário instalar o Node.js em seu computador. 
Depois disso, abra um terminal na pasta onde você deseja criar o projeto e execute os seguintes comandos:


npm init -y
Esse comando criará um arquivo package.json com as configurações padrão. Em seguida, instale as dependências do projeto com os seguintes comandos:

npm install express
npm install nodemon -D
O Express é um framework para Node.js que facilita o desenvolvimento de aplicações web, enquanto o Nodemon é uma ferramenta que reinicia 
automaticamente o servidor sempre que o código é alterado.

Agora, desenvolver os endpoints de um CRUD para o tema de horários e reservas de uma academia. Supondo que os dados de horários e reservas serão
armazenados em um arquivo JSON, podemos criar os seguintes endpoints:
*/

const express = require('express');
const app = express();

app.use(express.json());

let biomaws = [
    { id: 1, name: 'Biomaw 1' },
    { id: 2, name: 'Biomaw 2' }
  ];
  
  // Recuperar a lista de Biomaws
  app.get('/api/biomaws', (req, res) => {
    res.json(biomaws);
  });
  
  // Criar um novo Biomaw
  app.post('/api/biomaws', (req, res) => {
    const newBiomaw = req.body;
    biomaws.push(newBiomaw);
    res.json({ message: 'Novo Biomaw criado com sucesso!' });
  });
  
  // Recuperar informações de um Biomaw específico por ID
  app.get('/api/biomaws/:id', (req, res) => {
    const id = req.params.id;
    const biomaw = biomaws.find(b => b.id === parseInt(id));
    res.json(biomaw);
  });
  
  // Atualizar informações de um Biomaw específico por ID
  app.put('/api/biomaws/:id', (req, res) => {
    const id = req.params.id;
    const updatedBiomaw = req.body;
    biomaws = biomaws.map(b => (b.id === parseInt(id) ? updatedBiomaw : b));
    res.json({ message: 'Biomaw atualizado com sucesso!' });
  });
  
  // Excluir um Biomaw específico por ID
  app.delete('/api/biomaws/:id', (req, res) => {
    const id = req.params.id;
    biomaws = biomaws.filter(b => b.id !== parseInt(id));
    res.json({ message: 'Biomaw excluído com sucesso!' });
  });
  