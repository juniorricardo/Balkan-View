const urlUsers = 'https://raw.githubusercontent.com/juniorricardo/sucursal-bancario/master/src/json/usuarios.json'
// const LoadListUser = async() => {
//   console.log('Cargando usuario en localStorage');
//   await fetch(urlUsers)
//   .then(r => r.json())
//   .then(e => localStorage.setItem('userList',JSON.stringify(e.userList)))
// }

const LoadListUser = () => {
  let users = fetch(urlUsers)
    .then(res => {
      ((res.ok) ? console.log('SUCCESS') : console.log('NOT SUCCESSFUL'))
      return res.json()
    })
    .then(data => {
      return data.userList
    })
    .catch(error => console.log('ERROR FETCH', error))
  return users
}

export default LoadListUser