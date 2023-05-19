/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Lucas Moraes Aguiar - 2110486
DATA: 19/05/2023
*/

// biomaController.js

   // Recuperar a lista de biomas
class BiomaController {
    static getAll(req, res) {
      res.json(BiomaModel.getAllBiomas());
    }
  
    // Criar um novo bioma
    static create(req, res) {
      const newBioma = req.body;
      const createdBioma = BiomaModel.createBioma(newBioma);
      res.json(createdBioma);
    }
  
    // Recuperar informações de um bioma específico por ID
    static getById(req, res) {
      const id = parseInt(req.params.bioma_id);
      const bioma = BiomaModel.getBiomaById(id);
  
      if (bioma) {
        res.json(bioma);
      } else {
        res.status(404).json({ error: 'Bioma não encontrado.' });
      }
    }
  
    // Atualizar informações de um bioma específico por ID
    static updateById(req, res) {
      const id = parseInt(req.params.bioma_id);
      const updatedBioma = req.body;
      const result = BiomaModel.updateBiomaById(id, updatedBioma);
  
      if (result) {
        res.json({ message: 'Bioma atualizado com sucesso!' });
      } else {
        res.status(404).json({ error: 'Bioma não encontrado.' });
      }
    }
  
    // Excluir um bioma específico por ID
    static deleteById(req, res) {
      const id = parseInt(req.params.bioma_id);
      const result = BiomaModel.deleteBiomaById(id);
  
      if (result) {
        res.json({ message: 'Bioma excluído com sucesso!' });
      } else {
        res.status(404).json({ error: 'Bioma não encontrado.' });
      }
    }
  }
  
  // biomaModel.js

  class BiomasModel {
    constructor() {
      this.biomas = [];
      this.nextId = 1;
    }
  
    // Recuperar a lista de biomas
    getAll() {
      return this.biomas;
    }
  
    // Criar um novo bioma
    create(nome) {
      const newBioma = { id: this.nextId, nome };
      this.biomas.push(newBioma);
      this.nextId++;
      return newBioma;
    }
  
    // Recuperar informações de um bioma específico por ID
    getById(id) {
      return this.biomas.find(b => b.id === parseInt(id));
    }
  
    // Atualizar informações de um bioma específico por ID
    update(id, nome) {
      const bioma = this.getById(id);
      if (bioma) {
        bioma.nome = nome;
        return bioma;
      } else {
        return null;
      }
    }
  
    // Excluir um bioma específico por ID
    delete(id) {
      const index = this.biomas.findIndex(b => b.id === parseInt(id));
      if (index !== -1) {
        return this.biomas.splice(index, 1)[0];
      } else {
        return null;
      }
    }
  }
  
  module.exports = BiomasModel;  