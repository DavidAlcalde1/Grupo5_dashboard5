import React, { useEffect, useState } from 'react';

import '../../../src/Users.css';
export default function UsersDashboard() {
  const [users, setUsers] = useState([]);
  const [ultimo, setUltimo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data)
        setUltimo(data.data[data.data.length - 1])
        console.log(data.data[data.data.length - 1].idusers);
      })
      .catch((error) => console.error('Error al obtener usuarios:', error));
  }, []);

  return (
    <div>
       <div className="panels-container">
      <div className="panel">
        <h2>Listado de Usuarios</h2>
        <h3>Total de Usuarios: {users.length}</h3>
      </div>

      <div className="panel">
        <h2>Listado de Productos</h2>
        <h3>Total de Productos: {users.length}</h3>
      </div>

      <div className="panel">
        <h2>Listado de Categorías</h2>
        <h3>Total de Categorías: {users.length}</h3>
      </div>
    </div>

      {ultimo && (
        <div className='last-user'>
          <h3>Detalle del Último Usuario Creado</h3>
          <p>ID: {ultimo.idusers}</p>
          <p>Nombre: {ultimo.first_name}</p>
          <p>Correo: {ultimo.email}</p>
        </div>
      )}

      <h3>Usuarios</h3>
      <ol>
        {users.map((user) => (
          <li key={user.idusers}>{user.first_name}</li>
        ))}
      </ol>
    </div>
  );
}