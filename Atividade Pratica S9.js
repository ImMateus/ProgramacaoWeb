/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Mateus Guimarães Leal - 2110486
DATA: 19/05/2023
*/

const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar requisições JSON
app.use(express.json());

// Array simulando uma base de dados de biomas
let biomas = [
  { id: 1, nome: 'Floresta Amazônica' },
  { id: 2, nome: 'Cerrado' },
  { id: 3, nome: 'Mata Atlântica' }
];

// Recuperar a lista de biomas
app.get('/api/biomas', (req, res) => {
  res.json(biomas);
});

// Criar um novo bioma
app.post('/api/biomas', (req, res) => {
  const newBioma = req.body;
  biomas.push(newBioma);
  res.json({ message: 'Novo bioma criado com sucesso!' });
});

// Recuperar informações de um bioma específico por ID
app.get('/api/biomas/:bioma_id', (req, res) => {
  const id = parseInt(req.params.bioma_id);
  const bioma = biomas.find(b => b.id === id);

  if (bioma) {
    res.json(bioma);
  } else {
    res.status(404).json({ error: 'Bioma não encontrado.' });
  }
});

// Atualizar informações de um bioma específico por ID
app.put('/api/biomas/:bioma_id', (req, res) => {
  const id = parseInt(req.params.bioma_id);
  const updatedBioma = req.body;

  biomas = biomas.map(b => (b.id === id ? updatedBioma : b));

  res.json({ message: 'Bioma atualizado com sucesso!' });
});

// Excluir um bioma específico por ID
app.delete('/api/biomas/:bioma_id', (req, res) => {
  const id = parseInt(req.params.bioma_id);
  biomas = biomas.filter(b => b.id !== id);
  res.json({ message: 'Bioma excluído com sucesso!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
