/*
CURSO DE ENGENHARIA DE SOFTWARE - UNIEVANGELICA
DISCIPLINA DE PROGRAMAÇÃO WEB
DEV: Lucas Moraes Aguiar - 2012148
João Lucas Maciel Martins 2110901
Mateus Guimaraes Leal - 2110486
Gabryel alves verne 2110872
Renan Oliveira Matos 1910859

01/04/2023

PROJETO INTEGRADOR
*/

import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [cars, setCars] = useState([
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2021 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2022 },
  ]);

  const [formValues, setFormValues] = useState({
    make: '',
    model: '',
    year: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCar = {
      id: Date.now(),
      make: formValues.make,
      model: formValues.model,
      year: formValues.year,
    };
    setCars([...cars, newCar]);
    setFormValues({ make: '', model: '', year: '' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="car-rental-image.jpg" alt="Car rental" />
        <h1>Car Rental App</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Rentals</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <h2>Enter a New Car</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="make">Make:</label>
            <input
              type="text"
              name="make"
              id="make"
              value={formValues.make}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              name="model"
              id="model"
              value={formValues.model}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              name="year"
              id="year"
              value={formValues.year}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        <h2>Car List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>