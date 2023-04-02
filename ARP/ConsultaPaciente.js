TELA DE CONSULTA DOS PACIENTES
            
           import React, { useState } from 'react';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([
    {
      id: 1,
      nome: 'João Silva',
      dataNascimento: '01/01/1990',
      cpf: '123.456.789-00',
      endereco: 'Rua A, 123',
      telefone: '(11) 1234-5678'
    },
    {
      id: 2,
      nome: 'Maria Souza',
      dataNascimento: '02/02/1995',
      cpf: '987.654.321-00',
      endereco: 'Rua B, 456',
      telefone: '(11) 2345-6789'
    }
  ]);

  const [busca, setBusca] = useState('');

  const handleInputChange = (event) => {
    setBusca(event.target.value);
  };

  const filteredPacientes = pacientes.filter((paciente) => {
    return paciente.nome.toLowerCase().includes(busca.toLowerCase()) || paciente.cpf.includes(busca);
  });

  return (
    <div>
      <h2>Consulta de Pacientes</h2>
      <form>
        <label htmlFor="busca">Buscar por Nome ou CPF:</label>
        <input type="text" id="busca" name="busca" value={busca} onChange={handleInputChange} />
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {filteredPacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.nome}</td>
              <td>{paciente.dataNascimento}</td>
              <td>{paciente.cpf}</td>
              <td>{paciente.endereco}</td>
              <td>{paciente.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pacientes;