import React, { useEffect, useState } from 'react';

import '../../../src/Users.css';
export default function UsersDashboard() {
  const [users, setUsers] = useState([]);
  const [ultimo, setUltimo] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const urlBase = 'http://localhost:3000'

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

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data)
      })
      .catch((error) => console.error('Error al obtener producto:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/api/category')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data)
      })
      .catch((error) => console.error('Error al obtener categoría:', error));
  }, []);

  return (
    <div className='background'>
      <div>
        <img
          className="logo"
          src="/images/logo-trend-boutique.svg"
          alt="Logo Trend Boutique"
          style={{ width: '150px', height: '100px' }}
        />
      </div>
      <div className="panels-container">
        <div className="panel">
          <h2>Listado de Usuarios</h2>
          <h3>Total de Usuarios: {users.length}</h3>
        </div>

        <div className="panel">
          <h2>Listado de Productos</h2>
          <h3>Total de Productos: {products.length}</h3>
        </div>

        <div className="panel">
          <h2>Listado de Categorías</h2>
          <h3>Total de Categorías: {users.length}</h3>
        </div>
      </div>

      <div className='last-user'>
        <h3>Detalle del Último Usuario Creado</h3>
        <div className='user-details'>
          <div className='user-text'>
            <p>ID: {ultimo.idusers}</p>
            <p>Nombre: {ultimo.first_name}</p>
            <p>Correo: {ultimo.email}</p>
            <p>Género: {ultimo.gender}</p>
          </div>
          <div className='user-image'>
            <img width='200px' src={urlBase + '/images/users/' + ultimo.image} alt={ultimo.image} />
          </div>
        </div>
      </div>



      <h3>Productos</h3>
      <ol>
        {products.map((products) => (
          <li key={products.id}>{products.name}</li>
        ))}
      </ol>
    </div>
  );
}