import React from 'react'
import { sucursales } from '../../../json/sucursales.json'
import './sucursal.css'

const Sucursal = () => {
  const [branch, setBranch] = React.useState({
    name: {
      nameCompany: '',
      companySuffix: ''
    },
    addres: {
      street: {
        streetName: '',
        streetNumber: ''
      },
      city: '',
      state: '',
      country: '',
      countryCode: ''
    },
    contact: {
      phoneNumber: '',
      email: ''
    }
  })
  const handleName = ({ name, value }) => {
    setBranch({
      ...branch,
      name: {
        ...branch.name,
        [name]: value
      }
    })
  }
  const handleStreet = ({ name, value }) => {
    setBranch({
      ...branch,
      addres: {
        ...branch.addres,
        street: {
          ...branch.addres.street,
          [name]: value
        }
      }
    })
  }
  const handleAddres = ({ name, value }) => {
    setBranch({
      ...branch,
      addres: {
        ...branch.addres,
        [name]: value
      }
    })
  }
  const handleContact = ({ name, value }) => {
    setBranch({
      ...branch,
      contact: {
        ...branch.contact,
        [name]: value
      }
    })
  }

  const showSucursales = listaSucursales => {
    return listaSucursales.map((sucursal, index) => (
      <div className='card' key={index}>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img
              src='https://dummyimage.com/300x170/a8a8a8/000000.jpg'
              alt=''
              className='card-img'
            />
          </div>
          <div className='col-md-8'>
            <h5 className='card-header'>{`${sucursal.name.nameCompany}. ${sucursal.name.companySuffix}`}</h5>
            <div className='card-body'>
              {`${sucursal.addres.street.number} - ${sucursal.addres.street.name}`}
              <br />
              {`${sucursal.addres.city}, ${sucursal.addres.country}`}
              <br />
              <abbr title='Telefono'>Telefono:</abbr>
              {sucursal.contact.phoneNumber}
              <br />
              <a href={`mailto:${sucursal.contact.email}`}>
                {sucursal.contact.email}
              </a>
              <br />
            </div>
            <div className='card-footer btn-group'>
              <button className='btn btn-warning block'>Editar</button>
              <button className='btn btn-danger block'>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  const sendBranch = ev => {
    ev.preventDefault()
    console.log('New branch')
  }
  return (
    <div className='container row'>
      <div className='col-lg-4 col-md-5'>
        <div className='card text-left'>
          <div className='card-body'>
            <h5 className='card-title text-center mb-2'>Registro</h5>
            <form onSubmit={sendBranch}>
              <hr />
              <h6 className='card-subtitle my-2 text-muted'>Nombres</h6>
              <label htmlFor='nameCompanyInput'>Nombre de compania</label>
              <input
                type='text'
                className='form-control'
                id='nameCompanyInput'
                name='nameCompany'
                value={branch.name.nameCompany}
                onChange={e => handleName(e.target)}
              />
              <label htmlFor='companySuffixInput'>Iniciales</label>
              <input
                type='text'
                className='form-control'
                id='companySuffixInput'
                name='companySuffix'
                value={branch.name.companySuffix}
                onChange={e => handleName(e.target)}
              />
              <hr />
              <h6 className='card-subtitle my-2 text-muted'>Direccion</h6>
              <label htmlFor='addresStreetNameInput'>Calle</label>
              <input
                type='text'
                className='form-control'
                id='addresStreetNameInput'
                name='streetName'
                value={branch.addres.street.streetName}
                onChange={e => handleStreet(e.target)}
              />
              <label htmlFor='addresStreetNumberInput'>Numero</label>
              <input
                type='text'
                className='form-control'
                id='addresStreetNumberInput'
                name='streetNumber'
                value={branch.addres.street.streetNumber}
                onChange={e => handleStreet(e.target)}
              />
              <label htmlFor='cityInput'>Ciudad</label>
              <input
                type='text'
                className='form-control'
                id='cityInput'
                name='city'
                value={branch.addres.city}
                onChange={e => handleAddres(e.target)}
              />
              <label htmlFor='stateInput'>Estado</label>
              <input
                type='text'
                className='form-control'
                id='stateInput'
                name='state'
                value={branch.addres.state}
                onChange={e => handleAddres(e.target)}
              />
              <label htmlFor='countryInput'>Pais</label>
              <input
                type='text'
                className='form-control'
                id='countryInput'
                name='country'
                value={branch.addres.country}
                onChange={e => handleAddres(e.target)}
              />
              <label htmlFor='countryCodeInput'>Codigo</label>
              <input
                type='text'
                className='form-control'
                id='countryCodeInput'
                name='countryCode'
                value={branch.addres.countryCode}
                onChange={e => handleAddres(e.target)}
              />
              <hr />
              <h6 className='card-subtitle my-2 text-muted'>Contacto</h6>
              <label htmlFor='phoneNumberInput'>Telefono</label>
              <input
                type='text'
                className='form-control'
                id='phoneNumberInput'
                name='phoneNumber'
                value={branch.contact.phoneNumber}
                onChange={e => handleContact(e.target)}
              />
              <label htmlFor='emailInput'>Correo electronico</label>
              <input
                type='text'
                className='form-control'
                id='emailInput'
                name='email'
                value={branch.contact.email}
                onChange={e => handleContact(e.target)}
              />
              <button className='btn btn-primary mt-2'>Agregar</button>
            </form>
          </div>
        </div>
      </div>

      <div className='col'>{showSucursales(sucursales)}</div>
    </div>
  )
}

export default Sucursal
