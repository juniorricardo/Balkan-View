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
        number: '',
        name: ''
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

  /*TODO:
    FIXME:
  */
  const handleName = ({ name, value }) => {
    setBranch({
      ...branch
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
            <h5 class='card-title text-center mb-2'>Registro</h5>
            <form onSubmit={sendBranch}>
              <hr />
              <h6 class='card-subtitle my-2 text-muted'>Nombres</h6>
              <label htmlFor='nameCompanyInput'>Nombre de compania</label>
              <input
                type='text'
                className='form-control'
                id='nameCompanyInput'
                value={branch.name.nameCompany}
                onChange={e =>
                  setBranch({
                    ...branch,
                    name: {
                      ...branch.name,
                      nameCompany: e.target.value
                    }
                  })
                }
              />
              <label htmlFor='companySuffixInput'>Iniciales</label>
              <input
                type='text'
                className='form-control'
                id='companySuffixInput'
                value={branch.name.companySuffix}
                onChange={e =>
                  setBranch({
                    ...branch,
                    name: {
                      ...branch.name,
                      companySuffix: e.target.value
                    }
                  })
                }
              />
              <hr />
              <h6 class='card-subtitle my-2 text-muted'>Direccion</h6>
              <label htmlFor='addresStreetNameInput'>Calle</label>
              <input
                type='text'
                className='form-control'
                id='addresStreetNameInput'
                value={branch.addres.street.name}
                onChange={e =>
                  setBranch({
                    ...branch,
                    addres: {
                      ...branch.addres,
                      street: {
                        ...branch.addres.street,
                        name: e.target.value
                      }
                    }
                  })
                }
              />
              <label htmlFor='addresStreetNumberInput'>Numero</label>
              <input
                type='text'
                className='form-control'
                id='addresStreetNumberInput'
                value={branch.addres.street.number}
                onChange={e =>
                  setBranch({
                    ...branch,
                    addres: {
                      ...branch.addres,
                      street: {
                        ...branch.addres.street,
                        number: e.target.value
                      }
                    }
                  })
                }
              />
              <label htmlFor='cityInput'>Ciudad</label>
              <input
                type='text'
                className='form-control'
                id='cityInput'
                value={branch.addres.city}
                onChange={e =>
                  setBranch({
                    ...branch,
                    addres: {
                      ...branch.addres,
                      city: e.target.value
                    }
                  })
                }
              />
              <label htmlFor='stateInput'>Estado</label>
              <input
                type='text'
                className='form-control'
                id='stateInput'
                value={branch.addres.state}
                onChange={e =>
                  setBranch({
                    ...branch,
                    addres: {
                      ...branch.addres,
                      state: e.target.value
                    }
                  })
                }
              />
              <label htmlFor='countryInput'>Pais</label>
              <input
                type='text'
                className='form-control'
                id='countryInput'
                value={branch.addres.country}
                onChange={e =>
                  setBranch({
                    ...branch,
                    addres: {
                      ...branch.addres,
                      country: e.target.value
                    }
                  })
                }
              />
              <label htmlFor='countryCodeInput'>Codigo</label>
              <input
                type='text'
                className='form-control'
                id='countryCodeInput'
                value={branch.addres.countryCode}
                onChange={e =>
                  setBranch({
                    ...branch,
                    addres: {
                      ...branch.addres,
                      countryCode: e.target.value
                    }
                  })
                }
              />
              <hr />
              <h6 class='card-subtitle my-2 text-muted'>Contacto</h6>
              <label htmlFor='phoneNumberInput'>Telefono</label>
              <input
                type='text'
                className='form-control'
                id='phoneNumberInput'
                value={branch.contact.phoneNumber}
                onchange={e => handleContact(e.target)}
              />
              <label htmlFor='emailInput'>Correo electronico</label>
              <input
                type='text'
                className='form-control'
                id='emailInput'
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
