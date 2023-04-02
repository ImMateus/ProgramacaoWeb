import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Grid, Typography, Select, MenuItem } from '@material-ui/core';

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const disabledDates = [new Date(2022, 4, 1), new Date(2022, 4, 2), new Date(2022, 4, 3)]; // example disabled dates

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Calendar
          value={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          maxDate={new Date(2023, 11, 31)}
          tileDisabled={({ activeStartDate, date, view }) =>
            view === 'month' &&
            disabledDates.some(
              (disabledDate) =>
                date.getFullYear() === disabledDate.getFullYear() &&
                date.getMonth() === disabledDate.getMonth() &&
                date.getDate() === disabledDate.getDate()
            )
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" component="h2" gutterBottom>
          Agendar Consulta
        </Typography>
        <Select value={selectedDoctor} onChange={handleDoctorChange} fullWidth>
          <MenuItem value="">Selecione o médico</MenuItem>
          <MenuItem value="Dr. João">Dr. João</MenuItem>
          <MenuItem value="Dra. Maria">Dra. Maria</MenuItem>
          <MenuItem value="Dr. José">Dr. José</MenuItem>
        </Select>
        <Select value={selectedType} onChange={handleTypeChange} fullWidth>
          <MenuItem value="">Selecione o tipo de consulta</MenuItem>
          <MenuItem value="Cardiologista">Cardiologista</MenuItem>
          <MenuItem value="Dermatologista">Dermatologista</MenuItem>
          <MenuItem value="Ginecologista">Ginecologista</MenuItem>
        </Select>
        {selectedDate && (
          <Select value={selectedTime} onChange={handleTimeChange} fullWidth>
            <MenuItem value="">Selecione o horário</MenuItem>
            <MenuItem value="09:00">09:00</MenuItem>
            <MenuItem value="10:00">10:00</MenuItem>
            <MenuItem value="11:00">11:00</MenuItem>
            <MenuItem value="14:00">14:00</MenuItem>
            <MenuItem value="15:00">15:00</MenuItem>
            };
            