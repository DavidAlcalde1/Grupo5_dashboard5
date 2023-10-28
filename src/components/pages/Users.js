import React, { useEffect, useState } from 'react';

export default function UsersDashboard() {
  const [users, setUsers] = useState([]);
  const [ultimo, setUltimo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data)
        setUltimo (data.data[data.data.length-1])
        console.log(data.data[data.data.length-1].idusers);
      })
      .catch((error) => console.error('Error al obtener usuarios:', error));
  }, []);

  return (
    <div>
      <h2>Listado de Usuarios</h2>
      <h2>{users.length}</h2>
      <ol>
        {users.map((user) => (
          <li key={user.idusers}>{user.first_name}</li>
        ))}
      </ol>
      <label>{ultimo.idusers}</label> <br>
      </br>
      <label>{ultimo.first_name}</label>
    </div>
  );
}
