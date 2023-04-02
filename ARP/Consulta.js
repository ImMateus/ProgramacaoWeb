import { useState } from "react";

function ConsultaDeConsultas() {
  // lista de consultas agendadas
  const [consultas, setConsultas] = useState([
    {
      id: 1,
      paciente: "Mateus Leal",
      medico: "Luis",
      data: "02/04/2023",
      horario: "09:30",
    },
    {
      id: 2,
      paciente: "Isabela",
      medico: "Luis",
      data: "02/04/2023",
      horario: "15:00",
    },
    // adicione outras consultas aqui
  ]);

  // termo de pesquisa
  const [searchTerm, setSearchTerm] = useState("");

  // função para filtrar consultas com base no termo de pesquisa
  const filteredConsultas = consultas.filter(
    (consulta) =>
      consulta.paciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consulta.medico.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Consultas agendadas</h1>
      <input
        type="text"
        placeholder="Pesquisar paciente ou médico"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Paciente</th>
            <th>Médico</th>
            <th>Data</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          {filteredConsultas.map((consulta) => (
            <tr key={consulta.id}>
              <td>{consulta.id}</td>
              <td>{consulta.paciente}</td>
              <td>{consulta.medico}</td>
              <td>{consulta.data}</td>
              <td>{consulta.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsultaDeConsultas;