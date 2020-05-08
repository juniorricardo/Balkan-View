import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, updateUser } from '../../../redux/actions/userActions'

const FormRegister = ({ showForm }) => {
  const [user, setUser] = useState({})

  //  name
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
    jobTitle: ''
  })
  //<-
  //const [userType, setUserType] = useState('')
  const [document, setDocument] = useState(0)
  const [birthday, setBirthday] = useState('')
  //  addres
  //  =>street
  const [streetNumber, setStreetNumber] = useState('')
  const [streetName, setStreetName] = useState('')
  // <-
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [countryCode, setCountryCode] = useState('')
  // <-
  const [phoneNumber, setPhoneNumber] = useState('')
  const [avatar, setAvatar] = useState('')
  //  login
  const [login, setLogin] = useState({
    email: '',
    acceso: {
      userName: '',
      password: ''
    }
  })

  const [nuevo, setNuevo] = useState({
    name: { firstName: '', lastName: '', jobTitle: '' },
    addres: {
      street: { number: '', name: '' },
      city: '',
      state: '',
      country: '',
      countryCode: ''
    },
    phoneNumber: '',
    avatar: '',
    login: { email: '', acceso: { userName: '', password: '' } }
  })

  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState(() => {
    var userInit = JSON.parse(localStorage.getItem('userEdit'))
    debugger
    if (!userInit) {
      return false
    } else {
      setUser(userInit)
      return true
    }
  })

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submit:')
    setNuevo({
      ...nuevo,
      login
    })
    console.log('nuevo usuario', nuevo)
    debugger
    // setUser({
    //   name: { firstName, lastName, jobTitle },
    //   addres: {
    //     street: { number: streetNumber, name: streetName },
    //     city,
    //     state,
    //     country,
    //     countryCode
    //   },
    //   phoneNumber,
    //   avatar,
    //   login: {
    //     email,
    //     userName,
    //     password
    //   }
    // })
    if (editMode) {
      console.log('Edit')
    } else {
      console.log('Add')
      debugger
      console.log('CAPTURANDO USUARIO', user)
    }
    localStorage.setItem('userEdit', null)
    showForm(false)
  }

  useEffect(() => {
    console.log('editMode', editMode)
  }, [])

  return (
    <div className='card bg-light'>
      <div className='card-header text-center'>
        <h3>Registro</h3>
      </div>
      <div className='card-body'>
        <div className='card-deck'>
          <div className='col-lg-4 col-sm-12 mb-2'>
            {
              // avatar
              // https://www.youtube.com/watch?v=XeiOnkEI7XI
              // axios post and firabase
            }
            <div className='card'>
              <div className='card-body form-group'>
                <h4 className='card-title'>Datos personales</h4>
                <label htmlFor='firstNameInput'>Nombre</label>
                <input
                  type='text'
                  className='form-control'
                  id='firstNameInput'
                  placeholder='Ingrese su nombre'
                  name='firstName'
                  value={name.firstName}
                  onChange={e =>
                    setName({ ...name, [e.target.name]: e.target.value })
                  }
                />
                <label htmlFor='lastNameInput'>Apellido</label>
                <input
                  type='text'
                  className='form-control'
                  id='lastNameInput'
                  placeholder='Ingrese su Apellido'
                  name='lastName'
                  value={name.lastName}
                  onChange={e =>
                    setName({ ...name, [e.target.name]: e.target.value })
                  }
                />
                <label htmlFor='jobTitleInput'>Trabajo</label>
                <input
                  type='text'
                  className='form-control'
                  id='jobTitleInput'
                  placeholder='Ingrese el puesto de trabajo'
                  name='jobTitle'
                  value={name.jobTitle}
                  onChange={e =>
                    setName({ ...name, [e.target.name]: e.target.value })
                  }
                />
                <label htmlFor='documentInput'>Documento</label>
                <input
                  type='number'
                  className='form-control'
                  id='documentInput'
                  placeholder='Ingrese su documento'
                  value={document}
                  onChange={e => setDocument(e.target.value)}
                />
                <label htmlFor='phoneNumberInput'>Telefono</label>
                <input
                  type='text'
                  className='form-control'
                  id='phoneNumberInput'
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                />
                <div className='row my-2'>
                  <label
                    htmlFor='birthdayInput'
                    className='col-5 col-form-label wrap'
                  >
                    Cumpleaños
                  </label>
                  <div className='col-7'>
                    <input
                      className='form-control'
                      type='date'
                      id='birthdayInput'
                      defaultValue={birthday}
                      onChange={e => setBirthday(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-sm-12 mb-2'>
            <div className='card'>
              <div className='card-body form-group'>
                <h4 className='card-title'>Iniciar sesion</h4>
                <label htmlFor='emailInput'>Correo electronico</label>
                <input
                  type='email'
                  className='form-control'
                  id='emailInput'
                  name='email'
                  value={login.email}
                  onChange={e =>
                    setLogin({
                      ...login,
                      [e.target.name]: e.target.value
                    })
                  }
                />
                <label htmlFor='userNameInput'>Usuario</label>
                <input
                  type='text'
                  className='form-control'
                  id='userNameInput'
                  name='userName'
                  value={login.acceso.userName}
                  onChange={e => {
                    console.log(e.target.name)
                    debugger
                    setLogin({
                      ...login,
                      acceso: {
                        ...login.acceso,
                        [e.target.name]: e.target.value
                      }
                    })
                  }}
                />
                <label htmlFor='passInput'>Contraseña</label>
                <input
                  type='password'
                  className='form-control'
                  id='passInput'
                  name='password'
                  value={login.acceso.password}
                  onChange={e =>
                    setLogin({
                      ...login,
                      acceso: {
                        ...login.acceso,
                        [e.target.name]: e.target.value
                      }
                    })
                  }
                />

                <label htmlFor='userTypeInput'>Tipo de usuario</label>
                <select className='form-control' id='userTypeInput'>
                  <option defaultValue>Seleccione una opcion</option>
                  <option value='admin'>Administrador</option>
                  <option value='account-manager'>Agent de cuenta</option>
                  <option value='client'>Cliente</option>
                </select>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-sm-12 mb-2'>
            <div className='card'>
              <div className='card-body form-group'>
                <h4 className='card-title'>Direccion</h4>
                <label htmlFor='streetNameInput'>Calle</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetNameInput'
                  value={streetName}
                  onChange={e => setStreetName(e.target.value)}
                />
                <label htmlFor='streetNumberInput'>Numero</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetNumberInput'
                  value={streetNumber}
                  onChange={e => setStreetNumber(e.target.value)}
                />
                <label htmlFor='streetCityInput'>Ciudad</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetCityInput'
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
                <label htmlFor='streetCountyInput'>Provincia</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetCountyInput'
                  value={state}
                  onChange={e => setState(e.target.value)}
                />
                <label htmlFor='streetCountryInput'>Pais</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetCountryInput'
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                />
                <label htmlFor='streetCountryCodeInput'>Codigo postal</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetCountryCodeInput'
                  value={countryCode}
                  onChange={e => setCountryCode(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card-footer text-center'>
        <button
          className={`btn w-80 btn-${
            editMode ? 'warning text-light' : 'success'
          }`}
          onClick={handleSubmit}
        >
          <i className='fas fa-user-plus'></i>
          {editMode ? ' Actualizar usuario' : ' Agregar'}
        </button>
      </div>
    </div>
  )
}

export default FormRegister
