import React, { useEffect, useState } from 'react';
import '../../../src/Dashboard.css';

export default function UsersDashboard() {
  const [users, setUsers] = useState([]);
  const [ultimo, setUltimo] = useState([]);
  const [products, setProducts] = useState([]);
  const [idcategory, setCategory] = useState([]);
  const urlBase = 'http://localhost:3000';

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
        setUltimo(data.data[data.data.length - 1]);
        console.log(data.data[data.data.length - 1].idusers);
      })
      .catch((error) => console.error('Error al obtener usuarios:', error));
  }, []);


  useEffect(() => {
    fetch(urlBase+'/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data)
        const categoryCounts = {};
        data.data.forEach((product) => {
          const categoryId = product.idcategory;
          categoryCounts[categoryId] = (categoryCounts[categoryId] || 0) + 1;
        });
        setCategory(categoryCounts);
      })
      .catch((error) => console.error('Error al obtener producto:', error));
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
          <h3>Total de Categorías: {Object.keys(idcategory).length}</h3>
          <div className='contentCategories'>
            {Object.keys(idcategory).map((categoryId) => (
              <div className='categories' key={categoryId}>
                <p>
                  {categoryId == 1
                    ? 'SPORT'
                    : categoryId == 2
                      ? 'FORMAL'
                      : categoryId == 3
                        ? 'CASUAL'
                        : 'Categoría Desconocida'}:{' '}
                  {idcategory[categoryId]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='last-user'>
        <h2>Detalle del Último Usuario Creado</h2>
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

      <div className="panel-products"> 
        <h2>Productos</h2>
        <ul>
          {products.map((product) => (
            <li className='specific-products' key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
      </div>
      );
}
