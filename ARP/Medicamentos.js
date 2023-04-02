import React, { useState } from 'react';

function Medicamentos() {
  const [medicamentos, setMedicamentos] = useState([]);

  function adicionarMedicamento() {
    const novoMedicamento = {
      nome: '',
      dosagem: '',
      frequencia: ''
    };
    setMedicamentos([...medicamentos, novoMedicamento]);
  }

  return (
    <div>
      <h2>Lista de Medicamentos</h2>
      <button onClick={adicionarMedicamento}>Adicionar Medicamento</button>
      {medicamentos.map((medicamento, index) => (
        <div key={index}>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Dosagem" />
          <input type="text" placeholder="Frequência" />
          <button>Remover Medicamento</button>
        </div>
      ))}
    </div>
  );
}

export default Medicamentos;


import React, { useState } from 'react';

function Medicamentos() {
  const [medicamentos, setMedicamentos] = useState([]);

  function adicionarMedicamento() {
    const novoMedicamento = {
      nome: '',
      dosagem: '',
      frequencia: ''
    };
    setMedicamentos([...medicamentos, novoMedicamento]);
  }

  function removerMedicamento(index) {
    const novosMedicamentos = [...medicamentos];
    novosMedicamentos.splice(index, 1);
    setMedicamentos(novosMedicamentos);
  }

  return (
    <div>
      <h2>Lista de Medicamentos</h2>
      <button onClick={adicionarMedicamento}>Adicionar Medicamento</button>
      {medicamentos.map((medicamento, index) => (
        <div key={index}>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Dosagem" />
          <input type="text" placeholder="Frequência" />
          <button onClick={() => removerMedicamento(index)}>Remover Medicamento</button>
        </div>
      ))}
    </div>
  );
}

export default Medicamentos;