import React from 'react'

const FromRegister = ({ endProcess }) => {

  const sendForm = (e) => {
    e.preventDefault()
    console.log('asdasdasd')
    endProcess(true)
  }

  return (
    <div className='card bg-ligh row mx-3 my-2 px-2 py-3 d-flex justify-content-center'>
      <div className="container">
        <h2 className='text-center'>Registro</h2>
        <form className='col-md-5' onSubmit={sendForm}>
          <div className='form-group border px-2 py-3'>
            <h4>Datos personales</h4>
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
            <input type='text' className='form-control' id='phoneNumberInput' />
            <div className='row my-2'>
              <label htmlFor='birthdayInput' className='col-5 col-form-label'>
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
  
            <div className='from-control'>
              <h4>Iniciar sesion</h4>
              <label htmlFor='emailInput'>Correo electronico</label>
              <input type='email' className='form-control' id='emailInput' />
              <label htmlFor='userNameInput'>Usuario</label>
              <input type='text' className='form-control' id='userNameInput' />
              <label htmlFor='passInput'>Contraseña</label>
              <input type='password' className='form-control' id='passInput' />
              <label htmlFor='avatarInput'>Avatar</label>
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='customFileLang'
                  lang='es'
                />
                <label className='custom-file-label' htmlFor='customFileLang'>
                  Seleccionar Archivo
                </label>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='userTypeInput'>Tipo de usuario</label>
              <select className='form-control' id='userTypeInput'>
                <option defaultValue>
                  Seleccione una opcion
                </option>
                <option value='admin'>Administrador</option>
                <option value='account-manager'>Agent de cuenta</option>
                <option value='client'>Cliente</option>
              </select>
            </div>
          </div>
          <div className='form-group border px-2 py-3'>
            <h4>Direccion</h4>
            <label htmlFor='streetNameInput'>Calle</label>
            <input type='text' className='form-control' id='streetNameInput' />
            <label htmlFor='streetNumberInput'>Numero</label>
            <input type='text' className='form-control' id='streetNumberInput' />
            <label htmlFor='streetCityInput'>Ciudad</label>
            <input type='text' className='form-control' id='streetCityInput' />
            <label htmlFor='streetCountyInput'>Provincia</label>
            <input type='text' className='form-control' id='streetCountyInput' />
            <label htmlFor='streetCountryInput'>Pais</label>
            <input type='text' className='form-control' id='streetCountryInput' />
            <label htmlFor='streetCountryCodeInput'>Codigo postal</label>
            <input
              type='text'
              className='form-control'
              id='streetCountryCodeInput'
            />
          </div>
          <button type='submit' className='btn btn-primary btn-block'>
            Agregar
          </button>
        </form>
      </div>
    </div>
  )
}

export default FromRegister
