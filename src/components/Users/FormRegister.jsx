import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, updateUser } from './../../redux/actions/userActions'

const FormRegister = ({ showForm }) => {

  const [user, setUser] = useState(null)

  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState(() => {
    var userInit = JSON.parse(localStorage.getItem('userEdit'))
    if (!userInit) {
      return false
    } else {
      setUser(userInit)
      return true
    }
  })

  const sendForm = e => {
    e.preventDefault()
    console.log('Submit')
    if (editMode) {
      //dispatch(updateUser(user))
    } else {
      //dispatch(addUser(user))
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
        <form className='row d-flex justify-content-around' onSubmit={sendForm}>
          <div className='col-lg-3 col-md-12 mb-2'>
            <div className='card'>
              <div className='card-body form-group'>
                <h4 className='card-title'>Datos personales</h4>
                <label htmlFor='firstNameInput'>Nombre</label>
                <input
                  type='text'
                  className='form-control'
                  id='firstNameInput'
                  placeholder='Ingrese su nombre'
                />
                <label htmlFor='lastNameInput'>Apellido</label>
                <input
                  type='text'
                  className='form-control'
                  id='lastNameInput'
                  placeholder='Ingrese su Apellido'
                />
                <label htmlFor='jobTitleInput'>Trabajo</label>
                <input
                  type='text'
                  className='form-control'
                  id='jobTitleInput'
                  placeholder='Ingrese el puesto de trabajo'
                />
                <label htmlFor='documentInput'>Documento</label>
                <input
                  type='number'
                  className='form-control'
                  id='documentInput'
                  placeholder='Ingrese su documento'
                />
                <label htmlFor='phoneNumberInput'>Telefono</label>
                <input
                  type='text'
                  className='form-control'
                  id='phoneNumberInput'
                />
                <div className='row my-2'>
                  <label
                    htmlFor='birthdayInput'
                    className='col-5 col-form-label'
                  >
                    Cumpleaños
                  </label>
                  <div className='col-7'>
                    <input
                      className='form-control'
                      type='date'
                      id='birthdayInput'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-12 mb-2'>
            <div className='card'>
              <div className='card-body form-group'>
                <h4 className='card-title'>Iniciar sesion</h4>
                <label htmlFor='emailInput'>Correo electronico</label>
                <input type='email' className='form-control' id='emailInput' />
                <label htmlFor='userNameInput'>Usuario</label>
                <input
                  type='text'
                  className='form-control'
                  id='userNameInput'
                />
                <label htmlFor='passInput'>Contraseña</label>
                <input
                  type='password'
                  className='form-control'
                  id='passInput'
                />
                <label htmlFor='avatarInput'>Avatar</label>
                <div className='custom-file'>
                  <input
                    type='file'
                    className='custom-file-input'
                    id='fileInput'
                  />
                  <label className='custom-file-label' htmlFor='fileInput'>
                    Seleccionar Archivo
                  </label>
                </div>
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

          <div className='col-lg-3 col-md-12 mb-2'>
            <div className='card'>
              <div className='card-body form-group'>
                <h4 className='card-title'>Direccion</h4>
                <label htmlFor='streetNameInput'>Calle</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetNameInput'
                />
                <label htmlFor='streetNumberInput'>Numero</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetNumberInput'
                />
                <label htmlFor='streetCityInput'>Ciudad</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetCityInput'
                />
                <label htmlFor='streetCountyInput'>Provincia</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetCountyInput'
                />
                <label htmlFor='streetCountryInput'>Pais</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetCountryInput'
                />
                <label htmlFor='streetCountryCodeInput'>Codigo postal</label>
                <input
                  type='text'
                  className='form-control'
                  id='streetCountryCodeInput'
                />
              </div>
            </div>
          </div>

          <div className='col-lg-2 col-md-12 mb-3 align-self-center'>
            <button
              className={`btn btn-block btn-large btn-${
                editMode ? 'warning text-light' : 'dark'
              }`}
            >
              <i className='fas fa-user-plus'></i>
              {editMode ? ' Actualizar usuario' : ' Agregar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormRegister
