/*
CURSO DE ENGENHARIA DE SOFTWARE - UNIEVANGELICA
DISCIPLINA DE PROGRAMAÇÃO WEB
DEV: Mateus Guimarães Leal - 2110486
27/03/2023
*/

import React, { useState } from "react";

const CadastroPaciente = () => {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar dados para o servidor aqui
  };

  return (
    <div>
      <h2>Cadastro de Paciente</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label>
          Data de Nascimento:
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <br />
        <label>
          Endereço:
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </label>
        <br />
        <label>
          Telefone:
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Cadastrar Paciente</button>
      </form>
    </div>
  );
};

export default CadastroPaciente;
