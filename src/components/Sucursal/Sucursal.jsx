import React from 'react'
import { results } from './../../json/sucursales.json'
import './sucursal.css'

const showSucursales = (listaSucursales) => {
  return listaSucursales.map((sucursal, index) => (
    <div className='card card-company' key={index}>
      {console.log(sucursal)}
      <img src="https://dummyimage.com/300x170/a8a8a8/000000.jpg" alt="" className="card-img-top"/>
      <div className='card-body'>
          <strong>{`${sucursal.name.nameCompany}. ${sucursal.name.companySuffix}`}</strong>
          <br />
          {`${sucursal.addres.street.number} - ${sucursal.addres.street.name}`}
          <br />
          {`${sucursal.addres.city}, ${sucursal.addres.country}`}
          <br />
          <abbr title='Telefono'>Telefono:</abbr>
          {sucursal.phoneNumber}
          <br />
          <a href={`mailto:${sucursal.email}`}>{sucursal.email}</a>
          <br />
      </div>
    </div>
  ))
}

const Sucursal = () => {
  return <div className='container row'>{showSucursales(results.sucursales)}</div>
}

export default Sucursal
